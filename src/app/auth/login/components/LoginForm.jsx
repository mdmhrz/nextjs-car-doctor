'use client'
import React, { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [formErrors, setFormErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [signingIn, setSigningIn] = useState(false)
    const router = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setFormErrors((prev) => ({
            ...prev,
            [name]: '',
        }));
    };

    // Validation function
    const validateForm = () => {
        const errors = {};

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Invalid email format';
        }

        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        return errors;
    };


    // Submit handler
    const handleSubmit = async (e) => {
        setSigningIn(true)
        e.preventDefault();

        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        try {
            const { email, password } = formData;
            const response = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (response.ok) {
                toast.success('Logged in successfully')
                setFormData({ email: "", password: '' })
                setFormErrors({});
                setShowPassword(false);
                router.push('/')
            } else {
                toast.warn('Authentication failed')
                setSigningIn(false)
                return
            }


        } catch (error) {
            console.log(error);
            alert('Authentication failed')
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Your email"
                />
                {formErrors.email && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                )}
            </div>

            {/* Password Field */}
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div className="relative">
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm ${formErrors.password ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Your password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                    </button>
                </div>
                {formErrors.password && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.password}</p>
                )}
            </div>

            {/* Sign In Button */}
            <div>
                <button
                    type="submit"
                    disabled={signingIn}
                    className={`w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white
    ${signingIn
                            ? 'bg-secondary/70 cursor-wait'
                            : 'bg-secondary hover:bg-red-700 focus:ring-red-500'}
    focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200`}
                >
                    {signingIn ? (
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
                            Signing In...
                        </>
                    ) : (
                        'Sign In'
                    )}
                </button>

            </div>

            {/* Social Sign In Section */}
            <div className="mt-8 text-center">
                <p className="text-gray-500">Or Sign In with</p>
                <div className="mt-4 flex justify-center space-x-4">
                    <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                        <FaFacebookF className="text-lg text-blue-600" />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                        <FaLinkedinIn className="text-lg text-blue-700" />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                        <FaGoogle className="text-lg text-red-600" />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
