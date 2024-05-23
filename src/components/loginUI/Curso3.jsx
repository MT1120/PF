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
                {isMobile ? <div></div> : <SideBar moduleId={3}/>}
                <div className="flex flex-col flex-1 ml-3 mr-3 mt-3  w-[25rem] items-center relative overflow-x-auto">
                    <div className='mb-10 bg-white text-black  max-w-full w-[800px] h-[37rem] rounded-3xl   overflow-y-auto p-4'>
                        <div className='p-1 mt-1 flex flex-1 flex-row justify-around'>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center">
                                <FaArrowAltCircleLeft />
                            </div>
                            <h1 className='text-home text-xl   p-2'>
                                Diseño y Modelado de Bases de Datos
                            </h1>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center">
                                <FaArrowAltCircleRight />
                            </div>
                        </div>
                        <h2 class="text-xl font-semibold mb-4">3.1. Principios de Diseño de Bases de Datos</h2>
                        <h3 class="text-lg font-semibold mb-2">Conceptos de entidad y atributo</h3>
                        <ul class="list-disc list-inside mb-4 pl-4">
                            <li><strong>Entidad:</strong> Objeto o cosa del mundo real que es distinguible de otros objetos. Por ejemplo, un "Estudiante" en una base de datos de una universidad.</li>
                            <li><strong>Atributo:</strong> Propiedad o característica de una entidad. Por ejemplo, los atributos de un "Estudiante" pueden incluir "Nombre", "Edad", y "Matrícula".</li>
                        </ul>
                        <h3 class="text-lg font-semibold mb-2">Relaciones entre entidades</h3>
                        <ul class="list-disc list-inside mb-4 pl-4">
                            <li><strong>Relación uno a uno:</strong> Cada instancia de una entidad está asociada con una instancia de otra entidad. Ejemplo: Persona y Pasaporte.</li>
                            <li><strong>Relación uno a muchos:</strong> Una instancia de una entidad está asociada con múltiples instancias de otra entidad. Ejemplo: Cliente y Pedidos.</li>
                            <li><strong>Relación muchos a muchos:</strong> Múltiples instancias de una entidad están asociadas con múltiples instancias de otra entidad. Ejemplo: Estudiantes y Cursos.</li>
                        </ul>

                        <h2 class="text-xl font-semibold mt-6 mb-4">3.2. Normalización</h2>
                        <h3 class="text-lg font-semibold mb-2">Conceptos de normalización y desnormalización</h3>
                        <ul class="list-disc list-inside mb-4 pl-4">
                            <li><strong>Normalización:</strong> Proceso de estructurar una base de datos de acuerdo a una serie de reglas para reducir la redundancia de datos y mejorar la integridad de los datos.</li>
                            <li><strong>Desnormalización:</strong> Proceso de combinar tablas para mejorar el rendimiento de las consultas a costa de redundancia de datos.</li>
                        </ul>
                        <h3 class="text-lg font-semibold mb-2">Formas normales</h3>
                        <ul class="list-disc list-inside mb-4 pl-4">
                            <li><strong>Primera Forma Normal (1NF):</strong> Eliminar los grupos repetidos.</li>
                            <li><strong>Segunda Forma Normal (2NF):</strong> Eliminar los datos redundantes.</li>
                            <li><strong>Tercera Forma Normal (3NF):</strong> Eliminar datos que no dependen directamente de la clave primaria.</li>
                        </ul>

                        <h2 class="text-xl font-semibold mt-6 mb-4">3.3. Creación de Esquemas de Bases de Datos</h2>
                        <h3 class="text-lg font-semibold mb-2">Diagramas entidad-relación (ERD)</h3>
                        <ul class="list-disc list-inside mb-4 pl-4">
                            <li>Representación gráfica de entidades y sus relaciones.</li>
                            <li>Utiliza símbolos como rectángulos para entidades, elipses para atributos y rombos para relaciones.</li>
                        </ul>
                        <h3 class="text-lg font-semibold mb-2">Herramientas para modelado de bases de datos</h3>
                        <ul class="list-disc list-inside mb-4 pl-4">
                            <li>MySQL Workbench: Herramienta visual para diseño de bases de datos.</li>
                            <li>Microsoft Visio: Herramienta de diagramación que puede utilizarse para ERD.</li>
                            <li>Lucidchart: Herramienta en línea para diagramas y ERD.</li>
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
