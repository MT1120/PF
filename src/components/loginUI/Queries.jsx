import React, { useState, useEffect } from 'react';
import MobileFooter from '../sideBar/mobileFooter';
import logo from '../assets/Logo DBAcademy.png';
import SideBar from '../sideBar/sideBarNavigation';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaCheckCircle } from "react-icons/fa";
import { useParams, useNavigate } from 'react-router-dom';

export default function Queries() {
    const { idmodule } = useParams();
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [statement, setStatement] = useState('');
    const [code, setCode] = useState('');
    const [solution, setSolution] = useState([]);
    const [result, setResult] = useState('');
    const [areEqual, setAreEqual] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [responseTimes, setResponseTimes] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:8002/api/code/?lesson=${idmodule}`)
            .then(response => response.json())
            .then(data => {
                setQuestions(data);
                setStatement(data[0].statement);
                setCode(data[0].starter_code.replace(/\\r\\n/g, '\n'));
                setSolution(JSON.parse(data[0].solution));
                setStartTime(Date.now());
            })
            .catch(error => console.error('Error al cargar las preguntas:', error));

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [idmodule]);

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            const nextQuestionIndex = currentQuestionIndex + 1;
            setCurrentQuestionIndex(nextQuestionIndex);
            setStatement(questions[nextQuestionIndex].statement);
            setCode(questions[nextQuestionIndex].starter_code.replace(/\\r\\n/g, '\n'));
            setSolution(JSON.parse(questions[nextQuestionIndex].solution));
            setResult('');
            setAreEqual(false);
            setStartTime(Date.now());
        } else {
            setShowModal(true);
        }
    };

    const submitCode = () => {
        setResult('');
        const sqlQuery = encodeURIComponent(code);
        fetch(`http://localhost:8001/${sqlQuery}`)
            .then(response => response.json())
            .then(result => {
                setResult(result);
                if (result.length !== solution.length) {
                    setAreEqual(false);
                } else {
                    const areEqual = result.every((item, index) => {
                        const itemKeys = Object.keys(item);
                        const solutionKeys = Object.keys(solution[index]);
                        if (itemKeys.length !== solutionKeys.length) {
                            return false;
                        }
                        return itemKeys.every(key => item[key] === solution[index][key]);
                    });

                    setAreEqual(areEqual);
                    if (areEqual) {
                        const endTime = Date.now();
                        const responseTime = (endTime - startTime) / 1000; // Convert to seconds
                        setResponseTimes([...responseTimes, responseTime]);
                    }
                }
            })
            .catch(error => console.error('Error al comprobar el SQL:', error));
    };

    const getTotalTime = () => {
        return responseTimes.reduce((total, time) => total + time, 0).toFixed(2);
    };

    return (
        <div className='bg-slate-300 w-full h-screen relative overflow-x-hidden'>
            <nav className="bg-white h-[80px] w-screen mb-2 shadow-xl">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <a href="/LoginH" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className=" text-home w-16 h-16" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-home">DB Academy</span>
                    </a>
                </div>
            </nav>
            <div className='h-screen object-cover flex items-center text-white'>
                {isMobile ? <div></div> : <SideBar moduleId={idmodule} />}
                <div className="flex flex-col flex-1 ml-3 mr-3 mt-3 w-[25rem] items-center relative overflow-x-hidden">
                    <div className='mb-3 mt-3 bg-white max-w-full w-[800px] h-[95svh] rounded-3xl overflow-y-auto overflow-x-hidden'>
                        <div className='p-1 mt-1 flex flex-1 flex-row justify-around'>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center overflow-x-hidden">
                                <FaArrowAltCircleLeft />
                            </div>
                            <h1 className='text-home text-xl p-2'>
                                {statement}
                            </h1>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center">
                                <FaArrowAltCircleRight />
                            </div>
                        </div>
                        <div className="mx-auto my-1 h-[0.2rem] max-w-full w-[100%] bg-home" />
                        <div className='flex flex-col flex-1 mt-8 mx-4'>
                            <form onSubmit={e => { e.preventDefault(); submitCode(); }}>
                                <div className="w-full mb-4 rounded-lg bg-[#00008E]">
                                    <div className="px-4 py-2 bg-white rounded-t-lg">
                                        <label htmlFor="comment" className="sr-only">Your query</label>
                                        <textarea id="comment" rows="4" className="w-full h-[200px] px-4 py-2 text-sm text-home bg-white border-0 focus:ring-0 dark:text-home dark:placeholder-gray-400" placeholder="Your query here" value={code} onChange={e => setCode(e.target.value)} required></textarea>
                                    </div>
                                    <div className="flex items-center justify-center px-3 py-2 border-t dark:border-gray-600">
                                        <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                            Run
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {result.error ? (
                            <div className='mt-4 mx-auto max-w-3xl text-align: center'>
                                <div className='overflow-x-auto'>
                                    <p className="text-lg text-red-500 text-center">{"Error: " + result.error}</p>
                                </div>
                            </div>
                        ) : (
                            result && (
                                <div className='mt-4 mx-auto max-w-3xl text-align: center'>
                                    <div className='overflow-x-auto'>
                                        <p className={`text-lg ${areEqual ? 'text-green-600' : 'text-red-600'} text-center`} >{areEqual ? 'Respuesta correcta' : 'Respuesta incorrecta'}</p>
                                        <table className='border-collapse border border-black mx-auto'>
                                            <thead>
                                                <tr className='bg-gray-500'>
                                                    {result.length > 0 && Object.keys(result[0]).map((column, index) => (
                                                        <th key={index} className="border border-black px-4 py-2">{column}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {result.map((item, index) => (
                                                    <tr key={index} className='bg-white'>
                                                        {Object.keys(item).map((column, i) => (
                                                            <td key={i} className="border border-black px-4 py-2 text-black">{item[column]}</td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )
                        )}
                        {areEqual && (
                            <div className='mt-4 mx-auto max-w-3xl text-align: center'>
                                <button onClick={handleNextQuestion} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                    {currentQuestionIndex < questions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-80 text-center">
                        <div className="mb-4">
                            <FaCheckCircle className="text-blue-600 text-4xl" />
                        </div>
                        <p className="text-2xl text-blue-600">Has completado el cuestionario. Tu tiempo total es {getTotalTime()} segundos.</p>
                        <button onClick={() => navigate('/loginH')} className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors duration-300">
                            Ir a Inicio
                        </button>
                    </div>
                </div>
            )}
            <div className='container sm:hidden'>
                <footer className='flex object-cover absolute -bottom-15'>
                    <MobileFooter />
                </footer>
            </div>
        </div>
    );
}
