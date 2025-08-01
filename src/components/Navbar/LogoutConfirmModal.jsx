import React from "react";

const LogoutConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 animate-fade-in-up">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Are you sure?</h2>
                <p className="text-gray-600 mb-6">{message || "Do you really want to proceed?"}</p>
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            onConfirm();
                            onClose();
                        }}
                        className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                    >
                        Yes, Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutConfirmModal;
