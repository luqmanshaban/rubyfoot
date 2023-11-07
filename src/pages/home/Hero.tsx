import React, { useEffect } from 'react'
import hero from '../../assets/images/hero.png'
import { Link } from 'react-router-dom'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const h1Variation = {
  hidden: {opacity: 0, y:100},
  visible: {opacity: 1, y: 1, transition: {duration: 0.5}}
}

const pVariation = {
  hidden: {opacity: 0,y: 50},
  visible: {opacity: 1,y:1, transition: {duration: 0.5, delay: 0.3}}
}
const imgVariation = {
  hidden: {opacity: 0,x: 100},
  visible: {opacity: 1,x:1, transition: {duration: 0.5, type: "spring", stiffness: 100 },}
}


const Hero = () => {
  const h1Controls = useAnimation()
  const pControls = useAnimation()
  const imgControls = useAnimation()
  const [h1Ref , h1Inview] = useInView({triggerOnce: true})
  const [pRef , pInview] = useInView({triggerOnce: true})
  const [imgRef , imgInview] = useInView({triggerOnce: true})

  useEffect(() => {
    if(h1Inview){
      h1Controls.start('visible')
    }
  },[h1Controls, h1Inview])
  useEffect(() => {
    if(pInview){
      pControls.start('visible')
    }
  },[pControls, pInview])
  useEffect(() => {
    if(imgInview){
      imgControls.start('visible')
    }
  },[imgControls, imgInview])
  return (
    <div className='pt-24 py-20 md:px-56 px-3 flex justify-center items-center gap-x-52 md:flex-row flex-col-reverse w-full'>
      <section className=''>
        <motion.h1 ref={h1Ref} initial='hidden' animate={h1Controls} variants={h1Variation} className='text-2xl md:text-5xl  font-sans font-bold'>Elevate Your Style with Premium Footwear</motion.h1>
        <motion.p ref={pRef} initial='hidden' animate={pControls} variants={pVariation} className='text-bg mb-10 mt-5'>Step into a world of sophistication and make a statement that sets you apart. Discover your unique stride today.</motion.p>
        <Link to='/catalog' className='py-3 px-10 rounded-full hover:rounded-md hover:bg-orange-200 hover:text-dark bg-prim text-txt transition duration-500 ease-in-out font-bold'>SHOP NOW</Link>
      </section>
      <motion.img
      ref={imgRef} initial='hidden' animate={imgControls} variants={imgVariation}
       src={hero} className='md:h-full md:w-full h-52 w-52 mb-10' alt=""/>
    </div>
  )
}

export default Hero