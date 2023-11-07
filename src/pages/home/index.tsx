import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './Hero'
import WhyShopWithUs from './WhyShopWithUs'
import Featured from './Featured'
import TopSelling from './TopSelling'
import EmailSubscription from './EmailSubscription'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div className='font-sans p-0 block bg-dark text-txt'>
        <header>
            <Navbar />
            <Hero />
        </header>
        <main className='my-20'>
          <WhyShopWithUs />
          <Featured />
          <TopSelling />
          <EmailSubscription />
        </main>
        <footer className=''>
          <Footer />
        </footer>
    </div>
  )
}

export default Home