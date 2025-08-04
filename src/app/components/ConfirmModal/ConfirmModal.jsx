import React from "react";
import { toast } from "react-toastify";

const ConfirmModal = ({
    isOpen,
    onClose,
    onConfirm,
    title = "Are you sure?",
    message = "Do you really want to proceed?",
    confirmText = "Yes, Confirm",
    cancelText = "Cancel",
    confirmColor = "bg-red-600 hover:bg-red-700",
    toastMsg = "You've successfully done this"
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 animate-fade-in-up">
                <h2 className="text-xl text-left font-semibold text-gray-800 mb-3">{title}</h2>
                <p className="text-gray-600 text-left mb-6">{message || 'Do you want to proceed?'}</p>
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={() => {
                            onConfirm();
                            onClose();
                            toast.success(`${toastMsg}`)
                        }}
                        className={`px-4 py-2 rounded-lg text-white transition ${confirmColor}`}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
