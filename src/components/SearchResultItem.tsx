"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSidebar } from '../SidebarContext';
import { formatTime } from '../getTime';
import type { Book } from '../types';

export default function SearchResultItem({ book, onClick }: { book: Book; onClick: () => void }) {
  const [duration, setDuration] = useState(0);

  return (
    <Link
      href={`/book/${book.id}`}
      onClick={onClick}
      className="flex h-[120px] items-center gap-6 border-b border-[#e1e7ea] p-4 hover:bg-[#f1f6f4] last:border-b-0"
    >
      <figure className="h-20 w-20 min-w-[80px]">
        <img
          className="h-full w-full object-cover"
          src={book.imageLink}
          alt={book.title}
        />
      </figure>
      <div>
        <div className="mb-2 text-base font-medium text-[#032b41]">
          {book.title}
        </div>
        <div className="mb-2 text-sm font-light text-[#6b757b]">
          {book.author}
        </div>
        <div className="flex items-center gap-1 text-sm font-light text-[#6b757b]">
          <div className="flex h-4 w-4">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
              <path d="M13 7h-2v6h6v-2h-4z"></path>
            </svg>
          </div>
          <audio
            src={book.audioLink}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          />
          <div className="text-sm">{formatTime(duration)}</div>
        </div>
      </div>
    </Link>
  );
};
