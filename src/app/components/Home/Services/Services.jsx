import dbConnect, { collectionName } from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';





const Services = async () => {
    const services = await dbConnect(collectionName.SERVICES).find().toArray();


    return (
        <div className='w-11/12 md:w-10/12 lg:w-9/12 mx-auto'>
            <div className="text-center mb-12">
                <p className="text-red-500 font-bold text-lg mb-2">Service</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Service Area</h2>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised
                    Words Which Don't Look Even Slightly Believable.
                </p>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                {services.map((item) => (
                    <div
                        key={item._id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden"
                    >
                        <div className="relative w-full h-48">
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>

                        <div className="p-4">
                            <div className="mb-2">
                                <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>

                            </div>

                            <div className="text-right flex items-center justify-between text-secondary">
                                <span className="font-bold">${item.price}</span>
                                <Link href={`/services/${item._id}`} className="inline-flex items-center ">
                                    <FaArrowRight className="ml-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;