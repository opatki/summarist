"use client"

import { useState, useRef, useEffect } from "react";
import AdjustedSidebar from "./AdjustedSidebar";
import Search from "./Search";
import type { Book } from "../types";

interface BookPlayerProps {
  book: Book;
}

export default function BookPlayer({ book }: BookPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fontSize, setFontSize] = useState("text-base");

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const skipTime = (amount: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += amount;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercentage = (currentTime / duration) * 100 || 0;

  return (
    <>
      <AdjustedSidebar font={fontSize} changeFont={setFontSize} />
      <Search />
      <div className="mx-auto w-full pl-50">
        <div className="py-5">
          <div className="relative w-full overflow-y-auto h-[calc(100vh-160px)]">
            <div className="whitespace-pre-line p-6 max-w-[800px] mx-auto text-base">
              <div className="text-[#032b41] font-semibold text-xl md:text-2xl border-b border-[#e1e7ea] mb-8 pb-4 mt-[-8px] leading-normal">
                {book.title}
              </div>
              <div className={`whitespace-pre-line leading-[1.4] text-[#032b41] mb-[30px] ${fontSize}`}>
                {book.summary}
              </div>
            </div>

            <div className="w-full h-[80px] bg-[#042330] px-10 md:px-4 fixed bottom-0 left-0 z-[1002]">
              <div className="mt-3 w-full mx-auto flex flex-row items-center justify-center max-w-[1200px]">
                
                <audio
                  ref={audioRef}
                  src={book.audioLink} 
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                />

                <div className="flex items-center gap-3 w-1/3">
                  <figure className="flex shrink-0">
                    <div className="h-12 w-12 min-w-[48px]">
                      <img
                        className="block h-full w-full object-contain"
                        src={book.imageLink}
                        alt="book"
                      />
                    </div>
                  </figure>
                  <div className="text-white text-sm hidden md:flex flex-col gap-0.5 justify-center overflow-hidden">
                    <div className="font-medium text-xs lg:text-sm truncate">{book.title}</div>
                    <div className="text-[#bac8ce] text-xs">{book.author}</div>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-4 md:gap-6 w-1/3">
                  <button onClick={() => skipTime(-10)} className="cursor-pointer bg-transparent border-none">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" stroke="white" strokeWidth="2" d="M3.11,7.55 C4.66,4.26 8.07,2 12,2 C17.52,2 22,6.47 22,12 C22,17.52 17.52,22 12,22 M2,4 L2,8 L6,8 M9,16 L9,9 L7,9.5 M17,12 C17,10 16,8.5 14.5,8.5 C13,8.5 12,10 12,12 C12,14 13,15.5 14.5,15.5 C16,15.5 17,14 17,12 Z" />
                    </svg>
                  </button>

                  <button onClick={togglePlay} className="flex items-center justify-center rounded-full cursor-pointer bg-white w-10 h-10 shrink-0">
                    {isPlaying ? (
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-8 h-8 text-[#042330]" xmlns="http://www.w3.org/2000/svg">
                        <path d="M176 96h64v320h-64zM272 96h64v320h-64z"></path>
                      </svg>
                    ) : (
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-8 h-8 text-[#042330] ml-1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M96 448l320-192L96 64v384z"></path>
                      </svg>
                    )}
                  </button>

                  <button onClick={() => skipTime(10)} className="cursor-pointer bg-transparent border-none">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" stroke="white" strokeWidth="2" d="M20.88,7.55 C19.33,4.26 15.92,2 12,2 C6.47,2 2,6.47 2,12 C2,17.52 6.47,22 12,22 M22,4 L22,8 L18,8 M9,16 L9,9 L7,9.5 M17,12 C17,10 16,8.5 14.5,8.5 C13,8.5 12,10 12,12 C12,14 13,15.5 14.5,15.5 C16,15.5 17,14 17,12 Z" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center justify-end gap-3 w-1/3">
                  <div className="text-white text-xs hidden sm:block">{formatTime(currentTime)}</div>
                  <input
                    type="range"
                    className="accent-[#2bd97c] h-1 w-full max-w-[250px] cursor-pointer"
                    value={currentTime}
                    max={duration || 0}
                    onChange={handleProgressChange}
                    style={{
                      background: `linear-gradient(to right, rgb(43, 217, 124) ${progressPercentage}%, rgb(109, 120, 125) ${progressPercentage}%)`
                    }}
                  />
                  <div className="text-white text-xs hidden sm:block">{formatTime(duration)}</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}