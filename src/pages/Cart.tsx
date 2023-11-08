import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { ProductContext } from '../store/Product'
import { CartT, ProductT } from '../types/Type'
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Cart = () => {
  const { items , total, handleAdd, handleMinus,  itemCount, removeFromCart, products, createOrder } = useContext(ProductContext)
  const [colorPicked, setColorPicked] = useState('')
  const [colorClicked, setColorClicked] = useState('')
  const [sizePicked, setSizePicked] = useState(7)
  const [sizeClicked, setsizeClicked] = useState(7)
  const [updatedCart, setUpdateCart] = useState<CartT>({
    name: '',
    price: 0,
    color: '',
    size: 0,
    quantity: 0,
  })

  
  function findImg(img: any) {
    const r = products.find((product: any) => product.name.includes(img));
    
    return r.images[1]
  }  

  const FinalColor = (colorValue: string) => {
    setColorClicked(colorValue);
    setUpdateCart((prevCart: any) => ({ ...prevCart, color: colorClicked }));
  };

  const FinalSize = (sizeValue: number) => {
    setsizeClicked(sizeValue);
    setUpdateCart((prevCart: any) => ({ ...prevCart, size: sizeClicked }));
  };
  
  
  async function update(name: string,  price: number, size: number, quantity: number, color: string) {
     setUpdateCart((prev: any) => ({
      name: name,
      price: price,
      size: size, 
      quantity: quantity,
      color: color
    }))

    createOrder(updatedCart.name, updatedCart.price, updatedCart.size, updatedCart.quantity, updatedCart.color)
  }
  
  
  return (
    <div>
    <header>
      <Navbar />
    </header>
    <main className='py-20 flex flex-col justify-center items-center px-5 bg-white shadow-lg md:p-5 p-2'>
      <h1 className='md:my-20 text-dark md:text-4xl text-lg font-bold'>Cart</h1>
      {items.length > 0 ? (
        <>
        {items.map((product: ProductT, i: number) => (
        <div className='md:flex md:justify-center md:items-center md:flex-col overflow-y-auto w-full'>
        <table className='rounded-md shadow-md p-5 shadow-slate-500'>
          <thead>
            <tr>
              <th className='p-2 border border-black'>Image</th>
              <th className='p-2 border border-black'>Name</th>
              <th className='p-2 border border-black'>Color</th>
              <th className='p-2 border border-black'>Size</th>
              <th className='p-2 border border-black'>Add</th>
              <th className='p-2 border border-black'>Minus</th>
              <th className='p-2 border border-black'>Items</th>
              <th className='p-2 border border-black'>Price</th>
              <th className='p-2 border border-black'>Delete</th>
            </tr>
          </thead>
          <tbody>
              <>
              <tr key={i}>
                <td  className='p-2 border border-black'>
                  <img src={findImg(product.name)} alt={product.name} className='md:h-20 md:w-20 h-10 w-10' />
                </td>
                <td  className='p-2 border border-black'>{product.name}</td>
                <td  className='p-2 border border-black'>
                <select
                       id="category"
                       name="category"
                       required 
                       className='mx-2 p-2 rounded-lg bg-dark text-zinc-50'
                       value={colorPicked}
                       onChange={(e) => setColorPicked(e.target.value)}
                     >
                       {
                          products.find((p: any) => p.name.includes(product.name))?.color.map((color: string, index: number) => (
                            <option key={index} value={color} onClick={() => FinalColor(color)}>
                              <span style={{ backgroundColor: color }}>{color}</span>
                            </option>
                          ))
                      }
                           
                    </select>
                </td>
                <td  className='p-2 border border-black'>
                   <select
                       id="category"
                       name="category"
                       required 
                       className='mx-2 p-2 rounded-lg bg-dark text-zinc-50'
                       value={sizePicked}
                       onChange={(e) => setSizePicked(parseInt(e.target.value, 10))}
                     >
                        {
                            products.find((p: any) => p.name.includes('Velocity'))?.sizes.map((size: number, index: number) => (
                                <option key={index} value={size} onClick={() => FinalSize(size)}>{size}</option>
                            ))
                        }
                           
                    </select>
                </td>
                <td  className='p-2 border border-black'>
                  <button className='p-2 bg-dark text-white rounded-full' onClick={() => handleAdd(product.name)} disabled={((itemCount[product.name]) >= 5)}>
                    <AiOutlinePlus size={20} />
                  </button>
                </td>
                <td  className='p-2 border border-black'>
                  <button className='p-2 bg-dark text-white rounded-full' onClick={() => handleMinus(product.name)} disabled={(itemCount[product.name] || 0) === 1}>
                    <AiOutlineMinus size={20} />
                  </button>
                </td>
                <td  className='p-2 border border-black'>{itemCount[product.name] || 1}</td>
                <td  className='p-2 border border-black'>${product.price}</td>
                <td onClick={() => removeFromCart(product.name)}  className='p-2 border border-black'><AiFillDelete size={30} color='red'/></td>
              </tr>
              <div className='flex justify-start items-center my-10 md:gap-x-2 gap-x-5'>
                <button onClick={() => update(product.name, product.price, sizePicked, itemCount[product.name] || 1, colorPicked)} className='bg-black text-white md:w-[300px] w-[80%] p-2 px-10 rounded-md'>Checkout</button>
                <p className='font-bold text-gray-500 italic'>Total: ${total}</p>
              </div>
              </>
          </tbody>
        </table>
        </div>
        ))}
        </>
      ) : (
        <div className='p-20'>
          <h1>Cart Empty</h1>
          <Link to='/catalog' className='underline text-blue-800'>View Catalog</Link>
        </div>
      )}
    </main>
  </div>
  )
}

export default Cart