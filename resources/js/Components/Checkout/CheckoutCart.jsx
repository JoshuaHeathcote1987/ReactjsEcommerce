import React, { useState, useEffect, useContext } from "react";
import { CartContext } from '../Context/CartContext';
import { ItemContext } from '../Context/ItemContext';
import { ProductContext } from '../Context/ProductContext';

export function CheckoutCart({ }) {
    const [cart, setCart] = useContext(CartContext);
    const [products, setProducts] = useContext(ProductContext);
    const [items, setItems] = useContext(ItemContext);
    const [display, setDisplay] = useState();
    const [total, setTotal] = useState();

    useEffect(() => {
        let arr = [];
        let calcTotal = 0;
        items.map(item => {
            let find = products.find(object => object.id === item.product_id);
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

    function handleCheckout() {}

    return <div className="bg-slate-200 w-100 mx-auto rounded-lg p-6 drop-shadow-lg">
        <div className="text-center">
            <h1 className="text-2xl mb-4">Items</h1>
            <ul>
                {_.isEmpty(display) ? (
                    <p className="text-white text-center">There is nothing in your cart.</p>
                ) : (
                    display.map((product) => {
                        return (
                            <li key={product.id} className="my-1">
                                <div className="text-white text-sm">
                                    <div className="flex">
                                        <div className="basis-6/12 p-3 rounded-l text-left font-bold bg-slate-500 hover:bg-slate-400">{product.name}</div>
                                        <div className="basis-2/12 bg-slate-700 text-center p-3 font-bold">{product.amount}</div>
                                        <div className="basis-4/12 bg-slate-600 rounded-r text-center p-3 font-bold float-right">${product.price}</div>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                )}

                <li className="mt-2">
                    <form onSubmit={handleCheckout}>
                        <div className="flex">
                            <button type="submit" className="hover:animate-pulse basis-2/3 bg-emerald-500 hover:bg-emerald-600 rounded-l p-3 font-bold text-white cursor-pointer">Proceed</button>
                            <div className="basis-1/3 bg-slate-300 rounded-r text-center p-3 font-bold text-gray-700">
                                ${total}
                            </div>
                        </div>
                    </form>
                </li>
            </ul>
        </div>
    </div>;
}
