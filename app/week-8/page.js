"use client";

import ItemList from "./item-list";
import NewItemPage from "./new-item";
import itemsData from "./items.json";
import React, { useState } from "react";
import MealIdea from "./meal-ideas";


export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState();

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (item) => {
        let itemName = item.name.split(",")[0];
        itemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        itemName = itemName.trim();
        itemName = itemName.replace(' ', '_');
        itemName = itemName.replace(' ', '');
        setSelectedItemName(itemName);
    }

    return (
        <main>
            <h1 className="text-3xl font-bold m-2">Shopping List</h1>
            <div className="flex">
                <div className="flex-1 max-w-sm mx-5">
                    <NewItemPage onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex-1 max-w-sm ml-10">
                    <MealIdea ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}