'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="relative min-h-screen -mb-20 flex items-center justify-center bg-base-300 overflow-hidden">
            {/* Full Background Image */}
            <Image
                src="/assets/images/404/illustration.svg"
                alt="Background"
                fill
                priority
                className="object-cover object-center opacity-50 z-0"
            />

            <div className="relative z-10 max-w-7xl w-full px-4 flex flex-col lg:flex-row items-center justify-center gap-20 py-20">
                {/* Left Section */}
                <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center lg:text-left"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
                        Ooops... <br /> Page not found
                    </h1>
                    <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto lg:mx-0">
                        The page you're looking for doesn't exist or has been moved. Let's get you back home.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full text-white bg-red-500 hover:bg-red-600 transition-all duration-300"
                    >
                        <FaArrowLeft className="mr-2" /> Back to Home
                    </Link>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-md w-full"
                >
                    <Image
                        src="/assets/images/404/404.svg"
                        alt="404 Illustration"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
