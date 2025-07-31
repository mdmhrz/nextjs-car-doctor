import dbConnect, { collectionName } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';
import ServiceBanner from '../ServiceBanner/ServiceBanner';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const ServiceDetails = async ({ params }) => {
    const id = params?.id;

    let service = null;
    let services = null;
    let cleanService = {};

    try {
        // Validate ObjectId
        if (!ObjectId.isValid(id)) throw new Error("Invalid ID");

        const servicesCollection = await dbConnect(collectionName.SERVICES);
        service = await servicesCollection.findOne({ _id: new ObjectId(id) });
        services = await servicesCollection.find({}).toArray();

        if (!service) {
            throw new Error("Service not found");
        }

        cleanService = {
            ...service,
            _id: service._id.toString(),
        };

        // console.log(service);

    } catch (error) {
        console.error('Error fetching service details:', error);
        return (
            <div className="w-11/12 mx-auto mt-10 text-red-600">
                <h2 className="text-2xl font-bold">Error loading service</h2>
                <p>{error.message}</p>
            </div>
        );
    }
    return (
        <div className='w-11/12 lg:w-10/12 xl:w-9/12 mx-auto'>
            {/* Banner */}
            <ServiceBanner></ServiceBanner>

            {/* Service Details Section */}

            <section className="">
                {/* Main Content Area */}
                <div className="py-10 flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:w-2/3">
                        {/* Main Image Section */}
                        <div className="relative w-full h-80 md:h-96 bg-gray-300 rounded-lg overflow-hidden shadow-lg mb-8">
                            <img
                                src={service.img} // Placeholder image
                                alt="Car Engine Service"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Unique Car Engine Service Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h2>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>

                        {/* Service Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {
                                service.facility.map((f, i) => (
                                    <div key={i} className="bg-white p-6 rounded-lg shadow-md border-t-3 border-secondary/50">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{f.name}</h3>
                                        <p className="text-gray-600">{f.details}</p>
                                    </div>
                                ))
                            }

                        </div>

                        {/* Second Description Block */}
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                            <p className="text-gray-600 leading-relaxed">{service.additional_details}</p>
                        </div>

                        {/* 3 Simple Steps to Process Section */}
                        <div className="container mx-auto px-4 py-12">
                            {/* Section Heading and Description */}
                            <div className="mb-12">
                                <h2 className="text-4xl font-bold text-gray-800 mb-4">3 Simple Steps to Process</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Our car service operation is streamlined into three simple steps to ensure efficiency and transparency.
                                    From initial diagnosis to final quality checks, we prioritize clear communication and meticulous
                                    attention to detail, ensuring your vehicle receives the best possible care without any hidden surprises.
                                </p>
                            </div>

                            {/* Steps Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                {
                                    service.three_steps.map((step, index) => (
                                        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                                            <div className="relative w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-red-600 text-white font-bold text-2xl">
                                                {index + 1}
                                                {/* You could replace '01' with an image if needed, e.g., <img src="/path/to/01.png" alt="Step 1" /> */}
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                                            <p className="text-gray-600">{step.description}</p>
                                        </div>
                                    ))
                                }
                            </div>

                            {/* Large Image with Play Button */}
                            {/* <div className="relative w-full rounded-lg overflow-hidden shadow-lg h-60 md:h-[400px] flex items-center justify-center">
                                {service.youtube_video_link ? (
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src={service.youtube_video_link.replace("watch?v=", "embed/")}
                                        title={`${service.title} Video`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <img
                                        src="https://repairsmith-prod-wordpress.s3.amazonaws.com/2022/09/car-repair.jpg" // Placeholder if no video link
                                        alt="Video not available"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                )}
                            </div> */}
                            <VideoPlayer service={cleanService}></VideoPlayer>
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:w-1/3 space-y-8">
                        {/* Services Section */}
                        <div className="bg-base-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Services</h3>
                            <ul className="space-y-3">
                                {services.map((s, index) => (
                                    <li key={index}>
                                        <a href="#" className="flex items-center justify-between bg-gray-100 text-gray-800 py-3 px-4 rounded-md hover:bg-red-600 hover:text-white transition-colors duration-300">
                                            <span>{s.title}</span>
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Download Section */}
                        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Download</h3>
                            <ul className="space-y-3">
                                {['Our Brochure', 'Company Details'].map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="flex items-center justify-between bg-gray-700 py-3 px-4 rounded-md hover:bg-red-600 transition-colors duration-300">
                                            <span>{item}</span>
                                            <span className="text-red-500">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v7.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L9 11.586V4a1 1 0 011-1z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Car Doctor Special Section */}
                        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
                            <div className="flex justify-center mb-4">
                                <img
                                    src="/assets/logo-footer.svg" // Placeholder for gear icon
                                    alt="Gear Icon"
                                    width={60}
                                    height={60}
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Car Doctor</h3>
                            <p className="text-red-600 text-lg font-semibold mb-2">Need Help? We Are Here</p>
                            <p className="text-gray-300 mb-4">To Help You</p>
                            <div className="bg-white text-gray-800 p-4 rounded-lg mb-4">
                                <p className="text-lg font-bold">Car Doctor Special</p>
                                <p className="text-sm">Save up to <span className="text-red-600 font-bold">60%</span> off</p>
                            </div>
                            <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors duration-300">
                                Get A Quote
                            </button>
                        </div>

                        {/* Price Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Price ${service.price}</h3>
                            <button className="w-full bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors duration-300">
                                Proceed Checkout
                            </button>
                        </div>


                    </div>
                </div>
            </section>

        </div >
    );
};

export default ServiceDetails;