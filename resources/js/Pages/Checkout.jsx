import { CheckoutCart } from '../Components/Checkout/CheckoutCart';
import { PaymentDetails } from '../Components/Checkout/PaymentDetails';
import { BillingAddress } from '../Components/Checkout/BillingAddress';
import { useEffect, useState } from 'react';
import { Head } from '@inertiajs/inertia-react';

import { CartContext } from '../Components/Context/CartContext';
import { ItemContext } from '../Components/Context/ItemContext';
import { ProductContext } from '../Components/Context/ProductContext';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Checkout(props) {

    const languages = [
        { id: 'Afrikaans', name: 'Afrikaans' },
        { id: 'Albanian', name: 'Albanian' },
        { id: 'Arabic', name: 'Arabic' },
        { id: 'Armenian', name: 'Armenian' },
        { id: 'Basque', name: 'Basque' },
        { id: 'Bengali', name: 'Bengali' },
        { id: 'Bulgarian', name: 'Bulgarian' },
        { id: 'Catalan', name: 'Catalan' },
        { id: 'Cambodian', name: 'Cambodian' },
        { id: 'Chinese', name: 'Chinese' },
        { id: 'Croatian', name: 'Croatian' },
        { id: 'Czech', name: 'Czech' },
        { id: 'Danish', name: 'Danish' },
        { id: 'Dutch', name: 'Dutch' },
        { id: 'English', name: 'English' },
        { id: 'Estonian', name: 'Estonian' },
        { id: 'Fiji', name: 'Fiji' },
        { id: 'Finnish', name: 'Finnish' },
        { id: 'French', name: 'French' },
        { id: 'Georgian', name: 'Georgian' },
        { id: 'German', name: 'German' },
        { id: 'Greek', name: 'Greek' },
        { id: 'Gujarati', name: 'Gujarati' },
        { id: 'Hebrew', name: 'Hebrew' },
        { id: 'Hindi', name: 'Hindi' },
        { id: 'Hungarian', name: 'Hungarian' },
        { id: 'Icelandic', name: 'Icelandic' },
        { id: 'Indonesian', name: 'Indonesian' },
        { id: 'Irish', name: 'Irish' },
        { id: 'Italian', name: 'Italian' },
        { id: 'Japanese', name: 'Japanese' },
        { id: 'Korean', name: 'Korean' },
        { id: 'Latin', name: 'Latin' },
        { id: 'Latvian', name: 'Latvian' },
        { id: 'Lithuanian', name: 'Lithuanian' },
        { id: 'Macedonian', name: 'Macedonian' },
        { id: 'Nepali', name: 'Nepali' },
        { id: 'Norwegian', name: 'Norwegian' },
        { id: 'Polish', name: 'Polish' },
        { id: 'Portuguese', name: 'Portuguese' },
        { id: 'Punjabi', name: 'Punjabi' },
        { id: 'Quechua', name: 'Quechua' },
        { id: 'Romanian', name: 'Romanian' },
        { id: 'Russian', name: 'Russian' },
        { id: 'Serbian', name: 'Serbian' },
        { id: 'Slovak', name: 'Slovak' },
        { id: 'Slovenian', name: 'Slovenian' },
        { id: 'Spanish', name: 'Spanish' },
        { id: 'Swahili', name: 'Swahili' },
        { id: 'Swedish', name: 'Swedish' },
        { id: 'Tamil', name: 'Tamil' },
        { id: 'Tatar', name: 'Tatar' },
        { id: 'Telugu', name: 'Telugu' },
        { id: 'Thai', name: 'Thai' },
        { id: 'Tibetan', name: 'Tibetan' },
        { id: 'Tonga', name: 'Tonga' },
        { id: 'Turkish', name: 'Turkish' },
        { id: 'Ukrainian', name: 'Ukrainian' },
        { id: 'Urdu', name: 'Urdu' },
        { id: 'Uzbek', name: 'Uzbek' },
        { id: 'Vietnamese', name: 'Vietnamese' },
        { id: 'Welsh', name: 'Welsh' },
        { id: 'Xhosa', name: 'Xhosa' },
    ];

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
            <Head title="Checkout" />

            <ProductContext.Provider value={[products]}>
                <ItemContext.Provider value={[items, setItems]}>
                    <CartContext.Provider value={[cart, setCart]}>
                        <div className="py-6">
                            <div className="max-w-7xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                                    <div className="col-span-4">
                                        <BillingAddress />
                                        <PaymentDetails />
                                    </div>
                                    <div className="col-span-2">
                                        <CheckoutCart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CartContext.Provider>
                </ItemContext.Provider>
            </ProductContext.Provider>
        </AuthenticatedLayout>
    );
}
