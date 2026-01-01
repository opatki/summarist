"use client"

import React, { useState, useEffect } from "react";
import type { Book } from "../types";
import BookCard from "./BookCard";

export default function RecommendedBook({ type }: { type: string }) {
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
        <div className="flex overflow-hidden gap-4 mb-6 pb-4 flex-wrap justify-center">
            {loading ? (
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
                books.slice(0, 5).map((book: Book) => (
                    <BookCard key={book.id} book={book} />
                ))
            )}
        </div>
    )
}