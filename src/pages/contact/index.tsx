import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { MessageT } from '../../types/Type'
import axios from 'axios'
import { CgProfile } from 'react-icons/cg'
import { MdEmail } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import Footer from '../../components/Footer'

const Contact = () => {
    const [message, setMessage] = useState<MessageT>({names: '', email: '', message:''})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setMessage(prev => ({...prev, [name]: value}) )
    }
    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setMessage((prev) => ({ ...prev, [name]: value }));
      }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/api/messages', message)
            console.log(response);
            
        } catch (error: any) {
            console.error(error.message);
        }
    }
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main className='pt-24'>
            <h1 className='my-10 text-dark text-4xl font-bold text-center'>Contact Us</h1>
               <div className='flex md:flex-row flex-col justify-center items-center gap-x-20'>
               <section className='flex flex-col gap-y-3'>
                    <div className='flex justify-center items-center md:gap-x-10 gap-x-10'>
                    <a href="mailto:luqmanshaban02@gmail.com" className='bg-gray-800 p-5 rounded-full md:h-24 md:w-24 flex justify-center items-center flex-col'>
                        <AiOutlineMail size={30} color='orange'/>
                    </a>
                    <a href='tel:+254115166470' className='bg-gray-800 p-5 rounded-full md:h-24 md:w-24 flex justify-center items-center flex-col'>
                        <BsFillTelephoneFill size={30} color='orange'/>
                    </a>
                    </div>
                    <div className='flex justify-center items-center gap-x-2 my-5'>
                    <div className='h-[1px] w-[150px] bg-slate-500 block'></div>
                    <p>or</p>
                    <div className='h-[1px] w-[150px] bg-slate-500 block'></div>
                    </div>
                    <form className='flex flex-col gap-y-3' onSubmit={handleSubmit}>
                        <div className='flex items-center gap-x-2 bg-slate-300 rounded-full ring-offset-0 px-3'>
                          <CgProfile size={20} color='gray'/>
                          <input className='p-2 text-white bg-slate-300 border-slate-300 border focus:bg-slate-300 focus:border-transparent focus:outline-none' type="text" name="names" id="names" onChange={handleChange} placeholder='names' required/>
                        </div>
                        <div className='flex items-center gap-x-2 bg-slate-300 rounded-full ring-offset-0 px-3'>
                            <MdEmail size={20} color='gray'/>
                            <input className='p-2 text-white bg-slate-300 border-slate-300 border focus:bg-slate-300 focus:border-transparent focus:outline-none' type="email" name="email" id="email" placeholder='email' onChange={handleChange} required/>
                        </div>
                        <div className='flex items-center gap-x-2 bg-slate-300 rounded-full ring-offset-0 px-3'></div>
                        <textarea className='p-2 text-white px-5 bg-slate-300 border-slate-300 rounded-3xl border focus:border-transparent focus:outline-none' name="message" id="message" cols={30} rows={5} onChange={handleTextAreaChange} placeholder='message' required></textarea>
                        <button className='py-2 px-10 bg-black rounded-full text-white text-center' >send</button>
                    </form>
               </section>
            </div>
        </main>
        <footer className='mt-20'>
            <Footer />
        </footer>
    </div>
  )
}

export default Contact