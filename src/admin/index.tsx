import React, { useState } from 'react'
import Aside from './Aside'
import Main from './main'

const Admin = () => {
  const [active, setActive] = useState([true, false])

  const toggleActive = (index: number) => setActive(active.map((value, i) => i === index))
  return (
    <div className='flex'>
      <aside className='md:w-[10%] fixed h-[100vh] bg-black'>
        <Aside toggle={toggleActive} active={active}/>
      </aside>
      <main className='md:pl-52 pl-24 overflow-y-auto'>
        <Main active={active}/>
      </main>
    </div>
  )
}

export default Admin