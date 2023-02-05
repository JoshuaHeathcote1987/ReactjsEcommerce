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
        getCart();
        getItem();
        getProducts();
    }, []);

    async function getCart() {
        try {
            const response = await axios.get('/cart');
            setCart(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function getItem() {
        try {
            const response = await axios.get('/item');
            setItems(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function getProducts() {
        try {
            const response = await axios.get('/product');
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Products" />
            <CartContext.Provider value={[cart, setCart]}>
                <ItemContext.Provider value={[items, setItems]}>
                    <ProductContext.Provider value={[products]}>
                        <div className="flex flex-row h-full">
                            <div className="w-full">
                                <ShowProducts />
                            </div>
                            <div className="basis-2/6 bg-gray-900 hidden xl:block">
                                <PrimaryShoppingCart />
                            </div>
                        </div>
                    </ProductContext.Provider>
                </ItemContext.Provider>
            </CartContext.Provider>
        </AuthenticatedLayout>
    );
}
