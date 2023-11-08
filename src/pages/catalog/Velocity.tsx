import React, { useContext, useState } from 'react'
import Navbar from '../../components/Navbar'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import { ProductContext } from '../../store/Product'

const Velocity = () => {
  const { products, itemCount, handleAdd, handleMinus, addToCart } = useContext(ProductContext)
  const [active, setActive] = useState([true, false, false])

  const toggleActive = (index: number) => setActive(active.map((value, i: number) => i === index))

  const images = {
    img1: products[0].images[0],
    img2: products[0].images[1],
    img3: products[0].images[2],
  }

  const product = products[0]

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className='pt-32 pb-20'>
        <h1 className='md:text-3xl text-xl text-dark text-center'>Velocity</h1>
        <div className='flex justify-center items-center md:flex-row md:gap-x-20 flex-col gap-y-50'>
          <section className='flex flex-col gap-y-5'>
            <article className='bg-slate-300'>
              {active[0] && <img src={images.img1} className='md:h-[300px] md:w-[300px] h-52 w-52' alt="" />}
              {active[1] && <img src={images.img2} className='md:h-[300px] md:w-[300px] h-52 w-52' alt="" />}
              {active[2] && <img src={images.img3} className='md:h-[300px] md:w-[300px] h-52 w-52' alt="" />}
            </article>
            <article className='flex items-center gap-x-2'>
              <figure className={`${active[0] && 'border  rounded-md border-prim'}`}>
                <img src={images.img1} onClick={() => toggleActive(0)} className={`h-20 w-20 rounded-sm cursor-pointer border border-gray-400 ${active[0] && 'border-prim opacity-50'}`} alt="" />
              </figure>

              <figure className={`${active[1] && 'border  rounded-md border-prim'}`}>
                <img src={images.img2} onClick={() => toggleActive(1)} className={`h-20 w-20 rounded-sm cursor-pointer border border-gray-400 ${active[1] && 'border-prim opacity-50'}`} alt="" />
              </figure>

              <figure className={`${active[2] && 'border  rounded-md border-prim'}`}>
                <img src={images.img3} onClick={() => toggleActive(2)} className={`h-20 w-20 rounded-sm cursor-pointer border border-gray-400 ${active[2] && 'border-prim opacity-50'}`} alt="" />
              </figure>

            </article>
          </section>

          <section className='flex flex-col md:w-[30%] px-3'>
            <h2 className='font-bold my-3 mt-20 text-prim'>RubyFoot</h2>
            <h1 className='text-3xl font-bold text-dark mb-10'>{product.name}</h1>
            <p>{product.description}</p>
            <div className='flex items-center gap-x-2 my-10'>
              <p className='font-bold text-lg text-orange-600'>${product.price}</p>
              <p className='text-gray-500 line-through italic'>${product.price -(product.price * 3)}</p>
            </div>
              <article className='flex items-center gap-x-3 md:flex-row flex-col'>
                <figure className=' items-center md:gap-x-3 md:justify-between justify-center gap-x-10 my- w-full hidden'>
                  <button className='bg-prim p-2 text-txt rounded-full' onClick={() => handleMinus(product.name)} disabled={(itemCount[product.name] || 0) === 1}><AiOutlineMinus size={30}/></button>
                  <p className='font-bold text-lg my-10'>{itemCount[product.name] || 1}</p>
                  <button className='bg-prim p-2 text-txt rounded-full'  onClick={() => handleAdd(product.name)} disabled={((itemCount[product.name]) >= 5)}><AiOutlinePlus size={30}/></button>
                </figure>
                <button onClick={() => addToCart(product.name, product.price,7,itemCount[product.name] || 1 ,'')} className='bg-dark text-txt py-3 px-10 rounded-md w-full'>Add to Cart</button>
              </article>
          </section>
          
        </div>
      </main>
    </div>
  )
}

export default Velocity