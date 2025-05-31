"use client";
import { useState, React } from 'react';

export default function NewItemPage() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        let currentQuantity = quantity.valueOf();
        if (currentQuantity < 20) {
            setQuantity(currentQuantity + 1);
        }
    }

    const decrement = () => {
        let currentQuantity = quantity.valueOf();
        if (currentQuantity > 1) {
            setQuantity(currentQuantity - 1);
        }
    }

    let buttonIncStyle = "block bg-blue-500 hover:bg-blue-300 text-white font-bold rounded m-1 w-8 h-6";
    if (quantity >= 20) {
        buttonIncStyle = "block bg-gray-400 text-white font-bold rounded m-1 w-8 h-6";
    }

    let buttonDecStyle = "block bg-blue-500 hover:bg-blue-300 text-white font-bold rounded m-1 w-8 h-6";
    if (quantity <= 1) {
        buttonDecStyle = "block bg-gray-400 text-white rounded font-bold m-1 w-8 h-6";
    }

    return(
        <div className="flex flex-row items-center justify-center bg-white rounded w-40 h-10 m-5">
            <p className={"mr-10 text-black"}>{quantity}</p>
            <button 
                className={buttonDecStyle}
                onClick={decrement}>
            -</button>
            <button 
                className={buttonIncStyle}
                onClick={increment}>
            +</button>
        </div>
    );
}