import { ProductT } from "./types/Type"
import ProductImages from "./helpers/ProductImages"


const Products: ProductT[] = [
    {
        name: 'Velocity Vortex',
        route: 'velocity',
        color: ['orange', 'black', 'white'],
        price: 120,
        sizes: [7, 7.5, 8, 9, 9.5, 10, 11, 11.5, 12],
        images: ProductImages.velocity,
        description: "These fashion kicks embody a unique blend of speed-inspired aesthetics and versatility, ensuring that you stand out from the crowd. Perfect for any season, they adapt effortlessly to changing weather, making them your go-to choice whether it's summer or winter.Their dynamic design and materials make Velocity Vortex sneakers an excellent choice for those who appreciate style and performance in any season."
    },
    {
        name: 'Urban Stride',
        route: 'urban',
        color: ['red', 'black', 'grey'],
        price: 80,
        sizes: [7, 7.5, 8, 9, 9.5, 10, 11, 11.5, 12],
        images: ProductImages.urban,
        description: "TUniqueness defines Urban Stride sneakers with their urban-inspired fashion and functional features. Whether it's the sweltering heat of summer or the chill of winter, they are crafted to complement your style and withstand the seasons. With their contemporary design, these sneakers provide a perfect fit and an urban edge, making them a versatile choice for any fashion-conscious individual."
    },
    {
        name: 'NovaFlex Fusion',
        route: 'nova',
        color: ['white', 'black', 'red'],
        price: 90,
        sizes: [7, 7.5, 8, 9, 9.5, 10, 11, 11.5, 12],
        images: ProductImages.nova,
        description: "NovaFlex Fusion sneakers are a testament to their one-of-a-kind fusion of flexibility and innovation, ensuring that you're always ahead of the fashion game. Designed to seamlessly adapt to any season, they combine modern style with adaptable materials, making them an ideal choice year-round for those who crave unique, cutting-edge fashion."
    },
    {
        name: 'Stealth Runner',
        route: 'stealth',
        color: ['white', 'green', 'orange'],
        price: 99,
        sizes: [7, 7.5, 8, 9, 9.5, 10, 11, 11.5, 12],
        images: ProductImages.stealth,
        description: "The uniqueness of Stealth Runner Pro sneakers lies in their unassuming design and professional-grade performance. These kicks are engineered to deliver exceptional comfort and durability in any season, providing a blend of style and functionality. The versatility of these fashion kicks ensures you can confidently step out in style throughout the year, making them an attractive choice for those seeking unique, season-defying footwear."
    },
]

export default Products