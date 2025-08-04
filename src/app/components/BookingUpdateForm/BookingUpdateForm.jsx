"use client";

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
const BookingUpdateForm = ({ booking }) => {
    const router = useRouter()
    const [confirm, setConfirm] = useState(false);

    const [formData, setFormData] = useState({
        phone: '',
        presentAddress: '',
        serviceDate: '',
        message: '',
    });

    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        if (booking) {
            const initialForm = {
                phone: booking.phone || '',
                presentAddress: booking.address || '',
                serviceDate: booking.service_date || '',
                message: booking.message || '',
            };
            setFormData(initialForm);
        }
    }, [booking]);

    useEffect(() => {
        if (!booking) return;

        const hasChanged =
            formData.phone !== (booking.phone || '') ||
            formData.presentAddress !== (booking.address || '') ||
            formData.serviceDate !== (booking.service_date || '') ||
            formData.message !== (booking.message || '');

        setIsChanged(hasChanged);
    }, [formData, booking]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isChanged) {
            toast.info("No changes made.");
            return;
        }

        setConfirm(true);

        const payload = {
            phone: formData.phone,
            address: formData.presentAddress,
            message: formData.message,
            service_date: formData.serviceDate,
            updated_at: new Date().toISOString(),
        };

        try {
            const res = await fetch(`https://nextjs-car-doctor-amber.vercel.app/api/my-bookings/${booking._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                const updatedResponse = await res.json();
                console.log(updatedResponse);
                toast.success("Booking updated successfully!");
                router.push('/myBookings')
            } else {
                toast.error("Failed to update booking.");
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred during update.");
        } finally {
            setConfirm(false);
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-100 p-12 lg:p-20 mt-10 lg:mt-20 rounded-e-2xl">
            <div className="w-full p-6 rounded-2xl">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
                    Update Booking details for <span className="text-red-600">{booking?.title || 'Service'}</span>
                </h1>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Read-only Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-lg font-semibold mb-1 text-gray-700">Name</label>
                            <input
                                type="text"
                                defaultValue={booking.customer_name || ''}
                                readOnly
                                className="w-full bg-white text-gray-600 p-4 rounded-lg focus:ring-2 outline-none focus:ring-gray-500"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-semibold mb-1 text-gray-700">Email</label>
                            <input
                                type="email"
                                defaultValue={booking.customer_email || ''}
                                readOnly
                                className="w-full bg-white text-gray-600 p-4 rounded-lg focus:ring-2 outline-none focus:ring-gray-500"
                            />
                        </div>
                    </div>

                    {/* Amount & Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-lg font-semibold mb-1 text-gray-700">Due Amount</label>
                            <input
                                type="text"
                                defaultValue={booking?.amount || '0.00'}
                                readOnly
                                className="w-full bg-white text-gray-600 p-4 rounded-lg focus:ring-2 outline-none focus:ring-gray-500"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-semibold mb-1 text-gray-700">Preferred Service Date</label>
                            <input
                                type="date"
                                name="serviceDate"
                                required
                                value={formData.serviceDate}
                                onChange={handleChange}
                                className="w-full bg-white text-gray-600 p-4 rounded-lg focus:ring-2 outline-none focus:ring-gray-500"
                            />
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-lg font-semibold mb-1 text-gray-700">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone"
                                required
                                className="w-full bg-white text-gray-600 p-4 rounded-lg focus:ring-2 outline-none focus:ring-gray-500"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-semibold mb-1 text-gray-700">Address</label>
                            <input
                                type="text"
                                name="presentAddress"
                                value={formData.presentAddress}
                                onChange={handleChange}
                                placeholder="Enter your address"
                                required
                                className="w-full bg-white text-gray-600 p-4 rounded-lg focus:ring-2 outline-none focus:ring-gray-500"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-lg font-semibold mb-1 text-gray-700">Additional Message (Optional)</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Any additional info or instruction..."
                            className="w-full bg-white text-gray-600 p-4 rounded-lg focus:ring-2 outline-none focus:ring-gray-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={confirm}
                            className={`w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white
                                ${confirm
                                    ? 'bg-secondary/70 cursor-not-allowed'
                                    : 'bg-secondary hover:bg-red-700 focus:ring-red-500'}
                                focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200`}
                        >
                            {confirm ? (
                                <>
                                    <svg
                                        className="animate-spin h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                                        />
                                    </svg>
                                    Updating Booking...
                                </>
                            ) : (
                                'Update Booking'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingUpdateForm;
