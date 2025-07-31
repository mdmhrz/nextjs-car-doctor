import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import RegisterForm from './components/RegisterForm';

const SignUpForm = () => {
    return (
        <div className="flex justify-center items-center min-h-screen p-4 mt-10">
            <div className="flex flex-col md:flex-row gap-5 rounded-lg overflow-hidden max-w-4xl w-full">
                {/* Left Side - Illustration */}
                <div className="hidden md:flex md:w-1/2 p-8 items-center justify-center">
                    {/* Using a placeholder image for the illustration as I cannot access the original */}
                    <Image
                        width={460}
                        height={500}
                        src="/assets/images/login/login.svg"
                        alt="Security Illustration"
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Right Side - Sign Up Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 border-2 border-base-300 rounded-2xl">
                    <h2 className="text-4xl font-semibold mb-8 text-gray-800 text-center md:text-left">Sign Up</h2>

                    <RegisterForm></RegisterForm>



                    {/* Login Link */}
                    <div className="mt-8 text-center text-gray-600">
                        <p>
                            Already have an account? <Link href={'/auth/login'} className="text-red-600 hover:underline font-medium">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
