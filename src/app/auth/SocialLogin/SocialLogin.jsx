'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaEye, FaEyeSlash, FaGithub } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const router = useRouter();
    const session = useSession();

    const handleSocialLogin = (providerName) => {
        localStorage.setItem('login_provider', providerName);
        signIn(providerName);
    };

    useEffect(() => {
        if (session?.status === 'authenticated') {
            const provider = localStorage.getItem('login_provider');
            toast.success(`You've successfully logged in by ${provider}`);
            router.push('/');
            localStorage.removeItem('login_provider');
        }
    }, [session?.status]);


    return (
        <div className="mt-8 text-center">
            <p className="text-gray-500">Or Sign In with</p>
            <div className="mt-4 flex justify-center space-x-4">
                <button onClick={() => handleSocialLogin("google")} className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                    <FaGoogle className="text-lg text-red-600" />
                </button>
                <button onClick={() => handleSocialLogin("facebook")} className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                    <FaFacebookF className="text-lg text-blue-600" />
                </button>
                <button onClick={() => handleSocialLogin("linkedin")} className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                    <FaLinkedinIn className="text-lg text-blue-700" />
                </button>

                <button onClick={() => handleSocialLogin("github")} className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                    <FaGithub className="text-lg text-red-600" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;