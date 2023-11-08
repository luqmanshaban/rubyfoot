import React, { useContext, useEffect, useState } from 'react';
import white1 from '../../assets/images//Velocity/white1.png';
import white2 from '../../assets/images/Velocity/white2.png';
import white3 from '../../assets/images/Velocity/white3.png';
import { ProductContext } from '../../store/Product';
import { BiCartAlt } from 'react-icons/bi';
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProductCountdown from '../../components/CountDown';

const h1Variation = {
  hidden: {opacity: 0, y:100},
  visible: {opacity: 1, y: 1, transition: {duration: 0.5, delay: 0}}
}

const dVariation = {
  hidden: {opacity: 0, x:100},
  visible: {opacity: 1, x: 1, transition: {duration: 0.5}}
}

const imageSources: any = {
    white: white1,
    orange: white2,
    black: white3,
};

const Featured = () => {
    const [selectedColor, setSelectedColor] = useState('orange'); 
    const [selectedSize, setSelectedSize] = useState(7)
    const [sizeBtnClicked, setSizeBtnClicked] = useState<number>(7)
    const { products, addToCart } = useContext(ProductContext);
    const h1Controls = useAnimation()
    const iControls = useAnimation()
    const [h1Ref , h1Inview] = useInView({triggerOnce: true})
    const [dRef , dInview] = useInView({triggerOnce: true})
    

    const colorPicked = (colorValue: string) => {
        setSelectedColor(colorValue);         
    };
    const sizePicked = (sizeValue: number) => {
        setSelectedSize(sizeValue)
        setSizeBtnClicked(sizeValue)
    }

    useEffect(() => {
        if(h1Inview){
          h1Controls.start('visible')
        }
      },[h1Controls, h1Inview])
      useEffect(() => {
        if(dInview){
          iControls.start('visible')
        }
      },[iControls, dInview])
      

    return (
        <>
        <motion.h1 ref={h1Ref} initial='hidden' animate={h1Controls} variants={h1Variation} className='my-10 text-txt text-4xl font-bold text-center mt-32'>Featured</motion.h1>
        <div className='flex justify-center items-center md:flex-row flex-col gap-x-20 md:px-20 bg-slate-300 text-txt'>
            <section>
               <img
                    className='md:h-[400px] md:w-[400px] h-52 w-52'
                    src={imageSources[selectedColor]}
                    alt=''
                />
            </section>
            <motion.section ref={dRef} initial='hidden' animate={iControls} variants={dVariation} className='flex flex-col gap-y-3 px-3 w-full md:w-auto py-20'>
                <p className='text-sm font-bold text-orange-600'>On Sale</p>
                <ProductCountdown />
                <h1 className='text-dark md:text-4xl text-2xl font-bold '>Zapatilas Hombre</h1>
                <h2 className='text-dark text-xl font-bold'>${products[0].price}</h2>
                <div className='flex justify-between items-center'>
                    <article>
                        <h2 className='text-gray-500'>color:</h2>
                        <div className='flex items-center gap-x-4'>
                            {products[0].color.map((colorValue: string, index: number) => (
                                <span
                                    key={index}
                                    onClick={() => colorPicked(colorValue)}
                                     className={`cursor-pointer block  h-5 w-5 rounded-full ${selectedColor === colorValue && 'border-2 border-blue-700'} ${colorValue === 'white' ? 'bg-white' : ''} ${colorValue === 'black' ? 'bg-black' : ''} ${colorValue === 'orange' ?      'bg-orange-600' : ''}`}
                                >
                                </span>
                            ))}
                       </div>
                    </article>
                    <article>
                        <h2 className='text-gray-500'>sizes:</h2>
                        <div className='flex flex-wrap gap-x-2 gap-y-2'>
                        <select
                           id="category"
                           name="category"
                           required 
                           className='mx-2 p-2 rounded-lg bg-dark text-txt'
                           value={sizeBtnClicked}
                           onChange={(e) => sizePicked(parseInt(e.target.value, 10))}
                         >
                            {
                                products[0].sizes.map((size: number, index: number) => (
                                    <option key={index} className='text-txt' value="meals">{size}</option>
                                ))
                            }
                           
                         </select>
                        </div>
                    </article>
                </div>
                <button
                    className='bg-dark text-txt p-3 mt-5 rounded-md flex justify-center items-center gap-x-2'
                    onClick={() => addToCart(products[0].name, products[0].price, selectedSize, 1, selectedColor)}
                >
                    <BiCartAlt color='white' />
                    ADD TO CART
                </button>
            </motion.section>
        </div>
        </>
    );
};

export default Featured;
