import React, { useState, useEffect } from 'react';
import MobileFooter from '../sideBar/mobileFooter';
import logo from '../assets/Logo DBAcademy.png';
import SideBar from '../sideBar/sideBarNavigation';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { useParams, useNavigate } from 'react-router-dom';

function MultipleChoiceQuestion() {
    const { idmodule } = useParams();
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        fetch(`http://127.0.0.1:8002/api/mcq/?lesson=${idmodule}`)
            .then(response => response.json())
            .then(data => {
                setQuestions(data);
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

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const checkAnswer = () => {
        let content;
        if (selectedOption === questions[currentQuestionIndex].correct_answer) {
            content = {
                message: 'Respuesta correcta',
                icon: <FiCheckCircle className="text-green-600 text-4xl" />,
                color: 'text-green-600'
            };
            setScore(score + 1);
        } else {
            content = {
                message: 'Respuesta incorrecta',
                icon: <FiXCircle className="text-red-600 text-4xl" />,
                color: 'text-red-600'
            };
        }
        setModalContent(content);
        setShowModal(true);
    };

    const handleNextQuestion = () => {
        setShowModal(false);
        setSelectedOption('');
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResults(true);
            setShowModal(false);
        }
    };

    const handleViewResults = () => {
        setModalContent({
            message: `Has completado el cuestionario. Tu puntaje es ${score} de ${questions.length}`,
            icon: <FiCheckCircle className="text-blue-600 text-4xl" />,
            color: 'text-blue-600'
        });
        setShowResults(true);
        setShowModal(true);
    };

    const handleFinalButtonClick = () => {
        navigate(`/queries/${idmodule}`);
    };

    const questionData = questions[currentQuestionIndex];

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
            <div className='h-screen object-cover flex items-center text-white '>
                {isMobile ? <div></div> : <SideBar moduleId={idmodule} />}
                <div className="flex flex-col items-center w-[60rem] mx-3 mt-3 relative overflow-x-hidden">
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
                                <h2 className="text-xl font-semibold mb-4">{questionData ? questionData.question : ''}</h2>
                                <div className="flex flex-col space-y-2">
                                    {questionData && questionData.choices ? JSON.parse(questionData.choices).map((option, index) => (
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
                                    )) : ''}
                                </div>
                                <button
                                    onClick={checkAnswer}
                                    className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors duration-300"
                                >
                                    Verificar Respuesta
                                </button>
                                {/* Modal */}
                                {showModal && (
                                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                        <div className="bg-white rounded-lg p-6 w-80 text-center">
                                            <div className="mb-4">
                                                {modalContent.icon}
                                            </div>
                                            <p className={`text-2xl ${modalContent.color}`}>{modalContent.message}</p>
                                            <button
                                                onClick={handleNextQuestion}
                                                className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors duration-300"
                                            >
                                                {currentQuestionIndex < questions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {/* Resultados */}
                                {showResults && (
                                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                        <div className="bg-white rounded-lg p-6 w-80 text-center">
                                            <div className="mb-4">
                                                <FiCheckCircle className="text-blue-600 text-4xl" />
                                            </div>
                                            <p className="text-2xl text-blue-600">Has completado el cuestionario. Tu puntaje es {score} de {questions.length}</p>
                                            <button
                                                onClick={handleFinalButtonClick}
                                                className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors duration-300"
                                            >
                                                Ir a Queries
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container sm:hidden'>
                <footer className='flex object-cover absolute -bottom-15'>
                    <MobileFooter />
                </footer>
            </div>
        </div>
    );
}

export default MultipleChoiceQuestion;
