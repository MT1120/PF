import React, { useState, useEffect } from 'react';
import MobileFooter from '../sideBar/mobileFooter'
import logo from '../assets/Logo DBAcademy.png'
import SideBar from '../sideBar/sideBarNavigation';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useParams } from 'react-router-dom';

function MultipleChoiceQuestion() {
    const { idmodule } = useParams();
    const [questionData, setQuestionData] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

    const spinnerStyle = {
        border: '8px solid rgba(0, 0, 0, 0.1)',
        borderLeftColor: '#4F46E5', // Color del borde izquierdo
        borderRadius: '50%',
        width: '64px',
        height: '64px',
        animation: 'spin 1s linear infinite',
    };

    const spinKeyframes = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    `;

    useEffect(() => {
        fetch(`http://127.0.0.1:8002/api/mcq/${idmodule === '1' ? '3' : idmodule === '2' ? '4' : idmodule==='3'?'5':''}/`)
            .then(response => response.json())
            .then(data => {
            setQuestionData(data);
            })
            .catch(error => console.error('Error al cargar la pregunta:', error));
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const checkAnswer = () => {
        if (selectedOption === questionData.correct_answer) {
            setFeedback('Respuesta correcta');
        } else {
            setFeedback('Respuesta incorrecta');
        }
    };

    if (!questionData) {
        return (
            <div className="flex flex-col items-center justify-center h-screen" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <style>{spinKeyframes}</style>
                <div style={spinnerStyle}></div>
                <p style={{ marginTop: '16px', fontSize: '18px', color: '#4A5568' }}>Cargando pregunta...</p>
            </div>
        );
    }

    return (
        <div className='w-full h-screen relative overflow-x-hidden'>
            <nav className="bg-nav h-[80px] w-screen mb-2">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className=" text-home w-16 h-16" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-home">DB Academy</span>
                    </a>
                </div>
            </nav>
            <div className='h-screen  object-cover flex items-center text-white '>
                {isMobile ? <div></div> : <SideBar moduleId={idmodule} />}
                <div className="flex flex-col items-center w-[60rem] mx-3 mt-3 relative overflow-x-hidden">
                    {/* Description */}
                    <div className="bg-white max-w-full w-[800px] h-[95svh] rounded-3xl overflow-y-auto overflow-x-hidden shadow-lg">
                        <div className="flex items-center justify-between px-4 py-2">
                            <button className="p-2 rounded-full bg-blue-700 text-white text-lg font-semibold hover:bg-gray-600 transition-colors duration-300">
                                <FaArrowAltCircleLeft />
                            </button>
                            <h1 className="text-home text-xl">Pregunta</h1>
                            <button className="p-2 rounded-full bg-blue-700 text-white text-lg font-semibold hover:bg-gray-600 transition-colors duration-300">
                                <FaArrowAltCircleRight />
                            </button>
                        </div>
                        <hr className="mx-auto w-full h-[2px] bg-home" />
                        <div className="flex flex-col mt-8 mx-4">
                            <div className="text-black">
                                <h2 className="text-xl font-semibold mb-4">{questionData.question}</h2>
                                <div className="flex flex-col space-y-2">
                                    {JSON.parse(questionData.choices).map((option, index) => (
                                        <div key={index} className="flex items-center">
                                            <input
                                                type="radio"
                                                value={option}
                                                checked={selectedOption === option}
                                                onChange={handleOptionChange}
                                                className="mr-2"
                                            />
                                            <label>{option}</label>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={checkAnswer}
                                    className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors duration-300"
                                >
                                    Check Answer
                                </button>
                                {feedback && <p className={feedback === 'Respuesta correcta' ? 'mt-4 text-green-600' : 'mt-4 text-red-600'}>{feedback}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container sm:hidden'>
                <footer className='flex object-cover   absolute  -bottom-15 '>
                    <MobileFooter />
                </footer>
            </div>
        </div>
    );
}

export default MultipleChoiceQuestion;
