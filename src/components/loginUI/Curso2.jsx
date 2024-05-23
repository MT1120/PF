import React from 'react'
import MobileFooter from '../sideBar/mobileFooter'
import logo from '../assets/Logo DBAcademy.png'
import SideBar from '../sideBar/sideBarNavigation';
import { useState, useEffect } from 'react';

import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";


export default function Prueba() {
    const [youtubeID] = useState('yoeV4Ex8C8U')

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
            <div className='h-screen  object-cover flex items-center text-white'>
                {isMobile ? <div></div> : <SideBar moduleId={2}/>}
                <div className="flex flex-col flex-1 ml-3 mr-3 mt-3  w-[25rem] items-center relative overflow-x-auto">
                    <div className='mb-10 bg-white text-black  max-w-full w-[800px] h-[37rem] rounded-3xl   overflow-y-auto p-4'>
                        <div className='p-1 mt-1 flex flex-1 flex-row justify-around'>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center">
                                <FaArrowAltCircleLeft />
                            </div>
                            <h1 className='text-home text-xl   p-2'>
                                Fundamentos de SQL
                            </h1>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center">
                                <FaArrowAltCircleRight />
                            </div>
                        </div>
                        <h2 class="text-xl font-semibold mb-4">2.1. Introducción a SQL</h2>
                        <h3 class="text-lg font-semibold mb-2">Historia y evolución</h3>
                        <p class="mb-4">
                            SQL (Structured Query Language) fue desarrollado en la década de 1970 por IBM. Originalmente llamado SEQUEL (Structured English Query Language), fue diseñado para manipular y recuperar datos almacenados en bases de datos relacionales. SQL se ha convertido en el estándar de facto para interactuar con bases de datos relacionales, y ha sido adoptado por la mayoría de los sistemas de gestión de bases de datos (DBMS).
                        </p>
                        <h3 class="text-lg font-semibold mb-2">Conceptos básicos y terminología</h3>
                        <ul class="list-disc list-inside mb-4 pl-4">
                            <li>Base de datos: Conjunto organizado de datos.</li>
                            <li>Tabla: Estructura dentro de una base de datos que almacena datos en filas y columnas.</li>
                            <li>Fila: Registro individual dentro de una tabla.</li>
                            <li>Columna: Campo dentro de una tabla que almacena un tipo específico de dato.</li>
                            <li>Clave primaria: Columna o conjunto de columnas que identifican de manera única cada fila en una tabla.</li>
                            <li>Clave foránea: Columna o conjunto de columnas que establecen una relación entre dos tablas.</li>
                        </ul>

                        <h2 class="text-xl font-semibold mt-6 mb-4">2.2. Sintaxis Básica de SQL</h2>
                        <h3 class="text-lg font-semibold mb-2">Sentencias básicas</h3>
                        <ul class="list-disc list-inside mb-4 pl-4">
                            <li><strong>SELECT:</strong> Utilizada para consultar datos de una o más tablas.</li>
                            <pre class="bg-gray-200 p-2 rounded mb-4"><code>SELECT columna1, columna2 FROM tabla;</code></pre>
                            <li><strong>INSERT:</strong> Utilizada para añadir nuevos registros a una tabla.</li>
                            <pre class="bg-gray-200 p-2 rounded mb-4"><code>INSERT INTO tabla (columna1, columna2) VALUES (valor1, valor2);</code></pre>
                            <li><strong>UPDATE:</strong> Utilizada para modificar datos existentes en una tabla.</li>
                            <pre class="bg-gray-200 p-2 rounded mb-4"><code>UPDATE tabla SET columna1 = valor1 WHERE condicion;</code></pre>
                            <li><strong>DELETE:</strong> Utilizada para eliminar registros de una tabla.</li>
                            <pre class="bg-gray-200 p-2 rounded mb-4"><code>DELETE FROM tabla WHERE condicion;</code></pre>
                        </ul>
                        <h3 class="text-lg font-semibold mb-2">Estructura de una consulta SQL</h3>
                        <p class="mb-4">
                            Una consulta SQL típica consta de una cláusula SELECT seguida de una lista de columnas a recuperar, una cláusula FROM que especifica las tablas involucradas y, opcionalmente, una cláusula WHERE para filtrar los resultados. Por ejemplo:
                        </p>
                        <pre class="bg-gray-200 p-2 rounded mb-4"><code>SELECT nombre, edad FROM estudiantes WHERE edad {'>'} 18;</code></pre>

                        <h2 class="text-xl font-semibold mt-6 mb-4">2.3. Tipos de Datos en SQL</h2>
                        <h3 class="text-lg font-semibold mb-2">Tipos de datos numéricos</h3>
                        <ul class="list-disc list-inside mb-4 pl-4">
                            <li>INT: Entero.</li>
                            <li>FLOAT: Número de punto flotante.</li>
                            <li>DECIMAL: Número decimal con precisión definida.</li>
                        </ul>
                        <h3 class="text-lg font-semibold mb-2">Tipos de datos de texto</h3>
                        <ul class="list-disc list-inside mb-4 pl-4">
                            <li>VARCHAR: Cadena de texto variable.</li>
                            <li>CHAR: Cadena de texto fija.</li>
                            <li>TEXT: Cadena de texto larga.</li>
                        </ul>
                        <h3 class="text-lg font-semibold mb-2">Tipos de datos de fecha</h3>
                        <ul class="list-disc list-inside mb-4 pl-4">
                            <li>DATE: Fecha (año, mes, día).</li>
                            <li>TIME: Hora (hora, minuto, segundo).</li>
                            <li>DATETIME: Combinación de fecha y hora.</li>
                        </ul>
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
