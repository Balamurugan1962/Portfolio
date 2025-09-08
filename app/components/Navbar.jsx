import Image from 'next/image'
import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import {Heart} from 'lucide-react'
import Logo from './Logo'




const Navbar = () => {

  const sideManuRef = useRef()

  const openMenu = () => {
    sideManuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () => {
    sideManuRef.current.style.transform = 'translateX(16rem)'
  }

  return (
    <>
    <div className='hidden md:flex fixed top-0 right-0 w-11/12 -z-10 -translate-y-[80%]'>
    <Image src={assets.header_bg_color} alt="" className='w-full'/>
    </div>

    <nav className="fixed top-0 w-full flex  px-5 lg:px-8 xl:px-[8%] py-4 items-center justify-between z-50">

        <Logo/>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/50 font-[ovo] shadow-sm'>

          <li><a className='cursor-pointer' href="#top">Home</a></li>
          <li><a className='cursor-pointer' href="#about">About Me</a></li>
          <li><a className='cursor-pointer' href="#skills">Skills</a></li>
          <li><a className='cursor-pointer' href="#works">Works</a></li>
          <li><a className='cursor-pointer' href="#blogs">Blogs</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon} alt="" className='w-6'/>
          </button>
          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-[ovo] cursor-pointer'>
            Contact
            <Image src={assets.arrow_icon} atl="" className='w-3'/>
        </a>

        <button onClick={openMenu} className='block md:hidden'>
          <Image src={assets.menu_black} alt="" className='w-6' />
        </button>
        </div>

        {/* --- Mobile Menu --- */}

        <ul ref={sideManuRef} className='font-[ovo] flex md:hidden flex-col gap-4 px-10 py-20 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 -right-64 transition duration-500'>

          <div onClick={closeMenu} className='absolute top-6 right-6'>
            <Image src={assets.close_black} alt="" className='curser-pointer w-5' />
          </div>

          <li ><a onClick={closeMenu} className='cursor-pointer' href="#top">Home</a></li>
          <li><a onClick={closeMenu} className='cursor-pointer' href="#about">About Me</a></li>
          <li><a onClick={closeMenu} className='cursor-pointer' href="#skills">Skills</a></li>
          <li><a onClick={closeMenu} className='cursor-pointer' href="#works">Works</a></li>
          <li><a onClick={closeMenu} className='cursor-pointer' href="#blogs">Blogs</a></li>
          <li><a onClick={closeMenu} className='cursor-pointer' href="#blogs">Contact</a></li>
        </ul>


    </nav>
    </>
  )
}

export default Navbar