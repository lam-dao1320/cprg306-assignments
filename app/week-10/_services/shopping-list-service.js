import { db } from "../_utils/firebase";
import { collection, addDoc, getDoc, getDocs, deleteDoc, doc, query } from "firebase/firestore";

export async function getItems(userId, itemListStateSetter) {
    try {
        const allItemsRef = collection(db, "users", userId, "items");
        const allItemsQuery = query(allItemsRef);
        const querySnapshot = await getDocs(allItemsQuery);
        let itemList = [];
        querySnapshot.forEach((doc) => {
            let thisItem = {
                id: doc.id,
                ...doc.data()
            };
            itemList.push(thisItem);
        });
        itemListStateSetter(itemList);
    } catch (error) {
        console.log("Error getting items: ", error);
    }
}

export async function addItem(userId, itemObj) {
    try {
        const newItemRef = collection(db, "users", userId, "items");
        const newItemPromise = await addDoc(newItemRef, itemObj);
        console.log("New item added: ", newItemPromise.id);
    } catch (error) {
        console.log("Error adding item: ", error);
    }
}