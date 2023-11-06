import React, { useContext } from 'react'
import { ProductContext } from '../../store/Product'
import { ProductT } from '../../types/Type'
import { BiCartAdd } from 'react-icons/bi'

const TopSelling = () => {
    const { products, addToCart } = useContext(ProductContext)
   

  return (
    <div className='my-20 flex justify-center items-center bg-txt flex-col'>
        <h1 className='my-10 text-dark text-4xl font-bold'>Top Selling</h1>
        <section className='flex items-center justify-center md:flex-row flex-col gap-y-5 md:gap-x-10'>
            {products.slice(0,3).map((product: ProductT, index: number) => (
                <article key={index} className='flex flex-col items-start justify-start gap-y-2 w-full px-2'>
                    <figure className='w-full p-10 bg-slate-300'>
                        <img src={product.images[0]} className='' height={200} width={200} alt={product.name} />
                    </figure>
                    <figure className='flex justify-between items-center w-full'>
                      <p className='text-md text-gray-600 font-bold'>${product.price}</p>
                      <div className='flex items-center gap-x-5 h-5 px-2 rounded-full'>
                        {
                          product.color.map((color: string, i: number) => (
                              <div key={i} className={`h-4 w-4 block rounded-full border border-orange-500 cursor-pointer`} style={{backgroundColor: color}}></div>
                          ))
                        }
                      </div>
                    </figure>
                    <div className='flex justify-between items-center w-full'>
                        <h1 className='text-lg'>{product.name}</h1>
                        <button onClick={() => addToCart(product.name, product.price, 7, 1, product.color[0])}>
                            <BiCartAdd size={30}/>
                        </button>
                    </div>
                </article>
            ))}
        </section>
    </div>
  )
}

export default TopSelling