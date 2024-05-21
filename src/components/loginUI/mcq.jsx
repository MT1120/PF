import React, { useState, useEffect } from 'react';
import MobileFooter from '../sideBar/mobileFooter'
import { SiCurseforge } from "react-icons/si";
import SideBar from '../sideBar/sideBarNavigation';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

function MultipleChoiceQuestion() {
    const [questionData, setQuestionData] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);


    useEffect(() => {
        fetch('http://127.0.0.1:8002/api/mcq/2/')
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
        return <p>Cargando pregunta...</p>;
    }

    return (
        <div className='w-full h-screen relative overflow-x-hidden'>
            <nav className="bg-nav h-[80px] w-screen mb-2">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <SiCurseforge className=" text-home w-16 h-16" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-home">DATA FORGE</span>
                    </a>
                </div>
            </nav>
            <div className='h-screen  object-cover flex items-center text-white '>
                {isMobile ? <div></div> : <SideBar />}
                <div className="flex flex-col flex-1 ml-3 mr-3 mt-3  w-[25rem] items-center relative overflow-x-hidden ">
                    {/*Description */}
                    <div className='mb-3 mt-3 bg-white  max-w-full w-[800px] h-[95svh] rounded-3xl   overflow-y-auto overflow-x-hidden'>
                        <div className='p-1 mt-1 flex flex-1 flex-row justify-around'>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center overflow-x-hidden">
                                <FaArrowAltCircleLeft />
                            </div>
                            <h1 className='text-home text-xl   p-2'>
                                Pregunta
                            </h1>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center">
                                <FaArrowAltCircleRight />
                            </div>
                        </div>
                        <div className="mx-auto my-1 h-[0.2rem] max-w-full w-[100%] bg-home " />
                        <div className=' flex flex-col flex-1 mt-8 mx-4'>
                            <div className='text-black'>
                                <h2>{questionData.question}</h2>
                                <div>
                                    {JSON.parse(questionData.choices).map((option, index) => (
                                        <div key={index}>
                                            <input
                                                type="radio"
                                                value={option}
                                                checked={selectedOption === option}
                                                onChange={handleOptionChange}
                                            />
                                            {option}
                                        </div>
                                    ))}
                                </div>
                                <button onClick={checkAnswer}>Check Answer</button>
                                {feedback && <p>{feedback}</p>}
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
