import React from 'react';


export default function Item({ itemObj, onSelect }) {

    let {name, quantity, category} = itemObj;
    // Add onClick handler to the outer div
    return(
        <div
            className="bg-slate-900 p-2 w-100 m-4"
            onClick={() => onSelect && onSelect(itemObj)}
        >
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm">Buy {quantity} in {category}</p>
        </div>
    );
}