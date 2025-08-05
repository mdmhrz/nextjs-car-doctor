'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaArrowLeft, FaArrowRight, FaQuoteRight } from 'react-icons/fa';

const testimonialsData = [
    {
        id: 1,
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Genuine image URL
        name: 'Awlad Hossain',
        occupation: 'Businessman',
        quote: 'The service was exceptional! My car feels brand new, and the team was incredibly professional and transparent throughout the entire process. Highly recommend their expertise.',
        rating: 5,
    },
    {
        id: 2,
        avatar: 'https://images.unsplash.com/photo-1645963053605-25f01c33ca02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhZHklMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D',
        occupation: 'Marketing Manager',
        quote: 'I was truly impressed by the efficiency and attention to detail. They fixed my car quickly and the communication was excellent. A truly reliable and trustworthy service center.',
        rating: 4,
    },
    {
        id: 3,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Genuine image URL
        name: 'John Smith',
        occupation: 'Entrepreneur',
        quote: 'Excellent service! My car runs like new. The team was professional and the process was smooth from start to finish. Highly recommended for anyone needing reliable car service.',
        rating: 5,
    },
    {
        id: 4,
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Genuine image URL
        name: 'David Lee',
        occupation: 'Software Engineer',
        quote: 'The staff went above and beyond to ensure my satisfaction. The repairs were done perfectly, and the pricing was fair. I appreciate their honesty and dedication.',
        rating: 4,
    },
];


const Testimonial = () => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 2; // Number of testimonials visible at once

    const handlePrev = () => {
        setStartIndex(prevIndex => Math.max(0, prevIndex - 1));
    };

    const handleNext = () => {
        setStartIndex(prevIndex => Math.min(testimonialsData.length - itemsPerPage, prevIndex + 1));
    };

    const visibleTestimonials = testimonialsData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            {/* Section Header */}
            <div className="text-center mb-12">
                <p className="text-red-500 font-bold text-lg mb-2">Testimonial</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Customer Says</h2>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised
                    Words Which Don't Look Even Slightly Believable.
                </p>
            </div>

            {/* Testimonial Cards Grid with Navigation */}
            <div className="relative flex items-center justify-center">
                {/* Previous Button */}
                <button
                    onClick={handlePrev}
                    className={`absolute left-0 p-4 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors shadow-md z-10
                      ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={startIndex === 0}
                    aria-label="Previous testimonial"
                >
                    <FaArrowLeft className="text-gray-700 text-xl" />
                </button>

                {/* Testimonial Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-12 w-full">
                    {visibleTestimonials.map(testimonial => (
                        <div key={testimonial.id} className="bg-white border border-base-300 rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial?.name || 'Testimonial Image'}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                                    <p className="text-gray-600 text-sm">{testimonial.occupation}</p>
                                </div>
                                {/* Quote icon - simplified with a text element */}
                                <span className="ml-auto text-5xl font-bold text-red-200"><FaQuoteRight /></span>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {testimonial.quote}
                            </p>
                            {/* Rating Stars */}
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={i < testimonial.rating ? 'text-orange-400' : 'text-gray-300'} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className={`absolute right-0 p-4 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md text-white z-10
                      ${startIndex >= testimonialsData.length - itemsPerPage ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={startIndex >= testimonialsData.length - itemsPerPage}
                    aria-label="Next testimonial"
                >
                    <FaArrowRight className="text-xl" />
                </button>
            </div>
        </div>
    );
};

export default Testimonial;
