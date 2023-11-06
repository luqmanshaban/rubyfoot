import React from 'react'
import { FiInstagram, FiTwitter} from 'react-icons/fi'
import { BiLogoFacebook } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <div className='bg-dark'>
        <section className='flex justify-center items-center md:flex-row flex-col gap-y-10 w-full md:p-10 p-5 text-txt'>
            <article className='md:w-[30%] w-full flex flex-col gap-y-3'>
                <h1 className='text-xl font-semibold'>RubyFoot</h1>
                <p className='text-slate-300'>The customer is at the heart of our unique business model, your satisfaction is our ultimate goal</p>
                <figure className='flex items-center gap-x-5'>
                    <a className='hover:text-prim' href="https://instagram.com/luqman_shaban" target='_blank' rel="noreferrer">
                      <FiInstagram size={30}/>
                    </a>
                    <a className='hover:text-prim' href="www://facebook.com/luqmandv" target='_blank' rel="noreferrer">
                      <BiLogoFacebook size={30}/>
                    </a>
                    <a className='hover:text-prim' href="https://twitter.com/luqmanshaban01" target='_blank' rel="noreferrer">
                      <FiTwitter size={30}/>
                    </a>
                </figure>
            </article>
            <article className='md:w-[30%] w-full flex flex-col gap-y-3'>
              <h1 className='text-xl font-semibold'>LINKS</h1>
              <figure className='text-slate-300'>
                <Link className='flex items-center gap-x-2 hover:text-blue-600' to='/'>
                    <BsArrowRight size={20}/>
                    Home</Link>
                <Link className='flex items-center gap-x-2 hover:text-blue-600' to='/catalog'>
                <BsArrowRight size={20}/>
                    Catalog</Link>
                <Link className='flex items-center gap-x-2 hover:text-blue-600' to='/about'>
                <BsArrowRight size={20}/>
                    About</Link>
                <Link className='flex items-center gap-x-2 hover:text-blue-600' to='/contact'>
                <BsArrowRight size={20}/>
                    Contact</Link>
              </figure>
            </article>
            <article className='md:w-[30%] w-full flex flex-col gap-y-3'>
                <h1 className='text-xl font-semibold'>NEWSLETTER</h1>
                <p className='text-slate-300'>Be the first to know about new arrivals, sales & promos!</p>
                <form>
                    <div className='flex items-center mt-5'>
                      <input type="email" name="email" required id="email" placeholder='Your Email' className='bg-dark focus:outline-none text-txt placeholder-slate-600' />
                      <HiOutlineMail size={25}/>
                    </div>
                    <hr className='md:w-[63%] w-[70%] border-l border-white mt-2'/>
                    <input type="submit" value="" />
                </form>
            </article>
        </section>
        <p className='text-txt text-center'>&copy; {date} All rights reserved | <a className='text-blue-600' href="https://luqmanshaban.com" target='_blank' rel='noreferrer'>RubyFoot</a></p>
    </div>
  )
}

export default Footer