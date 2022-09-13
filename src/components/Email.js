import React from "react";
import instagram from '../logos/instagram.svg'

const Email = () => {
    return (
        <div className="flex justify-evenly m-4">
            <button className="inline-flex w-full justify-evenly rounded-md border border-transparent bg-blue-600 px-4 py-4 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-xl">
                <img className="w-8 h-8 mx-2" src={instagram} />
                Button1
            </button>
            <button className="inline-flex w-full justify-evenly rounded-md border border-transparent bg-blue-600 px-4 py-4 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-xl">
                <img className="w-8 h-8 mx-2" src={instagram} />
                Button2
            </button>
        </div>
    )
}

export default Email;