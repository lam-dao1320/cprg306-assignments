"use client";

import { useState } from "react";
import Item from "./item";
import itemData from "./items.json"


export default function ItemList() {
    
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
        itemData.sort( (a,b) => {
            let nameA = a[sortBy].toUpperCase();
            let nameB = b[sortBy].toUpperCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
    
    
    let itemGrouped = [
        {
            id: 1,
            name: "Bakery",
            items: itemData.filter((item) => item.category == "bakery"),
        },
        {
            id: 2,
            name: "Canned Goods",
            items: itemData.filter((item) => item.category == "canned goods"),
        },
        {
            id: 3,
            name: "Dairy",
            items: itemData.filter((item) => item.category == "dairy"),
        },
        {
            id: 4,
            name: "Dry Goods",
            items: itemData.filter((item) => item.category == "dry goods"),
        },
        {
            id: 5,
            name: "Household",
            items: itemData.filter((item) => item.category == "bakery"),
        },
        {
            id: 6,
            name: "Meat",
            items: itemData.filter((item) => item.category == "meat"),
        },
        {
            id: 7,
            name: "Produce",
            items: itemData.filter((item) => item.category == "produce"),
        },
    ];

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
                    itemData.map((item) => <Item key={item.id} itemObj={item} />)}
                {(sortBy == "group") &&
                    itemGrouped.map((category) => 
                        <div key={category.id}>
                            <h3 className="text-2xl">{category.name}</h3>
                            {category.items.map((item) => <Item key={item.id} itemObj={item} />)}
                        </div>
                )}
            </div>
        </section>
    )
}