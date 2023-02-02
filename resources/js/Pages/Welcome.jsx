import { ShowProducts } from '../Components/Products/ShowProducts';
import { PrimaryNavbar } from '../Components/Navbars/PrimaryNavbar';
import { PrimaryCarousel } from '../Components/Carousel/PrimaryCarousel';
import { PrimaryFooter } from '../Components/Footers/PrimaryFooter';
import { SecondaryNavbar } from '../Components/Navbars/SecondaryNavbar';
import { ProductContext } from '../Components/Context/ProductContext';
import { CartContext } from '../Components/Context/CartContext';
import { Head } from '@inertiajs/inertia-react';

import { useState } from 'react';

export default function Welcome(props) {


    const primaryFooterLinks = [
        { name: 'Facebook', url: '/facebook' },
        { name: 'Instagram', url: '/instagram' },
        { name: 'Twitter', url: '/twitter' },
        { name: 'Github', url: '/github' },
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

            <Head title="Products" />

            <SecondaryNavbar />

            <div className="container mx-auto py-4 px-2 lg:px-12 xl:px-24 2xl:px-48">

                <CartContext.Provider value={[cart, setCart]}>
         
                        <ShowProducts />
              
                </CartContext.Provider>
            </div>

            <PrimaryFooter />
        </>
    );
}
