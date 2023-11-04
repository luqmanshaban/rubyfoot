"use client"

import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Logo from '../logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState(false)
  
  const toggleActive = () => setActive(!active)


  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setShow(false); 
        } else { // if scroll up show the navbar
          setShow(true);  
        }
  
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <>
    <nav className={`md:flex justify-center items-center gap-x-80 font-bold hidden w-full z-10 bg-white fixed top-[-40px] right-0 py-5 rounded-md md:mt-10 p-10 ${!show && 'hidden'}`}>
      <Link to='/'>
        <img src={Logo} alt="" className='h-16'/>
      </Link>
      <ul className='md:flex justify-between items-center gap-x-10 hidden'>
         <Link to='/' className='hover:text-orange-700 transition ease-in-out duration-300'>home</Link>
         <Link to='/catalog' className='hover:text-orange-700 transition ease-in-out duration-300'>catalog</Link>
         <Link to='about' className='hover:text-orange-700 transition ease-in-out duration-300'>about</Link>
         <Link to='/contact' className='hover:text-orange-700 transition ease-in-out duration-300'>contact</Link>
      </ul>
      <ul className='md:flex justify-between items-center gap-x-10 hidden'>
        <Link className='py-3 px-8 transition duration-300 ease-in-out hover:text-white hover:bg-slate-600  bg-black text-white rounded-full' to='/signup'>signup</Link>
        <Link className='py-2 px-5 transition duration-300 ease-in-out text-black border border-black hover:bg-white hover:border-none hover:underline-offset-4 hover:underline hover:text-black rounded-full' to='/login'>login</Link>
      </ul>
    </nav>

    <nav className={`md:hidden w-full flex justify-between items-center p-3 pt-3 sticky bg-white z-10 ${!show && 'hidden'}`}>
        <Link to='/'>
          <img src={Logo} alt="" className='h-10'/>
        </Link>
       <ul className={`flex flex-col gap-y-5 bg-black shadow-lg shadow-slate-700 p-10 fixed top-16 w-[80%] h-full z-10 ${!active ? 'left-[-100%] transition ease-in-out duration-500' : 'left-0 transition ease-in-out duration-700'}`}>
           <Link to='/' className='text-white hover:text-orange-700 transition ease-in-out duration-300'>home</Link>
           <Link to='/catalog' className='text-white hover:text-orange-700 transition ease-in-out duration-300'>catalog</Link>
           <Link to='/about' className='text-white hover:text-orange-700 transition ease-in-out duration-300'>about</Link>
           <Link to='/contact' className='text-white hover:text-orange-700 transition ease-in-out duration-300'>contact</Link>
           <Link to='/signup' className='text-black hover:text-orange-700 transition ease-in-out duration-300 py-2 px-5 bg-white rounded-full text-center'>signup</Link>
           <Link to='/login' className='text-white hover:text-orange-700 transition ease-in-out duration-300 py-2 px-5 border border-white rounded-full text-center'>login</Link>
        </ul>
        <ul className='md:hidden block' onClick={toggleActive}>
            { !active && <div className={`w-[25px] h-[2px] bg-slate-800 block m-2`}></div>}
            { !active && <div className={`w-[25px] h-[2px] bg-slate-800 block m-2`}></div>}
            {active && <AiOutlineClose size={30} />}
        </ul>
    </nav>
    </>
  )
}

export default Navbar