import React, { useState, useEffect } from 'react';
import MobileFooter from '../sideBar/mobileFooter';
import logo from '../assets/Logo DBAcademy.png';
import SideBar from '../sideBar/sideBarNavigation';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

export default function DragD() {
    const { idmodule } = useParams();
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAttempt, setCurrentAttempt] = useState(1);
    const [textWithBlanks, setTextWithBlanks] = useState('');
    const [choices, setChoices] = useState([]);
    const [solutions, setSolutions] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [feedback, setFeedback] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [responseTimes, setResponseTimes] = useState([]);
    const maxAttempts = 3;

    useEffect(() => {
        fetch(`http://127.0.0.1:8002/api/fill/?lesson=${idmodule}`)
            .then(response => response.json())
            .then(data => {
                setQuestions(data);
                setQuestionData(data[0]);
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

    const setQuestionData = (question) => {
        console.log('Setting question data:', question);
        setTextWithBlanks(question.text_with_blanks);
        setChoices(JSON.parse(question.choices));
        setSolutions(JSON.parse(question.solutions));
        setUserAnswers(new Array(JSON.parse(question.solutions).length).fill(''));
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDragStart = (event, choice) => {
        console.log('Drag start:', choice);
        event.dataTransfer.setData('text', choice);
    };

    const handleDrop = (event, index) => {
        event.preventDefault();
        const answer = event.dataTransfer.getData('text');
        console.log('Drop:', answer, 'at index:', index);
        const updatedAnswers = [...userAnswers];
        updatedAnswers[index] = answer;
        console.log('Updated answers:', updatedAnswers);
        setUserAnswers(updatedAnswers);
    };

    const checkAnswer = () => {
        let endTime = Date.now();
        let responseTime = (endTime - startTime) / 1000; // Convert to seconds
        setResponseTimes([...responseTimes, responseTime]);

        console.log('User answers:', userAnswers);
        console.log('Correct answers:', solutions);

        let isCorrect = userAnswers.every((answer, index) => answer === solutions[index]);
        console.log('Is correct:', isCorrect);

        if (isCorrect) {
            setShowModal(true);
        } else {
            if (currentAttempt < maxAttempts) {
                setCurrentAttempt(currentAttempt + 1);
                setFeedback(`Incorrecto. Intentos restantes: ${maxAttempts - currentAttempt}`);
            } else {
                setFeedback('Lo siento, has agotado tus intentos.');
                setTimeout(() => {
                    if (currentQuestionIndex < questions.length - 1) {
                        let nextQuestionIndex = currentQuestionIndex + 1;
                        setCurrentQuestionIndex(nextQuestionIndex);
                        setQuestionData(questions[nextQuestionIndex]);
                        setStartTime(Date.now());
                        setFeedback('');
                        setCurrentAttempt(1);
                    } else {
                        setShowModal(true);
                    }
                }, 2000);
            }
        }
    };

    const getTotalTime = () => {
        return responseTimes.reduce((total, time) => total + time, 0).toFixed(2);
    };

    return (
        <div className="bg-slate-300 w-full h-screen relative overflow-x-hidden">
            <nav className="bg-white h-[80px] w-screen mb-2 shadow-xl">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <a href="/LoginH" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} alt='/' className=" text-home w-16 h-16" />
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
                                Completa los espacios en blanco
                            </h1>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center">
                                <FaArrowAltCircleRight />
                            </div>
                        </div>
                        <div className="mx-auto my-1 h-[0.2rem] max-w-full w-[100%] bg-home" />
                        <div className='flex flex-col flex-1 mt-8 mx-4'>
                            <p className="text-black text-lg flex flex-wrap items-center">
                                {textWithBlanks.split(/(__\d+__)/g).map((part, index) => (
                                    part.match(/__\d+__/) ? (
                                        <span key={index} onDrop={(event) => handleDrop(event, Math.floor(index / 2))} onDragOver={handleDragOver} className="inline-block border-b-2 border-gray-500 w-36 h-10 mx-1 text-center flex items-center justify-center">
                                            {userAnswers[Math.floor(index / 2)]}
                                        </span>
                                    ) : (
                                        part
                                    )
                                ))}
                            </p>
                            <div className="flex flex-wrap mt-4">
                                {choices.map((choice, index) => (
                                    <div key={index} draggable onDragStart={(event) => handleDragStart(event, choice)} className="bg-blue-500 text-white px-4 py-2 m-2 rounded cursor-pointer">
                                        {choice}
                                    </div>
                                ))}
                            </div>
                            <button onClick={checkAnswer} className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors duration-300">
                                Comprobar Respuesta
                            </button>
                            {feedback && <p className="mt-4 text-red-600">{feedback}</p>}
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-80 text-center">
                        <FiCheckCircle className="text-green-500 text-4xl mb-4" />
                        <p className="text-2xl text-green-600">¡Respuesta correcta!</p>
                        <button onClick={() => {
                            setShowModal(false);
                            if (currentQuestionIndex < questions.length - 1) {
                                let nextQuestionIndex = currentQuestionIndex + 1;
                                setCurrentQuestionIndex(nextQuestionIndex);
                                setQuestionData(questions[nextQuestionIndex]);
                                setStartTime(Date.now());
                                setFeedback('');
                                setCurrentAttempt(1);
                            } else {
                                navigate('/LoginH');
                            }
                        }} className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors duration-300">
                            Continuar
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
