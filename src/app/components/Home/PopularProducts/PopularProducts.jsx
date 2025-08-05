import React from 'react';
import Image from 'next/image';
import { FaStar, FaShoppingCart } from 'react-icons/fa'; // For star and cart icons

const productsData = [
    {
        id: 1,
        image: '/assets/images/products/1.png', // Placeholder
        title: 'Car Wheel Disk',
        price: '20.00',
        rating: 4, // Out of 5
    },
    {
        id: 2,
        image: '/assets/images/products/2.png', // Placeholder
        title: 'Car Suspension',
        price: '20.00',
        rating: 5,
    },
    {
        id: 3,
        image: '/assets/images/products/3.png', // Placeholder
        title: 'Air Filter',
        price: '20.00',
        rating: 4,
    },
    {
        id: 4,
        image: '/assets/images/products/4.png', // Placeholder
        title: 'Car Battery', // Changed title as per image
        price: '20.00',
        rating: 5,
    },
    {
        id: 5,
        image: '/assets/images/products/5.png', // Placeholder
        title: 'Car Tires', // Changed title as per image
        price: '20.00',
        rating: 4,
    },
    {
        id: 6,
        image: '/assets/images/products/6.png', // Placeholder
        title: 'Car Accessories', // Changed title as per image
        price: '20.00',
        rating: 5,
    },
];

const PopularProducts = () => {
    return (
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto px-4 py-12 md:py-20">
            {/* Section Header */}
            <div className="text-center mb-12">
                <p className="text-red-500 font-bold text-lg mb-2">Popular Products</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Browse Our Products</h2>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised
                    Words Which Don't Look Even Slightly Believable.
                </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {productsData.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group p-3 border border-base-300">
                        <div className="relative w-full h-48 bg-base-300 flex items-center justify-center rounded-t-lg">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={200} // Adjust width/height as needed for better placeholder fit
                                height={150}
                                objectFit="contain" // Use 'contain' to ensure image fits within the box
                                className="rounded-t-lg p-3"
                            />
                            {/* Shopping cart icon overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg">
                                <button className="p-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
                                    <FaShoppingCart className="text-xl" />
                                </button>
                            </div>
                        </div>
                        <div className="p-6 text-center">
                            {/* Rating Stars */}
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'} />
                                ))}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                            <p className="text-red-500 font-bold text-lg">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* More Products Button */}
            <div className="text-center">
                <button className="px-8 py-3 border-2 border-red-500 text-red-500 font-semibold rounded-md hover:bg-red-500 hover:text-white transition-colors shadow-lg">
                    More Products
                </button>
            </div>
        </div>
    );
};

export default PopularProducts;
