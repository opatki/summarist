"use client"

import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import LoginPrompt from '@/src/components/LoginPrompt';

export default function LibraryPage() {
    const user = useAppSelector((state) => state.user);
    console.log(user)

    return (
        <>
            {!user.uid ? <LoginPrompt /> : (
            <h1>This is the library page</h1> )}
        </>
    )
}
