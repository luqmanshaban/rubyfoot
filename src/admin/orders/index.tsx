import React, { useEffect, useState } from 'react'
import { CartT } from '../../types/Type'
import axios from 'axios'


const Orders = () => {
  const [orders, setOrders] = useState<CartT[]>()


  useEffect(() => {
    const getOrders = async() => {
      try {
        const response = await axios.get('http://localhost:8000/api/orders')
        setOrders(response.data.orders)
      } catch (error) {
        console.error(error);
      }
    }
    getOrders()
    
  },[])

  return (
    <div className='overflow-y-auto'>
        <h1>All Orders</h1>
      <table className='w-full p-5 border border-black m-5 font-sans'>
        <thead className='w-full border border-gray-500 p-2 rounded-md'>
          <tr>
            <th className='border border-gray-800 p-2'>Id.</th>
            <th className='border border-gray-800 p-2'>Name</th> 
            <th className='border border-gray-800 p-2'>Price</th> 
            <th className='border border-gray-800 p-2'>Color</th> 
            <th className='border border-gray-800 p-2'>Size</th> 
            <th className='border border-gray-800 p-2'>Qunatity</th>
          </tr>
        </thead>
        <tbody>
          {
            orders?.map((order: any, i: number) => (
              <tr key={i} className='text-dark'>
                <td className='border border-gray-800 p-2 text-center'>{order._id}</td>
                <td className='border border-gray-800 p-2 text-center'>{order.name}</td>
                <td className='border border-gray-800 p-2 text-center'>${order.price}</td>
                <td className='border border-gray-800 p-2 text-center font-bold' style={{color: order.color}}>{order.color}</td>
                <td className='border border-gray-800 p-2 text-center'>{order.size}</td>
                <td className='border border-gray-800 p-2 text-center'>{order.quantity}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Orders