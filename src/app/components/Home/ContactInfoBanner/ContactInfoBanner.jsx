import React from 'react';
import { FaCalendarAlt, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Icons for calendar, phone, location

const ContactInfoBanner = () => {
    return (
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-8 mt-10">
            <div className="bg-gray-800 text-white rounded-lg shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-around space-y-6 md:space-y-0 md:space-x-8">
                {/* Working Hours */}
                <div className="flex items-center space-x-4 text-center md:text-left">
                    <div className="relative">
                        <FaCalendarAlt className="text-red-500 text-4xl" />
                        {/* Small red circle with exclamation mark - simplified with a dot */}
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-white text-xs"></span>
                    </div>
                    <div>
                        <p className="text-gray-300 text-sm">We are open monday-friday</p>
                        <p className="text-lg md:text-xl font-semibold">7:00 am - 9:00 pm</p>
                    </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-center space-x-4 text-center md:text-left">
                    <div className="relative">
                        <FaPhoneAlt className="text-red-500 text-4xl" />
                        {/* Small red speech bubble - simplified with a dot */}
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-white text-xs"></span>
                    </div>
                    <div>
                        <p className="text-gray-300 text-sm">Have a question?</p>
                        <p className="text-lg md:text-xl font-semibold">+2546 251 2658</p>
                    </div>
                </div>

                {/* Address */}
                <div className="flex items-center space-x-4 text-center md:text-left">
                    <div className="relative">
                        <FaMapMarkerAlt className="text-red-500 text-4xl" />
                    </div>
                    <div>
                        <p className="text-gray-300 text-sm">Need a repair? our address</p>
                        <p className="text-lg md:text-xl font-semibold">Liza Street, New York</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfoBanner;
