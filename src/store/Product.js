import { createContext, useMemo, useState } from "react";
import Products from "../Products";

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
    const products = Products
    const [items, setItems] = useState([])
    const [itemCount, setItemCount] = useState({});

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
        handleMinus
    }
    return (
        <ProductContext.Provider value={context}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider