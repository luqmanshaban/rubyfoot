import React, { useState } from 'react'
import axios from 'axios'
import Logo from '../../logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import LoginAnimation from '../../components/LoginAnimation'

interface User {
    username: string 
    email: string
    password: string
}

const Signup = () => {
    const [user, setUser] = useState<User>({username: '',email: '', password: ''})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [serverError, setServerError] = useState(false)
    const [submitClicked, setSubmitClicked] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setSubmitClicked(true)
        
        try {
            const response = await axios.post('http://localhost:8000/api/signup', user)
            console.log(response);
            
            if(response.status === 200) {
                localStorage.setItem('token', response.data.token)
                navigate('/login')
            }
        } catch (error: any) {
            console.log(error);
            
            if(error.status === 404){
                setError(true)
                setTimeout(() => {
                    setError(false)
                },3000)
            }else if(error.status === 500) {
                setServerError(true)
                setTimeout(() => {
                    setServerError(false)
                },3000)
            }
        }finally {
            setSubmitClicked(false)
            setLoading(false)
        }
    }
  return (
    <div className='flex justify-center items-center flex-col py-20 px-10 gap-y-10'>
        <Link to='/'>
          <img src={Logo} alt="" className='h-32'/>
        </Link>
        <form onSubmit={handleSubmit} className='flex justify-center items-center md:w-[400px] rounded-md flex-col gap-y-5 bg-slate-200  py-5 px-3 w-full shadow-md'>
            <h1 className='text-xl font-bold'>Signup</h1>
            <div className='flex justify-center items-start flex-col'>
                <input className='text-black p-2 rounded-lg' type="text" name="username" id="username" value={user.username} required placeholder='username' onChange={handleChange}/>
            </div>
            <div className='flex justify-center items-start flex-col'>
                <input className='text-black p-2 rounded-lg' type="email" name="email" id="email" value={user.email} required placeholder='email' onChange={handleChange}/>
            </div>
            <div className='flex justify-center items-start flex-col'>
                <input className='text-black p-2 rounded-lg' type="password" name="password" id="password" value={user.password} required placeholder='password' onChange={handleChange}/>
            </div>
            {submitClicked && <div className='flex justify-center items-center flex-col'>
                {error && <p className='font-bold font-mono text-red-700'>Invalid Username or Password</p>}
                {serverError && <p className='font-bold font-mono text-red-700'>Server Error</p>}
            </div>}
            {submitClicked && <div className='flex justify-center items-center flex-col'>
                {loading && <LoginAnimation/>}
            </div>}
            <div>
                <p>Already have an account? <Link className='text-blue-600 underline mx-2' to='/login'>login</Link></p>
            </div>
            <div className='w-[56%]'>
                <button className='bg-black border border-white text-white py-2 w-[100%] font-bold rounded-lg'>Signup</button>
            </div>
        </form>
    </div>
  )
}

export default Signup