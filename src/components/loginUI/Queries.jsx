import React from 'react'
import MobileFooter from '../sideBar/mobileFooter'
import logo from '../assets/Logo DBAcademy.png'
import SideBar from '../sideBar/sideBarNavigation';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";


export default function Queries() {
    const { idmodule } = useParams();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
    const [statement, setStatement] = useState('');
    const [code, setCode] = useState('');
    const [solution, setSolution] = useState('');
    const [result, setResult] = useState('');
    const [areEqual, setAreEqual] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:8002/api/code/?lesson=${idmodule}`)
            .then(response => response.json())
            .then(data => {
                setStatement(data[0].statement);
                setCode(data[0].starter_code.replace(/\\r\\n/g, '\n'));
                setSolution(JSON.parse(data[0].solution));

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

    function submitCode() {
        setResult('');
        const sqlQuery = encodeURIComponent(code);
        fetch(`http://localhost:8001/${sqlQuery}`)
            .then(response => response.json())
            .then(result => {
                setResult(result);
                // Verifica si result y solution tienen la misma longitud
                if (result.length !== solution.length) {
                    setAreEqual(false) // Si tienen diferentes longitudes, no son iguales
                } else {
                    // Compara cada elemento de result con su correspondiente en solution
                    const areEqual = result.every((item, index) => {
                        // Compara cada propiedad del objeto actual
                        const itemKeys = Object.keys(item);
                        const solutionKeys = Object.keys(solution[index]);

                        // Si tienen diferentes longitudes de propiedades, no son iguales
                        if (itemKeys.length !== solutionKeys.length) {
                            return false;
                        }

                        // Compara cada propiedad del objeto actual con su correspondiente en solution
                        return itemKeys.every(key => item[key] === solution[index][key]);
                    });

                    setAreEqual(areEqual)
                }
            })
            .catch(error => console.error('Error al comprobar el SQL:', error));
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
                {isMobile ? <div></div> : <SideBar moduleId={idmodule}/>}
                <div className="flex flex-col flex-1 ml-3 mr-3 mt-3  w-[25rem] items-center relative overflow-x-hidden ">
                    {/*Description */}
                    <div className='mb-3 mt-3 bg-white  max-w-full w-[800px] h-[95svh] rounded-3xl   overflow-y-auto overflow-x-hidden'>
                        <div className='p-1 mt-1 flex flex-1 flex-row justify-around'>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center overflow-x-hidden">
                                <FaArrowAltCircleLeft />
                            </div>
                            <h1 className='text-home text-xl   p-2'>
                                {statement}
                            </h1>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center">
                                <FaArrowAltCircleRight />
                            </div>
                        </div>
                        <div className="mx-auto my-1 h-[0.2rem] max-w-full w-[100%] bg-home " />
                        <div className=' flex flex-col flex-1 mt-8 mx-4'>
                            <form onSubmit={e => { e.preventDefault(); submitCode(); }}>
                                <div className="w-full mb-4    rounded-lg bg-[#00008E] ">
                                    <div className="px-4 py-2 bg-white rounded-t-lg ">
                                        <label htmlFor="comment" className="sr-only">Your comment</label>
                                        <textarea id="comment" rows="4" className="w-full h-[200px] px-0 text-sm text-home bg-white border-0  focus:ring-0 dark:text-home dark:placeholder-gray-400" placeholder="Your query here" value={code} onChange={e => setCode(e.target.value)} required ></textarea>
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
                                                    {result.length > 0 && Object.keys(result[0]).map(column => (
                                                        <th className="border border-black px-4 py-2">{column}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {result.map(item => (
                                                    <tr key={item.id} className='bg-white'>
                                                        {result.length > 0 && Object.keys(result[0]).map(column => (
                                                            <td key={column} className="border border-black px-4 py-2 text-black">{item[column]}</td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className='container sm:hidden'>
                <footer className='flex object-cover   absolute  -bottom-15 '>
                    <MobileFooter />
                </footer>
            </div>
        </div>
    )
}
