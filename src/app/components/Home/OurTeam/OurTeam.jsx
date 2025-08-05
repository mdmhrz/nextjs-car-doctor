'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const teamMembersData = [
    {
        id: 1,
        image: '/assets/images/team/1.jpg', // Placeholder
        name: 'Lincoln', // This seems to be a placeholder name, adjust as needed
        role: 'Engine Expert',
    },
    {
        id: 2,
        image: '/assets/images/team/2.jpg', // Placeholder
        name: 'Ershad', // Placeholder
        role: 'Electric Expert',
    },
    {
        id: 3,
        image: '/assets/images/team/3.jpg', // Placeholder
        name: 'Shejan', // Placeholder
        role: 'Chasis Expert',
    },
    {
        id: 4,
        image: '/assets/images/team/2.jpg', // Placeholder
        name: 'Saju', // Placeholder
        role: 'Manufacture Expert',
    },
];

const OurTeam = () => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 3; // Number of items visible at once

    const handlePrev = () => {
        setStartIndex(prevIndex => Math.max(0, prevIndex - 1));
    };

    const handleNext = () => {
        setStartIndex(prevIndex => Math.min(teamMembersData.length - itemsPerPage, prevIndex + 1));
    };

    const visibleMembers = teamMembersData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto px-4 py-12 md:py-20">
            {/* Section Header */}
            <div className="text-center mb-12">
                <p className="text-red-500 font-bold text-lg mb-2">Team</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised
                    Words Which Don't Look Even Slightly Believable.
                </p>
            </div>

            {/* Team Members Grid with Navigation */}
            <div className="relative flex items-center justify-center">
                {/* Previous Button */}
                <button
                    onClick={handlePrev}
                    className={`absolute left-0 p-4 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors shadow-md z-10
                      ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={startIndex === 0}
                    aria-label="Previous team member"
                >
                    <FaArrowLeft className="text-gray-700 text-xl" />
                </button>

                {/* Team Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-12">
                    {visibleMembers.map(member => (
                        <div key={member.id} className="bg-base-200 border border-base-300 2xl:min-w-sm  rounded-lg shadow-md overflow-hidden text-center p-6 hover:shadow-xl transition-shadow duration-300">
                            <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                            <p className="text-gray-500 text-sm mb-4">{member.role}</p>
                            <div className="flex justify-center space-x-3">
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-red-200 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors" aria-label="Facebook">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-red-200 text-gray-700 hover:bg-blue-400 hover:text-white transition-colors" aria-label="Twitter">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-red-200 text-gray-700 hover:bg-blue-700 hover:text-white transition-colors" aria-label="LinkedIn">
                                    <FaLinkedinIn />
                                </a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-red-200 text-gray-700 hover:bg-pink-600 hover:text-white transition-colors" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className={`absolute right-0 p-4 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md text-white z-10
                      ${startIndex >= teamMembersData.length - itemsPerPage ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={startIndex >= teamMembersData.length - itemsPerPage}
                    aria-label="Next team member"
                >
                    <FaArrowRight className="text-xl" />
                </button>
            </div>
        </div>
    );
};

export default OurTeam;
