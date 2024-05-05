import React from 'react'
import { BiChevronLeft } from "react-icons/bi"
import { Dialog } from '@headlessui/react'
import { useState } from "react"

import { FaArrowRight} from 'react-icons/fa'
// import Logo from './assets/Logo.png'
import { SiCurseforge } from "react-icons/si";

const navigation = [
  { name: 'Contenido', href: '/' },

  { name: 'Contenido', href: '/' },

]




export default function SideBarNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className={`footer-container`}>

      <div className='flex lg:hidden  items-center justify-center'>
        <button
          type="button"
          className="bg-home -m-2.5 inline-flex  rounded-md p-2.5  text-white rotate-90"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Abre el menu</span>
          <BiChevronLeft className="h-6 w-6 text-xl" aria-hidden="true" />
        </button>
      </div>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#282638] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Data Forge</span>
              <SiCurseforge
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
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Cerrar Sesión 
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}

