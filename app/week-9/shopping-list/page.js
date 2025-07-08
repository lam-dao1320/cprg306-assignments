"use client";

import Link from "next/link";
import ItemList from "./item-list";
import NewItemPage from "./new-item";
import itemsData from "./items.json";
import React, { useState } from "react";
import MealIdea from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";


export default function Page() {

    const { user, firebaseSignOut } = useUserAuth();

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

    async function handleSignOut() {
        try {
            await firebaseSignOut();   
            window.location.href = "../week-9"; 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main>
            { user ? (
                <div className="flex">
                    <div className="flex-4 mx-5">
                        <h1 className="text-3xl font-bold mt-5">Shopping List</h1>
                    </div>
                    <div className="flex-1 my-5">
                        <img src={user.photoURL} className="w-20 h-20" />
                    </div>
                    <div className="flex-2 mt-5">
                        <p>Sign in as {user.displayName} {"\n"} ({user.email})</p>
                        <button
                        onClick={handleSignOut}
                        className="text-sm bg-white text-black border-1 border-black rounded px-2 py-1" 
                        type="button">Sign Out</button>
                    </div>
                    
                </div>
            ) : (
                <h1 className="text-3xl font-bold m-5">Shopping List</h1>
            ) }
            
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