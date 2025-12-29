"use client"

import { initFirebase } from "../firebase";
import { getAuth } from "firebase/auth"
import { useRouter } from 'next/navigation'

export default function AccountPage() {
    const app = initFirebase();
    const auth = getAuth(app);
    const router = useRouter();
    
    const username = auth.currentUser?.displayName;
    const email = auth.currentUser?.email;

    const signOut = () => {
        auth.signOut();
        router.push('/')
    }

    return (
        <>
            <h1>This is your name: {username}</h1>
            <h1>This is your email: {email}</h1>
            <button onClick={signOut}>SIgn out</button>
        </>
    )
} 