"use client"

import React, { useState } from "react";
import Link from "next/link"
import { formatTime } from "../getTime";
import type { Book } from "../types";
import BookCard from "./BookCard";

export default function SavedBook({ books }: { books: Book[] }) {
    const isLoading = !books || books.length === 0;

    return (
        <div className="flex overflow-hidden gap-4 mb-6 pb-4">
            {isLoading ? (
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
                // Actual Books
                books.slice(0, 5).map((book: Book) => (
                    <BookCard key={book.id} book={book} />
                ))
            )}
        </div>
    )
}