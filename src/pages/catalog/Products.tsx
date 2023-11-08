import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../store/Product'
import { ProductT } from '../../types/Type';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const createVariation = (index: number) => ({
    hidden: { opacity: 0, y: 20 + 20 * index },
    visible: { opacity: 1, y: 1, transition: { duration: 0.5, delay: 0.1 * index } },
  });

  const pVariation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 1, transition: { duration: 0.5 } },
  };

const Products = () => {
    const { products } = useContext(ProductContext)
    const [hovered, setHovered] = useState([false, false, false, false, false, false]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const controls = products.map(() => useAnimation());
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inViews = products.map(() => useInView({ triggerOnce: true }));

  const onHover = (index: number) => {
    const newHovered = [...hovered];
    newHovered[index] = true;
    setHovered(newHovered);
  };

  const onMouseLeave = (index: number) => {
    const newHovered = [...hovered];
    newHovered[index] = false;
    setHovered(newHovered);
  };

  useEffect(() => {
    inViews.forEach((inView: any, index: any) => {
      if (inView.inView) {
        controls[index].start('visible');
      }
    });
  }, [controls, inViews]);

  
  return (
    <div className='flex justify-center items-center flex-wrap md:flex-row w-full gap-y-10 gap-x-10 my-10 px-5'>
        {
            products.map((product: ProductT, i: number) => (
                <motion.article key={i}
                ref={inViews[i].ref}
                initial='hidden'
                animate={controls[i]}
                variants={createVariation(i)}
                onMouseEnter={() => onHover(i)}
                onMouseLeave={() => onMouseLeave(i)}
                 className={`p-2 border shadow-md rounded-sm cursor-pointer transition duration-500 ease-in-out shadow-slate-300 md:w-[250px] w-full ${
                    hovered[i] && 'border hover:scale-105'
                  }`}>
                    <figure className='bg-slate-400 p-5 rounded-sm flex justify-center items-center'>
                      <img src={product.images[2]} className='md:h-82 md:w-82 h-44 w-44' alt={product.name} />
                    </figure>
                    <figure className='flex justify-between items-center'>
                      <h1 className='text-lg'>{product.name}</h1>
                      <p className='text-lg text-prim italic font-bold'>${product.price}</p>
                    </figure>
                    <motion.figure 
                    initial='hidden'
                    animate={hovered[i] ? 'visible' : 'hidden'}
                    variants={pVariation}
                    className={` bg-black bg-opacity-50 text-gray-100 w-full h-full rounded-sm flex items-end justify-center ${!hovered[i] ? 'hidden ' : 'absolute bottom-0 right-0'}`}>
                       <Link to={`/catalog/${product.route}`}  className='bg-txt text-center text-prim font-bold w-full py-3'>View Product</Link>
                    </motion.figure>
                </motion.article>
            ))
        }
    </div>
  )
}

export default Products