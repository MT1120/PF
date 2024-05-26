import React from 'react'
import NavBarHome from './navBarHome'
import Img1 from './assets/Logo.png'



const people = [
    {
        name: 'Mateo Anaya',
        role: 'XXXXXX',
        imageUrl:
            Img1,
    },
    {
        name: 'Mateo Aristizabal',
        role: 'XXXXXX',
        imageUrl:
            Img1,
    },
    {
        name: 'Miguel Altamar',
        role: 'XXXXXX',
        imageUrl:
            Img1,
    }
    // More people...
]

export default function AboutUs() {
    return (

        <div className='bg-white'>
            <NavBarHome />

            <div className="py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl">Conoce nuestro equipo</h2>
                        <p className="mt-6 text-lg leading-8 text-home">
                            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                        </p>
                    </div>
                    <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full bg-nav" src={person.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-home">{person.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>


    )
}