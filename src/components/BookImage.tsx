"use client";

import React, { useState } from "react";

interface BookImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function BookImage({ src, alt, className }: BookImageProps) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Skeleton - Only shows when loading is true */}
      {loading && (
        <div className="w-[120px] h-full mx-auto rounded bg-[#e0e0e0] animate-pulse" />
      )}
      
      {/* Actual Image - Hidden until loaded */}
      <img
        className={`${className} ${loading ? "hidden" : "block"}`}
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)} // Hides skeleton when done
        loading="lazy" // Native lazy loading
      />
    </>
  );
}