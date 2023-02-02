import React from "react";
import TextInput from '../TextInput'
import InputLabel from '../InputLabel'

export function PaymentDetails({}) {
  return <div className="my-6 bg-slate-200 w-100 mx-auto rounded-lg p-6  drop-shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col-span-2 text-center">
                                <h1 className="text-2xl mb-4">Payment Details</h1>
                            </div>
                            <div className="col-span-2">
                                <InputLabel className="">Name on Card</InputLabel>
                                <TextInput className="w-full" />
                            </div>

                            <div className="col-span-2">
                                <InputLabel className="">Card Number</InputLabel>
                                <TextInput className="w-full" />
                            </div>
                            <div className="col-span-1">
                                <InputLabel className="">Expiration</InputLabel>
                                <TextInput className="w-full" />
                            </div>
                            <div className="col-span-1">
                                <InputLabel className="">CVV</InputLabel>
                                <TextInput className="w-full" />
                            </div>
                        </div>
                    </div>;
}
  