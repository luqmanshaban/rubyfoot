import React, { useContext, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiSolidCartAlt } from 'react-icons/bi'
import Logo from '../logo.png'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../store/Product'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const { count } = useContext(ProductContext)
  const location = useLocation()
  
  const toggleActive = () => setActive(!active)

  return (
    <>
    <nav className={`md:flex justify-center items-center gap-x-[500px] font-bold hidden w-full z-10 shadow-sm  bg-dark text-txt fixed top-[-40px] right-0 py-5 rounded-md md:mt-10 p-10 `}>
      <Link to='/'>
        <img src={Logo} alt="" className='h-16'/>
      </Link>
      <ul className='md:flex justify-between items-center gap-x-10 hidden'>
         <Link to='/' className={`hover:text-prim transition ease-in-out duration-300 ${location.pathname === '/' ? 'text-prim font-bold underline underline-offset-8' : 'text-txt'}`}>home</Link>
         <Link to='/catalog' className={`hover:text-prim transition ease-in-out duration-300 ${location.pathname === '/catalog' ? 'text-prim font-bold underline underline-offset-8' : 'text-txt'}`}>catalog</Link>
         <Link to='/contact' className={`hover:text-prim transition ease-in-out duration-300 ${location.pathname === '/contact' ? 'text-prim font-bold underline underline-offset-8' : 'text-txt'}`}>contact</Link>
         <Link to='/login' className={`hover:text-prim transition ease-in-out duration-300 ${location.pathname === '/login' ? 'text-prim font-bold underline underline-offset-8' : 'text-txt'}`}>login</Link>
         <Link to='/cart' className='relative bottom-0 hover:text-prim hover:font-bold'>
          {count > 0 && <div className='absolute bottom-6 left-5 bg-prim h-2 w-2 rounded-full block'></div>}
          <BiSolidCartAlt size={30}/>
        </Link>
        {/* <Link className='py-2 px-5 transition duration-300 ease-in-out text-black border border-black hover:bg-white hover:border-none hover:underline-offset-4 hover:underline hover:text-black rounded-full' to='/login'>login</Link> */}
      </ul>
    </nav>

    <nav className={`md:hidden w-full flex justify-between items-center p-3 pt-3 fixed bg-dark z-10`}>
        <Link to='/'>
          <img src={Logo} alt="" className='h-10'/>
        </Link>
        <Link to='/cart' className='fixed top-5 right-20 text-slate-300 hover:text-prim hover:font-bold'>
          {count > 0 && <span className='fixed top-3 right-20 h-2 w-2 rounded-full bg-prim font-bold'></span>}
          <BiSolidCartAlt  size={30}/>
        </Link>
       <ul className={`flex flex-col gap-y-5 bg-[#001326] shadow-lg shadow-slate-700 rounded-lg p-10 fixed top-16 w-[90%] h-full z-10 ${!active ? 'left-[-100%] transition ease-in-out duration-500' : 'left-0 transition ease-in-out duration-700'}`}>
           <Link to='/' className='text-white hover:text-prim transition ease-in-out duration-300'>home</Link>
           <Link to='/catalog' className='text-white hover:text-prim transition ease-in-out duration-300'>catalog</Link>
           <Link to='/contact' className='text-white hover:text-prim transition ease-in-out duration-300'>contact</Link>
           <Link to='/signup' className='text-black hover:text-prim transition ease-in-out duration-300 py-2 px-5 bg-white rounded-lg text-center'>signup</Link>
           <Link to='/login' className='text-white hover:text-prim transition ease-in-out duration-300 py-2 px-5 border border-white rounded-lg text-center'>login</Link>
        </ul>
        <ul className='md:hidden block' onClick={toggleActive}>
            { !active && <div className={`w-[25px] h-[2px] bg-slate-300 block m-2`}></div>}
            { !active && <div className={`w-[25px] h-[2px] bg-slate-300 block m-2`}></div>}
            {active && <AiOutlineClose size={30} color='white' />}
        </ul>
    </nav>
    </>
  )
}

export default Navbar