import React, { useContext, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiSolidCartAlt } from 'react-icons/bi'
import Logo from '../logo.png'
import { Link } from 'react-router-dom'
import { ProductContext } from '../store/Product'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const { count } = useContext(ProductContext)
  
  const toggleActive = () => setActive(!active)

  return (
    <>
    <nav className={`md:flex justify-center items-center gap-x-80 font-bold hidden w-full z-10 bg-white fixed top-[-40px] right-0 py-5 rounded-md md:mt-10 p-10 `}>
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
        <Link to='/cart' className='relative bottom-3 hover:text-prim hover:font-bold'>
          {count > 0 && <span className='relative top-2 left-3 text-prim font-bold'>{count}</span>}
          <BiSolidCartAlt size={30}/>
        </Link>
        <Link className='py-3 px-8 transition duration-300 ease-in-out hover:text-white hover:bg-slate-600  bg-black text-white rounded-full' to='/signup'>signup</Link>
        <Link className='py-2 px-5 transition duration-300 ease-in-out text-black border border-black hover:bg-white hover:border-none hover:underline-offset-4 hover:underline hover:text-black rounded-full' to='/login'>login</Link>
      </ul>
    </nav>

    <nav className={`md:hidden w-full flex justify-between items-center p-3 pt-3 fixed bg-white z-10`}>
        <Link to='/'>
          <img src={Logo} alt="" className='h-10'/>
        </Link>
        <Link to='/cart' className='fixed top-4 right-20 hover:text-prim hover:font-bold'>
          {count > 0 && <span className='fixed top-0 right-20 text-prim font-bold'>{count}</span>}
          <BiSolidCartAlt color='black' size={30}/>
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