import React, { useEffect } from 'react'
import { TbTruckDelivery, TbFreeRights } from 'react-icons/tb'
import { MdWorkspacePremium } from 'react-icons/md'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const h1Variation = {
  hidden: {opacity: 0, y:100},
  visible: {opacity: 1, y: 1, transition: {duration: 0.5, delay: 0}}
}
const variation1 = {
  hidden: {opacity: 0, y:100},
  visible: {opacity: 1, y: 1, transition: {duration: 0.3,}}
}
const variation2 = {
  hidden: {opacity: 0, y:200},
  visible: {opacity: 1, y: 1, transition: {duration: 0.3, }}
}
const variation3 = {
  hidden: {opacity: 0, y:300},
  visible: {opacity: 1, y: 1, transition: {duration: 0.3,}}
}
const divVariation = {
  hidden: {opacity: 0},
  visible: {opacity: 1, transition: {duration: 0.5, delay: 0.3}}
}

const WhyShopWithUs = () => {
    const h1Controls = useAnimation()
    const dControls = useAnimation()
    const Controls1 = useAnimation()
    const Controls2 = useAnimation()
    const Controls3 = useAnimation()
    const [h1Ref , h1Inview] = useInView({triggerOnce: true})
    const [dRef , dInview] = useInView({triggerOnce: true})
    const [Ref1 , Inview1] = useInView({triggerOnce: true})
    const [Ref2 , Inview2] = useInView({triggerOnce: true})
    const [Ref3 , Inview3] = useInView({triggerOnce: true})
  
    useEffect(() => {
      if(h1Inview){
        h1Controls.start('visible')
      }
    },[h1Controls, h1Inview])
    useEffect(() => {
      if(dInview){
        dControls.start('visible')
      }
    },[dControls, dInview])
    useEffect(() => {
      if(Inview1){
        Controls1.start('visible')
      }
    },[Controls1, Inview1])
    useEffect(() => {
      if(Inview2){
        Controls2.start('visible')
      }
    },[Controls2, Inview2])
    useEffect(() => {
      if(Inview3){
        Controls3.start('visible')
      }
    },[Controls3, Inview3])
  return (
    <div>
        <motion.h1 ref={h1Ref} initial='hidden' animate={h1Controls} variants={h1Variation} className='text-mono md:text-5xl text-3xl text-txt text-center font-bold'>Why Shop With Us ?</motion.h1>
        <motion.div className='flex justify-center items-center w-full my-5' ref={dRef} initial='hidden' animate={dControls} variants={divVariation}>
            <div className='bg-orange-600 h-2 w-20 block'></div>
        </motion.div>
        <section className='flex justify-center items-center gap-x-10 md:flex-row flex-col gap-y-5 md:px-20 my-10'>
            <motion.article ref={Ref1} initial='hidden' animate={Controls1} variants={variation1} className='flex justify-center items-center flex-col gap-y-5 p-5 hover:border hover:border-prim transition duration-500 ease-in-out bg-dark shadow shadow-slate-300 rounded-md text-txt w-[300px]'>
                <TbTruckDelivery size={30}/>
                <h1 className='text-2xl'>Fast Delivery</h1>
                <p className='text-start'>Get your sneakers swiftly with our lightning-fast delivery service, so you can step out in style sooner.</p>
            </motion.article>
            <motion.article ref={Ref2} initial='hidden' animate={Controls2} variants={variation2} className='flex justify-center items-center flex-col gap-y-5 p-5  hover:border hover:border-prim transition duration-500 ease-in-out bg-dark shadow shadow-slate-300 rounded-md text-txt w-[300px]'>
                <TbFreeRights size={30}/>
                <h1 className='text-2xl'>Free Shipping</h1>
                <p className='text-start'>Enjoy the freedom of free shipping on all sneaker orders, making your shopping experience affordable.</p>
            </motion.article>
            <motion.article ref={Ref3} initial='hidden' animate={Controls3} variants={variation3} className='flex justify-center items-center flex-col gap-y-5 p-5 hover:border hover:border-prim transition duration-500 ease-in-out bg-dark shadow shadow-slate-300 rounded-md text-txt w-[300px]'>
                <MdWorkspacePremium size={30}/>
                <h1 className='text-2xl'>Premium Quality</h1>
                <p className='text-start'>Discover sneakers crafted with the utmost care and quality, ensuring durability, for every step.</p>
            </motion.article>
        </section>
    </div>
  )
}

export default WhyShopWithUs