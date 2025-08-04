'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaEdit, FaTrash, FaCalendarAlt, FaMoneyBillWave, FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

const statusColors = {
    pending: 'bg-amber-100 text-amber-800',
    confirmed: 'bg-emerald-100 text-emerald-800',
    cancelled: 'bg-red-100 text-red-800',
    completed: 'bg-blue-100 text-blue-800'
};

const statusIcons = {
    pending: <FaSpinner className="animate-spin mr-2" />,
    confirmed: <FaCheckCircle className="mr-2" />,
    cancelled: <FaTimesCircle className="mr-2" />,
    completed: <FaCheckCircle className="mr-2" />
};

const MyBookingsTable = ({ bookings }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const router = useRouter()
    const handleDelete = async (id) => {

        try {
            const res = await fetch(`/api/service/${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                router.refresh()
            }
        } catch (error) {
            toast.error("Failed to delete booking");
            console.error("Delete error", error);
        }
    };

    const handleEdit = (id) => {
        console.log("Edit booking:", id);
        // You can open a modal or navigate
    };

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden mt-10 lg:mt-20 border border-gray-300">
            <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800">My Bookings</h2>
                <p className="text-sm text-gray-500">{bookings?.length} bookings found</p>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Service
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Details
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date & Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {bookings.map((booking) => (
                            <tr key={booking._id} className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-16 w-16 rounded-md overflow-hidden">
                                            <Image
                                                src={booking.img}
                                                alt={booking.service_name}
                                                width={64}
                                                height={64}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{booking.service_name}</div>
                                            <div className="text-sm text-gray-500">Booking ID: {booking._id.slice(-6)}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{booking.customer_name}</div>
                                    <div className="text-sm text-gray-500">{booking.customer_email}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center text-sm text-gray-900">
                                        <FaCalendarAlt className="mr-2 text-gray-400" />
                                        {new Date(booking.service_date).toLocaleDateString()}
                                    </div>
                                    <div className="flex items-center text-sm font-semibold text-gray-900 mt-1">
                                        <FaMoneyBillWave className="mr-2 text-gray-400" />
                                        ${booking.amount}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-3 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full ${statusColors[booking.status.toLowerCase()] || 'bg-gray-100 text-gray-800'}`}>
                                        {statusIcons[booking.status.toLowerCase()] || ''}
                                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex justify-end space-x-2">
                                        <button
                                            onClick={() => handleEdit(booking._id)}
                                            className="text-gray-600 hover:text-indigo-900 p-2 rounded-full hover:bg-indigo-50"
                                            title="Edit"
                                        >
                                            <FaEdit size={16} />
                                        </button>
                                        <button
                                            // onClick={() => handleDelete(booking._id)}
                                            onClick={() => setIsModalOpen(true)}
                                            className="text-red-600 hover:text-red-900 p-2 rounded-full hover:bg-red-50"
                                            title="Delete"
                                        >
                                            <FaTrash size={16} />
                                        </button>
                                        <ConfirmModal
                                            isOpen={isModalOpen}
                                            onClose={() => setIsModalOpen(false)}
                                            onConfirm={() => handleDelete(booking._id)}
                                            title="Confirm Delete"
                                            message="Are you sure you want to delete?"
                                            confirmText="Delete"
                                            cancelText="Cancel"
                                            confirmColor="bg-secondary hover:bg-red-700"
                                            toastMsg="Booking successfully deleted"
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {bookings.length === 0 && (
                <div className="px-6 py-12 text-center">
                    <div className="text-gray-400 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">No bookings found</h3>
                    <p className="mt-1 text-sm text-gray-500">You haven't made any bookings yet.</p>
                </div>
            )}
        </div>
    );
};

export default MyBookingsTable;