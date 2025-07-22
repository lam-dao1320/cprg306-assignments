"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {

    const { user, gitHubSignIn, googleSignIn, firebaseSignOut } = useUserAuth();

    async function handleGithubSignIn() {
        try {
            await gitHubSignIn();
            window.location.href = "./week-9/shopping-list";
        } catch (error) {
            console.log(error);
        }
    }

    async function handleGoogleSignIn() {
        try {
            await googleSignIn();
            window.location.href = "./week-9/shopping-list";
        } catch (error) {
            console.log(error);
        }
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
            <header>
                <h1 className="text-3xl font-bold m-5">Shopping List</h1>
            </header>
            { user ? (
                <div className="ml-5">
                    <p>Sign in as {user.displayName} {"\n"} ({user.email})</p>
                    <img src={user.photoURL} className="w-20 h-20 my-3" />
                    <p>
                        <Link href="./week-10/shopping-list" className="hover:text-green-400 hover:underline">
                            Go to Shopping List
                        </Link>
                    </p>
                    <button
                    onClick={handleSignOut}
                    className="text-sm bg-white text-black border-1 border-black rounded px-2 py-1 my-4" 
                    type="button">Sign Out</button>
                </div>
                
            ) : (
                <section>
                    <button
                    onClick={handleGithubSignIn}
                    className="text-sm bg-black text-white rounded border-1 border-white px-2 py-1 ml-5" 
                    type="button">Sign In with Github</button>
                    <button
                    onClick={handleGoogleSignIn}
                    className="text-sm bg-black text-white rounded border-1 border-white px-2 py-1 ml-5" 
                    type="button">Sign In with Google</button>
                </section>
            ) }
        </main>
    );
}