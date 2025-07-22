"use client";

import { useState } from "react";
import Item from "./item";


export default function ItemList({ items, onItemSelect }) {

    let categoriesOption = ["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"];
    
    let [sortBy, setSortBy] = useState("name");
    let buttonNameStyle = "bg-orange-500 p-1 m-2";
    let buttonCategoryStyle = "bg-orange-700 p-1 m-2";
    let buttonGroupStyle = "bg-orange-700 p-1 m-2";

    if (sortBy == "name") {
        buttonNameStyle = "bg-orange-500 p-1 m-2";
        buttonCategoryStyle = "bg-orange-700 p-1 m-2";
        buttonGroupStyle = "bg-orange-700 p-1 m-2";
    };
    if (sortBy == "category") {
        buttonNameStyle = "bg-orange-700 p-1 m-2";
        buttonCategoryStyle = "bg-orange-500 p-1 m-2";
        buttonGroupStyle = "bg-orange-700 p-1 m-2";
    };
    if (sortBy == "group") {
        buttonNameStyle = "bg-orange-700 p-1 m-2";
        buttonCategoryStyle = "bg-orange-700 p-1 m-2";
        buttonGroupStyle = "bg-orange-500 p-1 m-2";
    };

    const handleSortByName = () => setSortBy("name");
    const handleSortbyCategory = () => setSortBy("category");
    const handleSortByGroup = () => setSortBy("group");

    if (sortBy != "group")
        items.sort((a, b) => {
            let nameA = a[sortBy].toUpperCase();
            let nameB = b[sortBy].toUpperCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });

    categoriesOption = categoriesOption.sort((a, b) => {
        let nameA = a.toUpperCase();
        let nameB = b.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

    return(
        <section>
            <div>
                <label>Sort By: </label>
                <button className={buttonNameStyle} onClick={handleSortByName}>Name</button>
                <button className={buttonCategoryStyle} onClick={handleSortbyCategory}>Category</button>
                <button className={buttonGroupStyle} onClick={handleSortByGroup}>Group Category</button>
            </div>
            <div>
                {(sortBy == "name" || sortBy == "category") &&
                    items.map((item) => {
                        let itemId = item.id;
                        return <Item key={itemId} itemObj={item} onSelect={onItemSelect} />
                    })
                }
                {(sortBy == "group") &&
                categoriesOption.map((category) => {
                    let itemList = items.filter((item) => item.category === category.toLowerCase());
                    if (itemList.length === 0) return null
                    else {
                        return (
                            <div key={category}>
                                <h3 className="text-2xl">{category}</h3>
                                {itemList.map((item) => <Item key={item.id} itemObj={item} onSelect={onItemSelect} />)}
                            </div>
                        );
                    }
                    
                })}
            </div>
        </section>
    )
}