import { useState } from 'react';
import { ShowProducts } from '../Components/Products/ShowProducts';
import { PrimaryShoppingCart } from '../Components/Sidebars/PrimaryShoppingCart'
import { Head } from '@inertiajs/inertia-react';
import { CartContext } from '../Components/Context/CartContext';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';



export default function Dashboard(props) {

    const [cart, setCart] = useState([]);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >

            <Head title="Admin" />

            <CartContext.Provider value={[cart, setCart]}>
                <div className="flex flex-row">
                    <div className="w-full">
           
                        <ShowProducts />
                 
                    </div>
                    <div className="basis-2/6 bg-gradient-to-t from-gray-700 via-gray-900 to-black hidden xl:block">

                        <PrimaryShoppingCart />

                    </div>
                </div>
            </CartContext.Provider>

        </AuthenticatedLayout>
    );
}
