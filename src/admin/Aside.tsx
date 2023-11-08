import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { TbTruckDelivery } from 'react-icons/tb'
import { HiOutlineLogout } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../logo.png'

type Props = {
    toggle: (i: number) => void
    active: Array<boolean>
}

const Aside: React.FC<Props> = ({ active, toggle}) => {
    const navigate = useNavigate()
    const Logout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
  return (
    <div className='flex flex-col justify-center items-center gap-y-10'>
        <Link to='/admin'>
        <img src={Logo} alt="" className='h-16'/>
      </Link>
        <button onClick={() => toggle(0)} className={`flex items-center gap-x-2 text-txt ${active[0] && 'bg-slate-400 p-2 w-full text-dark justify-center'} transition duration-500 ease-in-out`}>
            <AiFillHome />
            Home
        </button>
        <button onClick={() => toggle(1)} className={`flex items-center gap-x-2 text-txt ${active[1] && 'bg-slate-400 p-2 w-full text-dark justify-center'} transition duration-500 ease-in-out`}>
            <TbTruckDelivery />
            Orders
        </button>
        <button onClick={() => Logout()} className={`flex items-center gap-x-2 text-status-f`}>
            <HiOutlineLogout size={30}/>
        </button>
    </div>
  )
}

export default Aside