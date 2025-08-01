'use client'
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import LogoutConfirmModal from './LogoutConfirmModal';
import ConfirmModal from '@/app/components/ConfirmModal';

const Navbar = () => {
    const { data: session, status } = useSession();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleLogout = () => {
        signOut()
    };


    const navMenu = () => {
        return (
            <>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/services'}>Services</Link>
                </li>
                <li>
                    <Link href={'/blogs'}>Blogs</Link>
                </li>
                <li>
                    <Link href={'/contacts'}>Contacts</Link>
                </li>
            </>
        )
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navMenu()}

                    </ul>
                </div>
                <Link href={'/'}>
                    <Image src={'../assets/logo.svg'} width={57} height={47} alt='Logo' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu()}
                </ul>
            </div>
            <div className="navbar-end flex items gap-3">
                <a className="btn btn-outline rounded-md ">Appointment</a>
                {
                    status == 'authenticated' ? <>
                        <button onClick={() => setIsModalOpen(true)} className='btn btn-secondary text-white rounded-md'>Logout</button>
                        <ConfirmModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            onConfirm={handleLogout}
                            title="Confirm Logout"
                            message="Are you sure you want to log out?"
                            confirmText="Log out"
                            cancelText="Stay"
                            confirmColor="bg-secondary hover:bg-red-700"
                        />
                    </> : <>
                        <Link className='btn text-white rounded-md bg-secondary border-secondary' href={'/auth/signup'}>Sign Up</Link>
                        <Link className='btn btn-outline text-secondary rounded-md' href={'/auth/login'}>Log In</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;