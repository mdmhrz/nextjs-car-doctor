"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const images = [
    {
        src: '/assets/images/banner/1.jpg', // Placeholder for Image 1
        alt: 'Affordable Price For Car Servicing',
        title: 'Affordable Price For Car Servicing',
        description: 'There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alteration In Some Form',
    },
    {
        src: '/assets/images/banner/2.jpg', // Placeholder for Image 2
        alt: 'Expert Mechanics, Quality Service',
        title: 'Expert Mechanics, Quality Service',
        description: 'Our certified technicians provide top-notch service for all your automotive needs, ensuring reliability.',
    },
    {
        src: '/assets/images/banner/3.jpg', // Placeholder for Image 3
        alt: 'Fast & Reliable Auto Repairs',
        title: 'Fast & Reliable Auto Repairs',
        description: 'Get your vehicle fixed quickly and efficiently with our state-of-the-art diagnostic tools and expertise.',
    },
    {
        src: '/assets/images/banner/4.jpg', // Placeholder for Image 4
        alt: 'Comprehensive Vehicle Check-ups',
        title: 'Comprehensive Vehicle Check-ups',
        description: 'Ensure your car is in peak condition with our detailed inspections and preventative maintenance services.',
    },
    {
        src: '/assets/images/banner/5.jpg', // Placeholder for Image 5
        alt: 'Your Trusted Partner in Car Care',
        title: 'Your Trusted Partner in Car Care',
        description: 'We build lasting relationships with our clients through honest advice and exceptional service every time.',
    },
];

const BannerSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Optional: Auto-play functionality
    useEffect(() => {
        const interval = setInterval(goToNext, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [currentIndex]);

    const currentImage = images[currentIndex];

    return (
        <div className="relative mt-10 w-11/12 md:w-10/12 lg:w-9/12 mx-auto h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-xl">
            {/* Background Image */}
            <Image
                src={currentImage.src}
                alt={currentImage.alt}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="transition-opacity duration-1000 ease-in-out"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center p-4 md:p-8 lg:p-16">
                <div className="max-w-3xl text-white">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                        {currentImage.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        {currentImage.description}
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors shadow-lg">
                            Discover More
                        </button>
                        <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-800 transition-colors shadow-lg">
                            Latest Project
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-8 right-8 flex space-x-4">
                <button
                    onClick={goToPrevious}
                    className="p-4 rounded-full bg-gray-800 bg-opacity-70 text-white hover:bg-gray-700 transition-colors shadow-md"
                    aria-label="Previous slide"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={goToNext}
                    className="p-4 rounded-full bg-gray-800 bg-opacity-70 text-white hover:bg-gray-700 transition-colors shadow-md"
                    aria-label="Next slide"
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default BannerSlider;
