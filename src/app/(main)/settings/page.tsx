"use client"

import React from 'react';
import Link from 'next/link';
import { useAppSelector } from '../../redux/hooks';
import LoginPrompt from '@/src/components/LoginPrompt';

export default function Settings() {
    const user = useAppSelector((state) => state.user);

    if (!user.userLoaded) {
        return (
            <div className="mx-auto w-full max-w-[1100px] px-6">
                <div className="mb-8 border-b border-[#e1e7ea] pb-4 text-left text-2xl font-bold text-[#032b41] md:text-[32px]">
                    Settings
                </div>
                <div className="flex flex-col items-start">
                    <div className="w-[160px] h-6 mb-3 bg-[#e4e4e4] animate-pulse"></div>
                    <div className="w-[280px] h-6 mb-8 bg-[#e4e4e4] animate-pulse"></div>
                    <div className="w-[160px] h-6 mb-3 bg-[#e4e4e4] animate-pulse"></div>
                    <div className="w-[280px] h-6 bg-[#e4e4e4] animate-pulse"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto w-full max-w-[1100px] px-6">
            <div className="mb-8 border-b border-[#e1e7ea] pb-4 text-left text-2xl font-bold text-[#032b41] md:text-[32px]">
                Settings
            </div>

            {!user.uid ? (
                <LoginPrompt page="see your details."/> 
            ) : (
                <>
                    <div className="mb-8 flex flex-col items-start gap-2 border-b border-[#e1e7ea] pb-6">
                        <div className="text-lg font-bold text-[#032b41]">Your Subscription plan</div>
                        {user.isSubscribed ? (
                            <div className="text-[#032b41]">Premium</div>
                        ) : (
                            <>
                                <div className="text-[#032b41]">Basic</div>
                                <Link
                                    href="/choose-plan"
                                    className="flex h-10 min-w-[180px] w-fit items-center justify-center rounded bg-[#2bd97c] text-base text-[#032b41] transition-colors duration-200"
                                >
                                    Upgrade to Premium
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="flex flex-col items-start gap-2">
                        <div className="text-lg font-bold text-[#032b41]">Email</div>
                        <div className="text-[#032b41]">
                            {user.email ? user.email : user.uid ? "guest@gmail.com" : "No active session."}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}