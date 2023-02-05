import React, { useState, useEffect, useContext } from "react";
import Modal from '../Modal'
import { useForm } from '@inertiajs/inertia-react';
import { CartContext } from '../Context/CartContext';
import { ItemContext } from '../Context/ItemContext';
import { ProductContext } from '../Context/ProductContext';
import { Inertia } from '@inertiajs/inertia'

export function PrimaryShoppingCart({ }) {

    const [cart, setCart] = useContext(CartContext);
    const [products, setProducts] = useContext(ProductContext);
    const [items, setItems] = useContext(ItemContext);
    const [display, setDisplay] = useState();
    const [total, setTotal] = useState();
    const [modalState, setModalState] = useState(false);

    useEffect(() => {
        let arr = [];
        let calcTotal = 0;
        let find;

        console.log(products)
        console.log(items)

        items.map(item => {
            find = products.find(object => object.id === item.product_id);
            
            console.log('find')
            console.log(find)
            console.log('item')
            console.log(items)
            

            let price = find.price * item.amount;
            let roundedPrice = price.toFixed(2);
            let build = {
                id: find.id,
                type: find.type,
                name: find.name,
                price: roundedPrice,
                amount: item.amount
            }
            calcTotal = calcTotal + (find.price * item.amount);

            arr.push(build);
        });
        let rounded = calcTotal.toFixed(2);
        setTotal(rounded);
        setDisplay(arr);
    }, [items]);

    const { data, setData, post, processing, errors, reset } = useForm({
        cart_id: '',
        product_id: '',
    });

    function handleRemove(product_id) {
        let find = items.find(object => object.product_id === product_id);
        console.log(find);

        data.cart_id = find.cart_id;
        data.product_id = find.product_id;

        setData(data);

        post(route('item.delete', data), { preserveScroll: true, only: ['items'] });

        let index = items.findIndex((obj) => obj.id === find.id)
        let arr = [...items];
        arr.splice(index, 1);
        setItems(arr);
    }

    const handleCheckout = (e) => {
        e.preventDefault();
        items.length < 1 ? setModalState(true) : '';
        Inertia.visit('/checkout', {

        });
    }

    return <>
        <aside className="h-full" aria-label="Sidebar">
            <div className="p-3 bg-inherit sticky top-0">
                <ul className="space-y-2">
                    <li>
                        <div className="flex">
                            <div className="basis-1/2">
                                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                    <span className="ml-3">Shopping  Cart</span>
                                </a>
                            </div>
                        </div>
                    </li>

                    <hr />

                    {_.isEmpty(display) ? (
                        <p className="text-white text-center">There is nothing in your cart.</p>
                    ) : (
                        display.map((product) => {
                            return (

                                <li key={product.id}>
                                    <div className="text-white text-sm">
                                        <div className="flex">
                                            <div className="basis-6/12 p-3 rounded-l font-bold bg-slate-500 hover:bg-slate-400">{product.name}</div>
                                            <div className="basis-2/12 bg-slate-700 text-center p-3 font-bold">{product.amount}</div>
                                            <div className="basis-3/12 bg-slate-600 text-center p-3 font-bold float-right">${product.price}</div>
                                            <div className="basis-1/12 bg-red-600 hover:bg-red-700 rounded-r text-center  p-3 font-bold float-right cursor-pointer" onClick={() => handleRemove(product.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg mx-auto align-middle" viewBox="0 0 16 16">
                                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    )}
                    <hr />
                    <li>
                        <form onSubmit={handleCheckout}>
                            <div className="flex">
                                <button type="submit" className="hover:animate-pulse basis-2/3 bg-emerald-500 hover:bg-emerald-400 rounded-l p-3 font-bold text-white cursor-pointer">Checkout</button>
                                <div className="basis-1/3 bg-slate-100 rounded-r text-center p-3 font-bold text-gray-700">
                                    ${total}
                                </div>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
        </aside>

        <Modal show={modalState}>
            <div className="h-64 bg-gray-700">
                <div id="popup-modal" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 p-4 overflow-y-auto md:inset-0 h-modal md:h-full">
                    <div className="dark:bg-gray-700">
                        <div onClick={() => { setModalState(false) }} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </div>
                        <div className="text-center mt-12">
                            <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">Your cart is currently empty.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    </>;
}
