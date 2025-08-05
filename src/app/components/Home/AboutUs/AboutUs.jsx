import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-10 xl:gap-40">
                {/* Left Section - Images */}
                <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
                    {/* Large image (mechanic) */}
                    <div className="relative w-full max-w-md h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
                        <Image
                            src="/assets/images/about/person.jpg" // Path to your mechanic image
                            alt="Qualified Mechanic"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    {/* Small image (car parts) */}
                    <div className="absolute -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
                        <Image
                            src="/assets/images/about/parts.jpg" // Path to your car parts image
                            alt="Car Parts"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                {/* Right Section - Text Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left pt-10 lg:pt-0">
                    <p className="text-red-500 font-bold text-lg mb-2">About Us</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
                        We are qualified <br className="hidden md:inline" />& of experience <br className="hidden md:inline" />in this field
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered
                        Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even
                        Slightly Believable.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which Don't Look Even Slightly Believable.
                    </p>
                    <button className="px-8 py-4 bg-red-500 text-white font-semibold text-lg rounded-md shadow-lg hover:bg-red-600 transition-colors duration-300">
                        Get More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
