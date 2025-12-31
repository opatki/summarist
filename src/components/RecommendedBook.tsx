"use client"

import { useState, useEffect } from "react";
import Link from "next/link"
import type { Book } from "../types";

export default function RecommendedBook({ type }: {type: string}) {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBooks?status=${type}`);
                const data = await res.json();
                setBooks(data);
            } catch (error) {
                console.error("Error fetching recommended books:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [type]);

    return (
        <div className="flex overflow-hidden gap-4 mb-6 pb-4">
            {loading ? (
                // Show 5 Skeletons while loading
                Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="min-w-[200px] w-[200px] snap-start shrink-0">
                        <div className="w-full h-[240px] mb-2 bg-[#e4e4e4] rounded animate-pulse" />
                        <div className="w-full h-[20px] mb-2 bg-[#e4e4e4] rounded animate-pulse" />
                        <div className="w-[90%] h-[16px] mb-2 bg-[#e4e4e4] rounded animate-pulse" />
                        <div className="w-[80%] h-[32px] mb-2 bg-[#e4e4e4] rounded animate-pulse" />
                        <div className="w-[90%] h-[16px] bg-[#e4e4e4] rounded animate-pulse" />
                    </div>
                ))
            ) : (
                // Show Actual Books
                books.slice(0, 5).map((book: Book) => (
                    <Link
                        key={book.id}
                        className="relative snap-start shrink-0 w-full max-w-[200px] p-3 pt-8 rounded hover:bg-gray-100 transition-colors"
                        href={`/book/${book.id}`}
                    >
                        {book.subscriptionRequired && (
                            <div className="absolute top-0 right-0 w-fit h-[18px] px-2 flex items-center bg-[#032b41] text-white text-[10px] rounded-full z-40">
                                Premium
                            </div>
                        )}
                        
                        <figure className="relative w-[172px] h-[172px] mb-2 mx-auto">
                            <img
                                className="w-full h-full block object-cover"
                                src={book.imageLink}
                                alt="book"
                            />
                        </figure>

                        <div className="text-base font-bold text-[#032b41] mb-2 leading-tight">
                            {book.title}
                        </div>
                        <div className="text-sm text-[#6b757b] font-light mb-2">
                            {book.author}
                        </div>
                        <div className="text-sm text-[#394547] mb-2 line-clamp-2">
                            {book.subTitle}
                        </div>
                        <div className="flex gap-2">
                            <div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
                                <div className="flex w-4 h-4">
                                    <svg className="w-full h-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                                        <path d="M13 7h-2v6h6v-2h-4z"></path>
                                    </svg>
                                </div>
                                <div>03:24</div>
                            </div>

                            <div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
                                <div className="flex w-4 h-4">
                                    <svg className="w-full h-full" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                                    </svg>
                                </div>
                                <div>{book.averageRating}</div>
                            </div>
                        </div>
                    </Link>
                ))
            )}
        </div>
    )
}