"use client";

import React from 'react'

export default function Search() {
    const [searchQuery, setSearchQuery] = React.useState("")

    return (
        <div className="h-20 w-full bg-white border-b border-[#e1e7ea] z-[1]"> 
            <div className="relative flex h-full max-w-[1270px] items-center justify-end mx-auto px-8">
                <div className="flex w-full max-w-[340px] items-center gap-6">
                <div className="flex w-full items-center">
                    <div className="relative flex w-full items-center">
                    <input 
                        className="h-10 w-full rounded-lg border-2 border-[#e1e7ea] bg-[#f1f6f4] px-4 text-[#042330] outline-none placeholder:text-gray-400" 
                        placeholder="Search for books" 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    
                    <div className="absolute right-2 flex h-full items-center justify-end border-l-2 border-[#e1e7ea] pl-2">
                        <svg className="h-6 w-6 text-[#03314b]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                        </svg>
                    </div>
                    </div>
                </div>

                <div className="flex cursor-pointer items-center justify-center text-[#03314b] md:hidden">
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor"></path>
                    </svg>
                </div>

                </div>
            </div>
        </div>
    )
}