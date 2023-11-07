import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Catalog = () => {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main className='pt-20'>
            <h1>Catalog</h1>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Catalog