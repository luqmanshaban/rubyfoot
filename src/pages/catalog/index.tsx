import React from 'react'
import Navbar from '../../components/Navbar'
import Products from './Products'
// import Footer from '../../components/Footer'

const Catalog = () => {
  return (
    <div className=' h-[100vh] font-sans'>
        <header>
            <Navbar />
        </header>
        <main className='pt-32'>
            <h1 className='md:text-4xl text-2xl text-center uppercase underline'>Our Prodcuts</h1>
            <Products />
        </main>
        <footer>
            {/* <Footer /> */}
        </footer>
    </div>
  )
}

export default Catalog