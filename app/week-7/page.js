"use client";

import ItemList from "./item-list";
import NewItemPage from "./new-item";
import itemsData from "./items.json";
import React, { useState } from "react";


export default function Page() {

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <main className="m-5">
            <h1 className="text-3xl font-bold m-2">Shopping List</h1>
            
            <NewItemPage onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}