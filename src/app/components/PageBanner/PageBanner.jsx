import Image from 'next/image';
import React from 'react';

const PageBanner = ({ title = "Page Title", image = "/assets/images/banner/4.jpg", breadcrumbText = "Home / Page" }) => {
    return (
        <section>
            <div className="relative w-full h-68 md:h-80 overflow-hidden shadow-lg rounded-xl mt-10">
                <Image
                    src={image}
                    alt="Banner"
                    fill
                    className="object-cover"
                    priority
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

                <div className="relative z-20 flex flex-col items-start justify-center h-full p-6 md:p-10 lg:p-16">
                    <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
                        {title}
                    </h1>

                    <div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-secondary text-white px-8 py-3 shadow-lg
                            flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors duration-300 max-w-80 w-full"
                        style={{
                            clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)',
                        }}
                    >
                        <span className="text-sm md:text-base font-semibold">
                            {breadcrumbText}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageBanner;
