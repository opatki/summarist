"use client"

import type { Book } from '@/src/types';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import LoginPrompt from '@/src/components/LoginPrompt';
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from '@/src/firebase';
import RecommendedBook from '@/src/components/RecommendedBook';
import SavedBook from '@/src/components/SavedBook';

export default function LibraryPage() {
    const user = useAppSelector((state) => state.user);
    const [books, setBooks] = React.useState<Book[]>([]);

    React.useEffect(() => {
        const fetchBooks = async () => {
        if (!user?.uid) {
            return;
        }

        try {
            const booksRef = collection(db, 'savedBooks');
            const q = query(booksRef, where('userId', '==', user.uid));
            const querySnapshot = await getDocs(q);
            const itemsList = querySnapshot.docs.map((doc) => {
                return doc.data() as Book;
            });

            setBooks(itemsList);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
        };

        fetchBooks();
    }, [user?.uid]);

    return (
        <>
            {!user.uid ? <LoginPrompt page="see your library."/> : (
            <div className="w-full max-w-fit container mx-auto px-4 font-sans">
            <div className="w-full py-5 mx-auto lg:min-w-[1000px] sm:min-w-[0px] md:min-w-[500px]">
                <div className="mb-3 text-[22px] font-bold text-[#032b41]">
                    Saved Books
                </div>
                <div className="mb-3 font-light text-[#394547]">
                    {books.length} items
                </div>
                
                {books.length < 1 ? <div className="mx-auto mb-[56px] flex max-w-fit flex-col items-center gap-2 rounded-[12px] bg-[#f1f6f4] p-8 text-center">
                    <div className="text-lg font-bold text-[#032b41]">
                        Save your favorite books!
                    </div>
                    <div className="text-[#394547]">
                        When you save a book, it will appear here.
                    </div>
                </div> : <SavedBook books={books} />}

                {/* Finished Section */}
                <div className="mb-4 text-[22px] font-bold text-[#032b41]">
                    Finished
                </div>
                <div className="mb-4 font-light text-[#394547]">
                    0 items
                </div>
                
                <div className="mx-auto mb-[56px] flex max-w-fit flex-col items-center gap-2 rounded-[12px] bg-[#f1f6f4] p-8 text-center">
                    <div className="text-lg font-bold text-[#032b41]">
                    Done and dusted!
                    </div>
                    <div className="text-[#394547]">
                    When you finish a book, you can find it here later.
                    </div>
                </div>
                </div> 
            </div>)}
        </>
    )
}
