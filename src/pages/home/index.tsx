import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './Hero'
import img from '../../assets/images/slider-bg.jpg'

const Home = () => {
  return (
    <div className='bg-bg font-sans w-full p-0 block'>
        <header className='md:h-[700px] h-full' style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}>
            <Navbar />
            <Hero />
        </header>
        <main>
        </main>
        <footer></footer>
    </div>
  )
}

export default Home