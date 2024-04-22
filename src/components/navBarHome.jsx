import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { FaArrowRight, FaBars } from 'react-icons/fa'
// import Logo from './assets/Logo.png'
import { DiDatabase } from "react-icons/di";

const navigation = [
    { name: 'Sobre nosotros', href: '/aboutUs' },
    
    { name: 'Noticias', href: '/news' },

]

export default function NavBarHome() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className='container'>
            <header className="absolute inset-x-0 top-0 z-50 bg-nav h-[80px]">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">DATA FORGE</span>
                            <DiDatabase
                                className="h-10 w-10 p-.5 text-sky-950 bg-cyan-500  rounded-full"

                                alt=""
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Abre el menu</span>
                            <FaBars className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-[#282638]">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="/login" className="p-2 mr-2  text-[#282638] text-sm font-semibold leading-6 ">
                            Iniciar Sesión 
                        </a>
                        <a href="/register" className="p-2 mr-2 rounded-lg bg-blue-700 text-white text-sm font-semibold leading-6 ">
                            Registrarse 
                        </a>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#282638] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Data Forge</span>
                                <DiDatabase
                                    className="h-10 w-10 p-.5 text-sky-950 bg-cyan-500  rounded-full"

                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <FaArrowRight className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="/"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                                    >
                                        Iniciar Sesión
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}