"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {

    const { user, gitHubSignIn } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
            window.location.href = "./week-9/shopping-list";
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main>
            <header>
                <h1 className="text-3xl font-bold m-5">Shopping List</h1>
            </header>
            { user ? null : (
                <section>
                    <button
                    onClick={handleSignIn}
                    className="text-sm bg-black text-white rounded border-1 border-white px-2 py-1 ml-5" 
                    type="button">Sign In with Github</button>
                </section>
            ) }
        </main>
    );
}