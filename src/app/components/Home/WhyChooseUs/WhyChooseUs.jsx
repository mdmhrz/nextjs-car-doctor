import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

const featuresData = [
    {
        id: 1,
        icon: '/assets/icons/group.svg', // Path to your image
        title: 'Expert Team',
        isHighlighted: false,
    },
    {
        id: 2,
        icon: '/assets/icons/time.svg', // Path to your image
        title: 'Timely Work',
        isHighlighted: true,
    },
    {
        id: 3,
        icon: '/assets/icons/person.svg', // Path to your image (assuming this is for support)
        title: '24/7 Support',
        isHighlighted: false,
    },
    {
        id: 4,
        icon: '/assets/icons/wrench.svg', // Path to your image
        title: 'Best Equipment',
        isHighlighted: false,
    },
    {
        id: 5,
        icon: '/assets/icons/check.svg', // Path to your image
        title: '100% Guaranty',
        isHighlighted: false,
    },
    {
        id: 6,
        icon: '/assets/icons/deliveryt.svg', // Path to your image (assuming this is for timely delivery icon)
        title: 'Timely Delivery',
        isHighlighted: false,
    },

];

const WhyChooseUs = () => {
    return (
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto px-4 py-12 md:py-20">
            {/* Section Header */}
            <div className="text-center mb-12">
                <p className="text-red-500 font-bold text-lg mb-2">Core Features</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised
                    Words Which Don't Look Even Slightly Believable.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {featuresData.map(feature => (
                    <div
                        key={feature.id}
                        className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-md transition-all duration-300
              ${feature.isHighlighted ? 'bg-red-500 text-white' : 'bg-white border border-base-300 text-gray-800 hover:bg-gray-50'}`
                        }
                    >
                        <div className={`mb-4 ${feature.isHighlighted ? 'text-white' : 'text-gray-700'}`}>
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                width={48} // Adjust size as needed
                                height={48} // Adjust size as needed
                                className={`${feature.isHighlighted ? 'filter brightness-0 invert' : ''}`} // Invert color for highlighted background
                            />
                        </div>
                        <h3 className={`text-lg font-semibold text-center ${feature.isHighlighted ? 'text-white' : 'text-gray-800'}`}>
                            {feature.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
