
import React, { useState, useEffect, useContext } from "react";
import { ShowProduct } from './ShowProduct';
import { PrimaryOrderButton } from './PrimaryOrderButton';
import { PrimarySearchInput } from './PrimarySearchInput';
import { CartContext } from '../Context/CartContext';
import { ProductContext } from '../Context/ProductContext';
import { ItemContext } from '../Context/ItemContext';

export function ShowProducts({ }) {

    const [cart, setCart] = useContext(CartContext);
    const [items, setItems] = useContext(ItemContext);
    const [products, setProducts] = useContext(ProductContext);

    const [search, setSearch] = useState('');

    function handleAddProductToCart(product) {
        let objFound = items.find(object => object.product_id === product.id);
        
    
        if (objFound === undefined) {
            let obj = {
                id: items.length + 1,
                cart_id: cart.id,
                product_id: product.id,
                amount: 1
            }
            
            let arr = [...items, obj]
            setItems(arr);
        }
        else
        {


            // There is something wrong without the object is being removed
            // Maybe you should just access it by id change it and then push it to the setItems

            let arr = [...items];
            let arrFound = arr.find(object => object.id === objFound.id);
            arrFound.amount++;
            setItems(arr);
        }
    }

    const handleOrderDesc = () => {
        let arr = products;
        let sortedArray = Object.entries(arr)
        sortedArray[0][1].sort(function (a, b) {
            let nameA = a.title.toUpperCase(); // ignore upper and lowercase
            let nameB = b.title.toUpperCase(); // ignore upper and lowercase
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
        })
        let sortedObject = Object.fromEntries(sortedArray)
        setProducts(sortedObject)
    }

    const handleOrderAsc = () => {
        let arr = products;
        let sortedArray = Object.entries(arr)
        sortedArray[0][1].sort(function (a, b) {
            let nameA = a.title.toUpperCase(); // ignore upper and lowercase
            let nameB = b.title.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        })
        let sortedObject = Object.fromEntries(sortedArray)
        setProducts(sortedObject)
    }

    return <>
        <div className="flex gap-4 py-4 mr-6 mt-4">
            <p className="basis-7/12 text-4xl antialiased font-sans tracking-wide ml-12 mt-4 font-bold sm:block hidden xl:block">Products</p>
            <PrimarySearchInput className="w-full drop-shadow-lg ml-6" setSearch={setSearch} />
            <PrimaryOrderButton className="w-full drop-shadow-lg" handleOrderDesc={handleOrderDesc} handleOrderAsc={handleOrderAsc} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7 p-6 ">
            {products && products.filter(item => {
                return Object.keys(item).some(key => item.name.toLowerCase().includes(search.toLowerCase()))
            })
                .map((item, index) => (
                    <ShowProduct key={index} item={item} handleAddToCart={handleAddProductToCart} />
                ))}
        </div>
    </>;
}
