import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './Hero'
import img from '../../assets/images/slider-bg.jpg'
import WhyShopWithUs from './WhyShopWithUs'
import Featured from './Featured'
import TopSelling from './TopSelling'
import EmailSubscription from './EmailSubscription'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div className='font-sans p-0 block bg-txt'>
        <header className='md:h-[700px] h-[600px]' style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <Navbar />
            <Hero />
        </header>
        <main className='my-20'>
          <WhyShopWithUs />
          <Featured />
          <TopSelling />
          <EmailSubscription />
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default Home