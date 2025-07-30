import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// Removed import Image from 'next/image'; as it's not supported in this environment

const Footer = () => {
    return (
        <footer className="bg-gray-900 mt-20 text-gray-300 py-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Column 1: Logo and Description */}
                <div className="flex flex-col items-start">
                    <Link href={'/'} className="flex items-center gap-2 mb-4">
                        <Image src={'../assets/logo-footer.svg'} width={37} height={47} alt='Logo' />
                        <span className="text-xl font-bold text-white">Car Doctor</span>
                    </Link>



                    <p className="text-sm leading-relaxed mb-6">
                        Edwin Diaz is a software and web technologies engineer, a life coach
                        trainer who is also a serial.
                    </p>
                    <div className="flex space-x-4">
                        {/* Social Media Icons - Using inline SVG instead of react-icons/fa */}
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                            aria-label="Google"
                        >
                            <svg className="text-white text-lg w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12.24 10.284V14.4h6.816c-.24 1.296-.792 2.376-1.632 3.216-.84.84-1.92 1.416-3.216 1.632v.072h-1.344v-1.296a6.012 6.012 0 00-4.08-1.512c-2.472 0-4.488 2.016-4.488 4.488s2.016 4.488 4.488 4.488c1.32 0 2.52-.576 3.36-1.512l1.008 1.008c-1.2 1.2-2.832 1.944-4.368 1.944-3.792 0-6.888-3.096-6.888-6.888S8.448 4.68 12.24 4.68c2.088 0 3.96 1.008 5.04 2.616l-1.944 1.944c-.72-1.128-1.872-1.848-3.096-1.848z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                            aria-label="Twitter"
                        >
                            <svg className="text-white text-lg w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.8.49-1.69.8-2.63.98C17.72 4.07 16.63 3.5 15.4 3.5c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.99-3.56-.18-6.73-1.89-8.85-4.48-.37.63-.58 1.36-.58 2.14 0 1.49.75 2.81 1.91 3.59-.7-.02-1.37-.21-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.22-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.71 2.14 2.95 4.03 2.98-1.48 1.16-3.35 1.86-5.39 1.86-.35 0-.69-.02-1.03-.06 1.91 1.22 4.18 1.93 6.6 1.93 7.92 0 12.26-6.55 12.26-12.26 0-.19-.01-.38-.01-.57.84-.61 1.56-1.37 2.14-2.23z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                            aria-label="Instagram"
                        >
                            <svg className="text-white text-lg w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M7.8 2h8.4C18.18 2 20 3.82 20 6.2v8.4c0 2.38-1.82 4.2-4.2 4.2H7.8C5.42 19 4 17.18 4 14.8V6.2C4 3.82 5.42 2 7.8 2zm-.2 2c-.99 0-1.8.81-1.8 1.8v8.4c0 .99.81 1.8 1.8 1.8h8.4c.99 0 1.8-.81 1.8-1.8V6.2c0-.99-.81-1.8-1.8-1.8H7.6zm8.8 1.8c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <svg className="text-white text-lg w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.564c0-1.303-.022-2.983-1.815-2.983-1.819 0-2.1 1.422-2.1 2.885v5.662H9.435V9h3.414v1.561h.046c.477-.905 1.637-1.859 3.37-1.859 3.606 0 4.267 2.37 4.267 5.455v6.295zM5.007 7.003c-1.006 0-1.81-.81-1.81-1.81s.804-1.81 1.81-1.81 1.81.81 1.81 1.81-.804 1.81-1.81 1.81zm1.785 13.449H3.222V9h3.57V20.452zM22.227 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.456C23.208 24 24 23.227 24 22.271V1.729C24 .774 23.208 0 22.227 0z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Column 2: About Links */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">About</h3>
                    <ul className="space-y-3">
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                Service
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Company Links */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
                    <ul className="space-y-3">
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                Why Car Doctor
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                About
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Support Links */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
                    <ul className="space-y-3">
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                Support Center
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                Feedback
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors duration-300">
                                Accessibility
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
