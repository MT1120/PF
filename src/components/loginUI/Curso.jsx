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
                {isMobile ? <div></div> : <SideBar moduleId={1} />}
                <div className="flex flex-col flex-1 ml-3 mr-3 mt-3  w-[25rem] items-center relative overflow-x-auto">
                    <div className='mb-10 bg-white text-black  max-w-full w-[800px] h-[37rem] rounded-3xl   overflow-y-auto p-4'>
                        <div className='p-1 mt-1 flex flex-1 flex-row justify-around'>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center">
                                <FaArrowAltCircleLeft />
                            </div>
                            <h1 className='text-home text-xl   p-2'>
                                Introducción a las Bases de Datos
                            </h1>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center">
                                <FaArrowAltCircleRight />
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold mb-4">1.1. ¿Qué es una base de datos?</h2>
                        <p className="mb-4">
                            <strong>Definición:</strong> Una base de datos es una colección organizada de datos, que se almacenan y se acceden electrónicamente desde un sistema informático. Las bases de datos permiten almacenar grandes cantidades de información de manera estructurada para facilitar la recuperación, gestión y manipulación de los datos.
                        </p>
                        <p className="mb-4">
                            <strong>Propósito:</strong> El propósito principal de una base de datos es proporcionar un medio para almacenar, recuperar y administrar información de manera eficiente. Esto incluye:
                        </p>
                        <ul className="list-disc list-inside mb-4 pl-4">
                            <li>Almacenamiento estructurado: Organizar datos de manera que sean fáciles de encontrar y utilizar.</li>
                            <li>Acceso rápido y seguro: Permitir el acceso rápido a los datos y protegerlos contra accesos no autorizados.</li>
                            <li>Gestión de grandes volúmenes de datos: Manejar grandes cantidades de información que de otra manera serían difíciles de gestionar manualmente.</li>
                            <li>Integridad y consistencia: Asegurar que los datos sean precisos y consistentes a lo largo del tiempo.</li>
                        </ul>
                        <h3 className="text-lg font-semibold mb-2">Ejemplos:</h3>
                        <ul className="list-disc list-inside pl-4">
                            <li>Sistemas de gestión de inventarios: Almacenan información sobre productos, cantidades, precios y proveedores.</li>
                            <li>Bancos de datos médicos: Guardan registros de pacientes, historiales médicos, diagnósticos y tratamientos.</li>
                            <li>Sistemas de información académica: Manejan datos de estudiantes, cursos, calificaciones y matrículas.</li>
                            <li>Redes sociales: Guardan información sobre usuarios, publicaciones, comentarios y relaciones.</li>
                        </ul>
                        <h2 class="text-xl font-semibold mt-6 mb-4">1.2. Tipos de Bases de Datos</h2>
                        <h3 class="text-lg font-semibold mb-2">Bases de datos relacionales vs. NoSQL:</h3>
                        <p class="mb-4">
                            <strong>Bases de datos relacionales:</strong> Utilizan un modelo de datos basado en tablas y se gestionan a través de un lenguaje de consulta estructurado, como SQL. Ejemplos incluyen MySQL, PostgreSQL y Oracle.
                        </p>
                        <p class="mb-4">
                            <strong>Bases de datos NoSQL:</strong> No se basan en el modelo de tablas y están diseñadas para manejar datos no estructurados y semiestructurados. Tipos comunes de bases de datos NoSQL incluyen:
                        </p>
                        <ul class="list-disc list-inside mb-4 pl-4">
                            <li><strong>Documentales:</strong> Almacenan datos en formato de documentos, como JSON. Ejemplo: MongoDB.</li>
                            <li><strong>Claves-valor:</strong> Almacenan datos como pares clave-valor. Ejemplo: Redis.</li>
                            <li><strong>Columnares:</strong> Almacenan datos en columnas en lugar de filas. Ejemplo: Cassandra.</li>
                            <li><strong>Grafos:</strong> Almacenan datos en nodos y aristas, que representan relaciones. Ejemplo: Neo4j.</li>
                        </ul>

                        <h3 class="text-lg font-semibold mb-2">Ventajas y desventajas:</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <h4 class="font-semibold mb-2">Relacionales:</h4>
                                <ul class="list-disc list-inside pl-4">
                                    <li><strong>Ventajas:</strong></li>
                                    <li>Estructura bien definida.</li>
                                    <li>Soporte para transacciones ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad).</li>
                                    <li>Amplio soporte y herramientas de desarrollo.</li>
                                    <li><strong>Desventajas:</strong></li>
                                    <li>Escalabilidad horizontal limitada.</li>
                                    <li>Puede ser menos eficiente para datos no estructurados.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-semibold mb-2">NoSQL:</h4>
                                <ul class="list-disc list-inside pl-4">
                                    <li><strong>Ventajas:</strong></li>
                                    <li>Escalabilidad horizontal.</li>
                                    <li>Flexibilidad para manejar diferentes tipos de datos.</li>
                                    <li>Rendimiento alto para operaciones de lectura/escritura.</li>
                                    <li><strong>Desventajas:</strong></li>
                                    <li>Menos maduro en términos de soporte y herramientas.</li>
                                    <li>Puede carecer de soporte para transacciones ACID en algunos casos.</li>
                                </ul>
                            </div>
                        </div>

                        <h2 class="text-xl font-semibold mt-6 mb-4">1.3. Modelos de Bases de Datos</h2>
                        <h3 class="text-lg font-semibold mb-2">Modelos jerárquico:</h3>
                        <p class="mb-4">
                            Organiza los datos en una estructura de árbol jerárquico. Cada registro tiene un solo padre y puede tener múltiples hijos. Ejemplo: Sistema de archivos.
                        </p>

                        <h3 class="text-lg font-semibold mb-2">Modelos en red:</h3>
                        <p class="mb-4">
                            Similar al modelo jerárquico, pero permite que cada registro tenga múltiples padres. Más flexible que el modelo jerárquico. Ejemplo: Modelos de datos utilizados por IDMS (Integrated Database Management System).
                        </p>

                        <h3 class="text-lg font-semibold mb-2">Modelos relacional:</h3>
                        <p class="mb-4">
                            Basado en el concepto de relaciones (tablas). Utiliza claves primarias y foráneas para establecer relaciones entre tablas. Ejemplo: SQL, MySQL, PostgreSQL.
                        </p>

                        <h3 class="text-lg font-semibold mb-2">Modelos orientado a objetos:</h3>
                        <p class="mb-4">
                            Integra conceptos de programación orientada a objetos con bases de datos. Los datos se almacenan en objetos en lugar de tablas. Ejemplo: Base de datos orientada a objetos como db4o, ObjectDB.
                        </p>
                    </div>
                    {/*end Description */}

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
