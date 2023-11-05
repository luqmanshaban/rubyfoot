import React from 'react'
import { TbTruckDelivery, TbFreeRights } from 'react-icons/tb'
import { MdWorkspacePremium } from 'react-icons/md'

const WhyShopWithUs = () => {
  return (
    <div>
        <h1 className='text-mono md:text-5xl text-3xl text-dark text-center font-bold'>Why Shop With Us ?</h1>
        <div className='flex justify-center items-center w-full my-5'>
            <div className='bg-orange-600 h-2 w-20 block'></div>
        </div>
        <section className='flex justify-center items-center gap-x-10 md:flex-row flex-col gap-y-5 md:px-20 my-10'>
            <article className='flex justify-center items-center flex-col gap-y-5 p-5 bg-dark text-txt w-[300px]'>
                <TbTruckDelivery size={30}/>
                <h1 className='text-2xl'>Fast Delivery</h1>
                <p className='text-start'>Get your sneakers swiftly with our lightning-fast delivery service, so you can step out in style sooner.</p>
            </article>
            <article className='flex justify-center items-center flex-col gap-y-5 p-5 bg-dark text-txt w-[300px]'>
                <TbFreeRights size={30}/>
                <h1 className='text-2xl'>Free Shipping</h1>
                <p className='text-start'>Enjoy the freedom of free shipping on all sneaker orders, making your shopping experience affordable.</p>
            </article>
            <article className='flex justify-center items-center flex-col gap-y-5 p-5 bg-dark text-txt w-[300px]'>
                <MdWorkspacePremium size={30}/>
                <h1 className='text-2xl'>Premium Quality</h1>
                <p className='text-start'>Discover sneakers crafted with the utmost care and quality, ensuring comfort, & durability, for every step.</p>
            </article>
        </section>
    </div>
  )
}

export default WhyShopWithUs