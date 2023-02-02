import { ShowProducts } from '../Components/Products/ShowProducts';
import { PrimaryNavbar } from '../Components/Navbars/PrimaryNavbar';
import { PrimaryCarousel } from '../Components/Carousel/PrimaryCarousel';
import { PrimaryFooter } from '../Components/Footers/PrimaryFooter';
import { SecondaryNavbar } from '../Components/Navbars/SecondaryNavbar';
import { ProductContext } from '../Components/Context/ProductContext';
import { CartContext } from '../Components/Context/CartContext';
import { Head } from '@inertiajs/inertia-react';
import { useState } from 'react';

export default function About(props) {

    const slides = [
        { id: 0, img: 'storage/imgs/welcome/dark-blue-water.jpg' },
        { id: 1, img: 'storage/imgs/welcome/blue-water.jpg' },
        { id: 2, img: 'storage/imgs/welcome/balloons.jpg' }
    ]

    const [cart, setCart] = useState([
        { id: 0, name: 'Apple Macbook Pro', price: 1999.99, amount: 3, img: 'storage/imgs/products/laptop.jpg' },
        { id: 1, name: 'Apple Macbook Air', price: 1555.99, amount: 3, img: 'storage/imgs/products/laptop1.jpg' },
        { id: 2, name: 'MSI Stealth GS66', price: 1200.99, amount: 3, img: 'storage/imgs/products/laptop2.jpg' },
    ]);

    return (
        <>
            <PrimaryNavbar
                route={route}
                auth={props.auth}
                img={'storage/imgs/welcome/online-shop.png'}
                title={'Ecommerce'}
                telephone={'(0216) 335 00 55'}
            />

            <Head title="About" />

            <SecondaryNavbar />

            <div className="container mx-auto py-4 px-2 lg:px-12 xl:px-24 2xl:px-48">

                <PrimaryCarousel slides={slides} />

                <div className="drop-shadow-xl mt-4 invert border-1 rounded p-4 text-gray-400">
                    <p className="m-4 text-justify">
                        Welcome to our e-commerce website! We are a company dedicated to providing our customers with the highest quality products at the most competitive prices. Our wide selection of items ranges from everyday essentials to unique and hard-to-find items.
                    </p>

                    <p className="m-4 text-justify">
                        We pride ourselves on our exceptional customer service and our commitment to making your shopping experience as seamless and enjoyable as possible. Our team of experienced professionals is always available to assist you with any questions or concerns you may have.
                    </p>

                    <p className="m-4 text-justify">
                        We understand the importance of security when it comes to online shopping, which is why we use the latest encryption technology to protect your personal and financial information. We also offer a variety of convenient and secure payment options, including credit and debit cards, PayPal, and more.
                    </p>

                    <p className="m-4 text-justify">
                        In addition to our online store, we also have a physical location where you can shop in person and get to know our friendly staff. We invite you to visit us at our store and see our wide selection of products.
                    </p>

                    <p className="m-4 text-justify">
                        Thank you for considering our e-commerce website for your shopping needs. We look forward to serving you!
                    </p>
                </div>

            </div>

            <PrimaryFooter />
        </>
    );
}
