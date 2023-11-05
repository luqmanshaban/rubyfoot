import React, { useContext, useState } from 'react';
import white1 from '../../assets/images/hero.png';
import white2 from '../../assets/images/white2.png';
import white3 from '../../assets/images/white3.png';
import { ProductContext } from '../../store/Product';
import { BiCartAlt } from 'react-icons/bi';

const NewArrival = () => {
    const [selectedColor, setSelectedColor] = useState('white'); // State to track the selected color
    const [selectedSize, setSelectedSize] = useState(7)
    const { products, addToCart } = useContext(ProductContext);

    const colorPicked = (colorValue: string) => {
        setSelectedColor(colorValue); // Update the selected color
    };
    const sizePicked = (sizeValue: number) => {
        setSelectedSize(sizeValue)
    }

    return (
        <div className='flex justify-center items-center md:flex-row flex-col gap-x-20 md:px-20 bg-slate-300 text-txt'>
            <section>
                {selectedColor === 'white' && <img src={white1} alt="" />}
                {selectedColor === 'orange' && <img src={white2} alt="" />}
                {selectedColor === 'black' && <img src={white3} alt="" />}
            </section>
            <section className='flex flex-col gap-y-3 px-3'>
                <p className='text-sm font-bold text-orange-600'>On Sale</p>
                <h1 className='text-dark md:text-4xl text-2xl font-bold '>Zapatilas Hombre</h1>
                <h2 className='text-dark text-xl font-bold'>${products[0].price}</h2>
                <h2 className='text-gray-500 text-2xl'>Color:</h2>
                <div className='flex items-center gap-x-4'>
                    {products[0].color.map((colorValue: string, index: number) => (
                        <span
                            key={index}
                            onClick={() => colorPicked(colorValue)}
                            className={`cursor-pointer h-5 w-5 rounded-full bg-${colorValue === 'white' || colorValue === 'black' ? colorValue : `${colorValue}-500`}`}
                        ></span>
                    ))}
                </div>
                <h2 className='text-gray-500 text-2xl'>Sizes:</h2>
                <div className='flex flex-wrap gap-x-2 gap-y-2'>
                    {products[0].sizes.map((size: number, index: number) => (
                        <span
                            key={index}
                            onClick={() => sizePicked(size)}
                            className='md:h-10 md:w-10 h-8 w-8 text-center flex justify-center items-center rounded-lg bg-white text-black'
                        >
                            {size}
                        </span>
                    ))}
                </div>
                <button
                    className='bg-dark text-txt p-2 rounded-md flex justify-center items-center gap-x-2'
                    onClick={() => addToCart(products[0].name, products[0].price, selectedSize, 1, selectedColor)}
                >
                    <BiCartAlt color='white' />
                    ADD TO CART
                </button>
            </section>
        </div>
    );
};

export default NewArrival;