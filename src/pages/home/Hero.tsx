import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { Link } from 'react-router-dom';

const div1 = (
  <div className='p-3 flex flex-col justify-start items-start md:gap-y-5 gap-y-2'>
    <h1 className='md:text-5xl text-3xl text-start text-prim font-bold'>20% Off</h1>
    <p className='text-start'>Get 20% off your first purchase today and enjoy incredible savings on our amazing products. Shop now and experience the best deals!</p>
    <Link to='/catalog' className='p-2 md:px-10 bg-status-w rounded-lg font-bold md:text-lg'>Order Now</Link>
  </div>
)

const div2 = (
  <div className='p-3 flex text-start flex-col justify-start items-start md:gap-y-5 gap-y-2'>
    <h1 className='md:text-5xl text-3xl text-start text-prim font-bold'>New Arrivals</h1>
    <p className='text-start'>Discover our latest collection of high-quality products that will elevate your style and meet your needs. Shop now to stay ahead of the trend!</p>
    <Link to='/catalog' className='p-2 md:px-10 bg-status-w rounded-lg font-bold md:text-lg'>View Catalog</Link>
  </div>
)

const div3 = (
  <div className='p-3 flex text-start flex-col justify-start items-start md:gap-y-5 gap-y-2'>
    <h1 className='md:text-5xl text-3xl text-start text-prim font-bold'>Special Promotion</h1>
    <p>Don't miss our special promotion! Get amazing discounts on a wide range of products. Save big and shop smart. Your satisfaction is our priority.</p>
    <a href="#promotion" className='p-2 md:px-10 bg-status-f rounded-lg font-bold md:text-lg'>View Product</a>
  </div>
)

const Hero = () => {
  const div = [div1, div2, div3];

  return (
    <div className='md:p-10 md:py-20 md:w-[600px] md:relative relative top-0  md:left-52 md:top-32'>
      <Carousel showArrows={false} showThumbs={false} showIndicators={true} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000}>
        {div.map((element, index) => (
          <div key={index}>
            {element}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
