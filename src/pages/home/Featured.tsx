import React, { useContext, useState } from 'react';
import white1 from '../../assets/images/hero.png';
import white2 from '../../assets/images/Velocity/white2.png';
import white3 from '../../assets/images/Velocity/white3.png';
import { ProductContext } from '../../store/Product';
import { BiCartAlt } from 'react-icons/bi';

const Featured = () => {
    const [selectedColor, setSelectedColor] = useState('white'); 
    const [selectedSize, setSelectedSize] = useState(7)
    const [sizeBtnClicked, setSizeBtnClicked] = useState<number>(7)
    const { products, addToCart } = useContext(ProductContext);
    

    const colorPicked = (colorValue: string) => {
        setSelectedColor(colorValue); 
    };
    const sizePicked = (sizeValue: number) => {
        setSelectedSize(sizeValue)
        setSizeBtnClicked(sizeValue)
    }

    return (
        <>
        <h1 className='my-10 text-dark text-4xl font-bold text-center mt-20'>Featured</h1>
        <div className='flex justify-center items-center md:flex-row flex-col gap-x-20 md:px-20 bg-slate-300 text-txt'>
            <section>
                {selectedColor === 'white' && <img  className='md:h-full md:-w-full h-44 w-44' src={white1} alt="" />}
                {selectedColor === 'orange' && <img className='md:h-full md:-w-full h-44 w-44'  src={white2} alt="" />}
                {selectedColor === 'black' && <img  className='md:h-full md:-w-full h-44 w-44' src={white3} alt="" />}
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
                            className={`cursor-pointer block  h-5 w-5 rounded-full ${selectedColor === colorValue && 'border-2 border-blue-700'} ${colorValue === 'white' ? 'bg-white' : ''} ${colorValue === 'black' ? 'bg-black' : ''} ${colorValue === 'orange' ? 'bg-orange-600' : ''}`}
                            >
                        </span>
                    ))}
                </div>
                <h2 className='text-gray-500 text-2xl'>Sizes:</h2>
                <div className='flex flex-wrap gap-x-2 gap-y-2'>
                    {products[0].sizes.map((size: number, index: number) => (
                        <span
                            key={index}
                            onClick={() => sizePicked(size)}
                            className={`md:h-10 md:w-10 h-8 w-8 cursor-pointer text-center flex justify-center items-center rounded-lg ${sizeBtnClicked === size ? 'bg-black text-white' : 'bg-white text-black'}`}
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
        </>
    );
};

export default Featured;
