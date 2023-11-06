import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { Link } from 'react-router-dom';

const div1 = (
  <div className='p-2 pt-40 flex flex-col justify-center items-center md:gap-y-5 gap-y-2 md:pt-40 md:my-20'>
    <h1 className='md:text-5xl text-3xl text-txt font-bold'>20% Off</h1>
    <p className='text-white whitespace-normal'>Get 20% off your first purchase today and enjoy incredible savings on our amazing products. Shop now and experience the best deals!</p>
    <Link to='/catalog' className='p-2 md:px-10 bg-status-w rounded-lg font-bold md:text-lg'>Order Now</Link>
  </div>
);


const div2 = (
  <div className='p-2 pt-40 flex flex-col justify-center items-center md:gap-y-5 gap-y-2 md:pt-40 md:my-20'>
    <h1 className='md:text-5xl text-3xl text-txt font-bold'>New Arrivals</h1>
    <p className='text-white'>Discover our latest collection of high-quality products that will elevate your style and meet your needs. Shop now to stay ahead of the trend!</p>
    <Link to='/catalog' className='p-2 md:px-10 bg-status-w rounded-lg font-bold md:text-lg'>View Catalog</Link>
  </div>
);

const div3 = (
  <div className='p-2 pt-40 flex flex-col justify-center items-center md:gap-y-5 gap-y-2 md:pt-40 md:my-20'>
    <h1 className='md:text-5xl text-3xl text-txt font-bold'>Special Promotion</h1>
    <p className='text-white'>Don't miss our special promotion! Get amazing discounts on a wide range of products. Save big and shop smart. Your satisfaction is our priority.</p>
    <a href="#promotion" className='p-2 md:px-10 bg-status-w rounded-lg font-bold md:text-lg'>View Product</a>
  </div>
);

//adjust on small screens
function adjustWidth() {
  return window.innerWidth >= 800 ? 600 : 370;
}



const Hero = () => {
  const div = [div1, div2, div3];

  return (
    <div className='flex justify-center items-center md:px-80'>
      <div className="absolute md:bottom-16 bottom-10 bg-black bg-opacity-50 text-gray-100 w-full h-full md:h-[700px] rounded-15 md:p-20"></div>
      <Carousel width={adjustWidth()} showArrows={false} showThumbs={false} showIndicators={true}  showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000}>
        {div.map((element, index) => (
          <div key={index} className='z-10 my-10'>
            {element}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
