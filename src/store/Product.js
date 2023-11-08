import { createContext, useMemo, useState } from "react";
import Products from "../Products";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
    const products = Products
    const [items, setItems] = useState([])
    const [itemCount, setItemCount] = useState({});
    const navigate = useNavigate()

    const handleAdd = (productName) =>
      setItemCount((prev) => ({
        ...prev,
        [productName]: (prev[productName] || 0) + 1,
      }));
  
    const handleMinus = (productName) =>
      setItemCount((prev) => ({
        ...prev,
        [productName]: (prev[productName] || 0) -1,
      }));

      const count = items.length

    const addToCart = (name, price, size, quantity, color) => setItems(prev => [...prev, {name, price, size, quantity, color}])
    const createOrder = async(name, price, size, quantity, color) =>{
      const orders = {
        orders: items
      }
      try {
        await axios.post('https://dark-plum-iguana-ring.cyclic.app/api/orders', orders).then(res => {
          setItems(prev => [...prev, {name, price, size, quantity, color}])
          setItems([])
          alert('Order Created')
          navigate('/')
        })
        
      } catch (error) {
        alert(error.message)
        console.log(error);
      }
    }
    const removeFromCart = (name) => setItems((prev) => prev.filter((item) => item.name !== name));

    const total = useMemo(() => {
        return items.reduce(
          (acc, item) => acc + item.price * (itemCount[item.name] || 1),
          0
        );
      }, [itemCount, items]);

    const context = {
        products,
        itemCount,
        items,
        total,
        count,
        addToCart,
        removeFromCart,
        handleAdd,
        handleMinus,
        createOrder
    }
    return (
        <ProductContext.Provider value={context}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider