import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './Hero'
import img from '../../assets/images/slider-bg.jpg'

const Home = () => {
  return (
    <div className='bg-bg font-sans p-0 block'>
        <header className='md:h-[700px] h-[600px]' style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
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