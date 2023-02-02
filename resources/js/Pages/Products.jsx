import { Head } from '@inertiajs/inertia-react';
import { PrimaryShoppingCart } from '../Components/Sidebars/PrimaryShoppingCart'
import { ShowProducts } from '../Components/Products/ShowProducts';
import { useState, useEffect } from 'react';

import { CartContext } from '../Components/Context/CartContext';
import { ItemContext } from '../Components/Context/ItemContext';
import { ProductContext } from '../Components/Context/ProductContext';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Products(props) {

    const [cart, setCart] = useState([]);
    const [items, setItems] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/cart')
            .then(response => response.json())
            .then(data => setCart(data))
            .catch(error => console.log(error));

        fetch('http://127.0.0.1:8000/item')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.log(error));

        fetch('http://127.0.0.1:8000/product')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Products" />
            <ProductContext.Provider value={[products]}>
                <ItemContext.Provider value={[items, setItems]}>
                    <CartContext.Provider value={[cart, setCart]}>
                        <div className="flex flex-row h-full">
                            <div className="w-full">
                                <ShowProducts />
                            </div>
                            <div className="basis-2/6 bg-gray-900 hidden xl:block">
                                <PrimaryShoppingCart />
                            </div>
                        </div>
                    </CartContext.Provider>
                </ItemContext.Provider>
            </ProductContext.Provider>
        </AuthenticatedLayout>
    );
}
