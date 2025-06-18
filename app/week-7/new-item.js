"use client";
import { useState, React } from 'react';


export default function NewItemPage({onAddItem}) {
    
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleNameChange = (e) => setName(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value.toLowerCase());
    const handleSubmit = (event) => {
        event.preventDefault();
        let itemObj = {
            id: crypto.randomUUID(),
            name: name,
            quantity: quantity,
            category: category,
        }
        onAddItem(itemObj);

        setName("");
        setCategory("Produce");
        setQuantity(1);
    }

    const handleIncrement = () => {
        let currentQuantity = quantity.valueOf();
        if (currentQuantity < 20) {
            setQuantity(currentQuantity + 1);
        }
    }
    const handleDecrement = () => {
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
        <form className="p-2 bg-slate-900 my-5 max-w-sm w-full" onSubmit={handleSubmit}>
            <div className="mb-2">
                <input 
                    className="w-full border-2 border-gray-300 p-3 rounded-lg bg-white text-black" 
                    placeholder="Item name" 
                    value={name} 
                    onChange={handleNameChange} 
                    required />
            </div>
            <div className="flex flex-row justify-between">
                <div 
                    className="flex flex-row justify-between p-2 my-1 rounded-lg border-gray-300 border-2 bg-white w-40" 
                    value={quantity}>
                        <p className={"mx-6 my-1 text-black"}>{quantity}</p>
                        <button className={buttonDecStyle} type="button" onClick={handleDecrement}>-</button>
                        <button className={buttonIncStyle} type="button" onClick={handleIncrement}>+</button>
                </div>
                <select 
                    className="p-2 my-1 rounded-lg border-gray-300 border-2 bg-white w-40 text-black" 
                    value={category} 
                    onChange={handleCategoryChange}>
                        <option disabled>Category</option>
                        {categoriesOption.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                </select>
            </div>
            <div>
                <button className="w-full py-2 mt-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                    Add to Inventory    
                </button>
            </div>
        </form>            
    );
}

const categoriesOption = ["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"];