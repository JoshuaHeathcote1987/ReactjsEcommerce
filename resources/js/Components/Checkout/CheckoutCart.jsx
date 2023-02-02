import React from "react";
export function CheckoutCart({
  cart
}) {
  return <div className="my-6 bg-slate-200 w-100 mx-auto rounded-lg p-6  drop-shadow-lg">
                        <div className="text-center">
                            <h1 className="text-2xl mb-4">Items</h1>
                        </div>
                        <ul>
                            {cart.map(item => 
                                <li key={item.id} className="my-3 w-full flex flex-row bg-slate-100 text-center w-auto p-3 rounded drop-shadow-lg">
                                    <div className="flex-1">
                                        {item.title}
                                    </div>
                                    <div className="flex-1">
                                        {item.amount}
                                    </div>
                                    <div className="flex-1">
                                        ${item.price}
                                    </div>
                                </li>
                            )}
                            <li>
                                <button type="submit" className="w-full bg-slate-600 text-white hover:bg-slate-400 hover:text-black rounded p-3">Pay</button>
                            </li>
                        </ul>
                    </div>;
}
  