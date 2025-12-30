"use client"

import React from 'react';

export default function Accordion() {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

    const faqs = [
    {
        question: "How does the free 7-day trial work?",
        answer: "Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires."
    },
    {
        question: "Can I switch subscriptions from monthly to yearly, or yearly to monthly?",
        answer: "While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option."
    },
    {
        question: "What's included in the Premium plan?",
        answer: "Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books and high-quality audio."
    },
    {
        question: "Can I cancel during my trial or subscription?",
        answer: "You will not be charged if you cancel your trial before its conclusion. You can still expand your knowledge with one curated book per day."
    }
    ];

    const toggleAccordion = (index: number | null) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
    <div className="mt-8">
        {faqs.map((faq, index) => (
        <div key={index} className="border-b border-[#ddd] mb-2 overflow-hidden">
            {/* Header */}
            <div 
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center cursor-pointer py-6 gap-2"
            >
            <div className="font-medium text-[#032b41] text-[23px]">{faq.question}</div>
            <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 16 16" 
                className={`transition-transform duration-300 w-4 h-4 ${activeIndex === index ? 'rotate-180' : ''}`} 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
            </svg>
            </div>

            {/* Animated Body */}
            <div className={`grid transition-all duration-300 ease-in-out ${activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
                <div className="pb-6 text-[#394547] leading-relaxed">
                {faq.answer}
                </div>
            </div>
            </div>
        </div>
        ))}
    </div>
    );
};
