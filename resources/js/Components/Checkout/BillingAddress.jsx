import React from "react";
import TextInput from '../TextInput'
import InputLabel from '../InputLabel'

export function BillingAddress({ handleBillAddress }) {

    return <div className="bg-slate-200 w-100  mx-auto rounded-lg p-6  drop-shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2 text-center">
                <h1 className="text-2xl mb-4">Billing Address</h1>
            </div>
            <div className="col-span-1">
                <InputLabel className="">Forename</InputLabel>
                <TextInput className="w-full" />
            </div>
            <div className="col-span-1">
                <InputLabel className="">Surname</InputLabel>
                <TextInput className="w-full" />
            </div>
            <div className="col-span-2">
                <InputLabel className="">Email</InputLabel>
                <TextInput className="w-full" />
            </div>
            <div className="col-span-2">
                <InputLabel className="">Address</InputLabel>
                <TextInput className="w-full" />
            </div>
            <div className="col-span-2">
                <InputLabel className="">Address Two (Optional)</InputLabel>
                <TextInput className="w-full" />
            </div>
            <div className="col-span-1">
                <InputLabel className="">Country</InputLabel>
                <TextInput className="w-full" />
            </div>
            <div className="col-span-1">
                <InputLabel className="">Zip Code</InputLabel>
                <TextInput className="w-full" />
            </div>
        </div>
    </div>;
}
