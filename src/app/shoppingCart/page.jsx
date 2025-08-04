"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaTrashAlt } from 'react-icons/fa';

// Mock data to simulate a shopping cart
const mockCartItems = [
    {
        id: 1,
        name: 'Martha Knit Top',
        color: 'Green',
        size: 'S',
        price: '25.00',
        date: '22-10-2022',
        status: 'Pending',
        image: 'https://placehold.co/100x100/E5E7EB/4B5563?text=Product',
    },
    {
        id: 2,
        name: 'Martha Knit Top',
        color: 'Green',
        size: 'S',
        price: '25.00',
        date: '22-10-2022',
        status: 'Pending',
        image: 'https://placehold.co/100x100/E5E7EB/4B5563?text=Product',
    },
    {
        id: 3,
        name: 'Martha Knit Top',
        color: 'Green',
        size: 'S',
        price: '25.00',
        date: '22-10-2022',
        status: 'Pending',
        image: 'https://placehold.co/100x100/E5E7EB/4B5563?text=Product',
    },
];

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState(mockCartItems);

    // Function to remove an item from the cart
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Function to clear the entire cart
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            {/* Shopping Cart Items */}
            <div className="bg-white rounded-lg shadow-md p-6">
                {cartItems.map(item => (
                    <div key={item.id} className="flex items-center space-x-4 mb-4 p-4 border-b last:border-b-0">
                        {/* Remove button */}
                        <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            aria-label="Remove item"
                        >
                            <FaTrashAlt className="text-gray-500" />
                        </button>

                        {/* Product Image */}
                        <div className="w-20 h-20 flex-shrink-0">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={80}
                                height={80}
                                className="rounded-md object-cover"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="flex-grow">
                            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-500">Color : {item.color}</p>
                            <p className="text-sm text-gray-500">Size: {item.size}</p>
                        </div>

                        {/* Price, Date, and Status */}
                        <div className="flex items-center space-x-8 text-right">
                            <span className="text-lg font-bold text-gray-900">${item.price}</span>
                            <span className="text-lg text-gray-600 hidden md:block">{item.date}</span>
                            <span className="inline-block px-4 py-1 text-sm font-semibold text-white bg-red-500 rounded-md">
                                {item.status}
                            </span>
                        </div>
                    </div>
                ))}

                {cartItems.length === 0 && (
                    <div className="text-center text-gray-500 py-8">Your cart is empty.</div>
                )}
            </div>

            {/* Action buttons */}
            <div className="flex justify-between items-center mt-6">
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <FaArrowLeft />
                    <span>Continue Shopping</span>
                </a>
                <button
                    onClick={clearCart}
                    className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
                    aria-label="Clear shopping cart"
                >
                    <FaTrashAlt />
                    <span>Clear Shopping Cart</span>
                </button>
            </div>
        </div>
    );
};

export default ShoppingCart;
