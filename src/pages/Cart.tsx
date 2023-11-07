import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { ProductContext } from '../store/Product'
import { ProductT } from '../types/Type'
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Cart = () => {
  const { items , total, handleAdd, handleMinus,  itemCount, removeFromCart } = useContext(ProductContext)
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className='py-20 flex flex-col justify-center items-center'>
        <h1 className='my-20 text-dark text-4xl font-bold'>Cart</h1>
        <section className='flex flex-col gap-y-3 rounded-md shadow-md p-5 shadow-slate-300'>
          { 
             items.length > 0 && items.map((product: ProductT, i: number) => (
              <>
               <article key={i} className='p-3 flex justify-between items-center shadow-md gap-x-5'>
                <h1 className='font-mono font-bold text-prim'>{product.name}</h1>
                <p>ksh {product.price}</p>
                <span>x {itemCount[product.name] || 1}</span>
                <button onClick={() => handleAdd(product.name)} disabled={((itemCount[product.name]) >= 5)} className='bg-black text-white  p-2 flex justify-center items-center rounded-full'>
                    <AiOutlinePlus />
                </button>
                <button onClick={() => handleMinus(product.name)}  disabled={(itemCount[product.name] || 0 ) === 1} className='bg-black text-white  p-2 flex justify-center items-center rounded-full'>
                    <AiOutlineMinus color='white' />
                </button>
                <button onClick={() => removeFromCart(product.name)}>
                    <AiFillDelete color='red' size={30} />
                </button>
               </article>
               <p className='font-bold text-gray-500 italic'>Total: ${total}</p>
               <button className='bg-black text-white p-2 px-10 rounded-md'>Checkout</button>
               </>
             ))
          }
          {
            items.length === 0 && (
              <div className='p-20'>
               <h1>Cart Empty</h1>
               <Link to='/catalog' className='underline text-blue-800'>View Catalog</Link>
              </div>
               )
          }
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Cart