import React, { useState, useContext } from "react";
import { useForm } from '@inertiajs/inertia-react';
import Modal from '../Modal';


export function ShowProduct({ item, handleAddToCart }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        id: '',
    });

    function submit(e) {
        e.preventDefault();
        handleAddToCart(item)
        data.id = item.id;
        setShow(false);
        post(route('item.store'), {preserveScroll: true, only: ['items']});
    }

    const [show, setShow] = useState(false);

    function handleShowModal() {
        setShow(true);
    }

    function handleCloseModal() {
        setShow(false);
    }

    return <>

        <div onClick={() => (handleShowModal())} className="transition duration-300 ease-in-out hover:scale-105 cursor-pointer rounded-lg bg-gradient-to-tl from-gray-700 via-gray-900 to-black drop-shadow-lg">
            <img className="rounded-t-lg" src={item.img} alt="" style={{ width: '100%', height: '15vw', objectFit: 'cover' }} />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white hover:text-gray-100 text-center">{item.name}</h5>
            </div>
        </div>

        <Modal show={show} maxWidth={'md'}>
            <form onSubmit={submit}>
                <div className="rounded-lg overscroll-contain shadow-lg bg-slate-800">
                    <img className="w-full rounded-t-lg" src={item.img} alt="" />
                    <div className="p-4">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                        <p className="text-justify mb-3 font-normal text-gray-700 dark:text-gray-400 mb-4">{item.description}</p>
                        <div onClick={() => handleCloseModal()} className="cursor-pointer inline-flex items-center p-4 m-1 text-sm font-medium text-center text-white bg-red-700 hover:bg-red-800 rounded-lg focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:focus:ring-red-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                        <button type="submit" className="w-1/3 cursor-pointer inline-flex items-center p-4 m-1 text-sm font-medium text-center text-white bg-green-700 hover:bg-green-800 rounded-lg focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:focus:ring-green-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bag-plus-fill mx-auto" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </Modal>
    </>;
}