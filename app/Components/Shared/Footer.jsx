import React from 'react';

const Footer = () => {
    return (
        // The main container for the footer section
        <footer className="bg-gray-900 text-white font-sans">
            {/* Top section: Placeholder for image gallery or banner */}
            <div className="w-full bg-gray-800" style={{ height: '200px', overflow: 'hidden' }}>
                <img
                    // Image src now points directly to the public/assets folder
                    // Ensure your 'header-banner.png' is located in 'project-root/public/assets/'
                    src="/assets/header-banner.png"  // Corrected path
                    alt="Company Banner"
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110" // Added hover effects
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/1200x200/333/fff?text=Header+Banner'; }}
                />
            </div>

            {/* Main Title / Logo Section - now an Image */}
            {/* Moved horizontal padding to this div, and made image inside fill it */}
            <div className="bg-[#f5f1ed] py-10 h-[218px] flex items-center justify-start overflow-hidden px-6 md:px-20">
                <img
                    // Updated src to reference 'ora.png' from the public/assets/ directory
                    // Image now uses w-full and object-fill to stretch within its padded container
                    src="/assets/ora.png"  // Corrected path
                    alt="KAHAFIL ORA Logo"
                    className="w-full h-full object-fill transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110" // Added hover effects
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/1920x218/cccccc/000?text=KAHAFIL+ORA+Image+Error'; }}
                />
            </div>

            {/* Contact, Address, Social Links Section */}
            <div className="bg-[#f5f1ed] text-gray-800 py-12 px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Contact Info */}
                <div className="flex flex-col space-y-2">
                    <a
                        href="mailto:kahafil@goinnovior.com"
                        className="hover:text-purple-600 transition-colors"
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 300,
                            fontSize: '20.83px',
                            lineHeight: '100%',
                            letterSpacing: '0em',
                            textTransform: 'lowercase',
                        }}
                    >
                        kahafil@goinnovior.com
                    </a>
                    <a
                        href="tel:+8801622992222"
                        className="hover:text-purple-600 transition-colors"
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 300,
                            fontSize: '20.83px',
                            lineHeight: '100%',
                            letterSpacing: '0em',
                            textTransform: 'lowercase',
                        }}
                    >
                        +880 1622-992222
                    </a>
                </div>

                {/* Company List */}
                <div className="flex flex-col space-y-2">
                    <p
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 300,
                            fontSize: '20.83px',
                            lineHeight: '100%',
                            letterSpacing: '0em',
                            textTransform: 'lowercase',
                        }}
                    >
                        Goinnovior Limited
                    </p>
                    <p
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 300,
                            fontSize: '20.83px',
                            lineHeight: '100%',
                            letterSpacing: '0em',
                            textTransform: 'lowercase',
                        }}
                    >
                        360d Soul Limited
                    </p>
                    <p
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 300,
                            fontSize: '20.83px',
                            lineHeight: '100%',
                            letterSpacing: '0em',
                            textTransform: 'lowercase',
                        }}
                    >
                        Codinnovior
                    </p>
                    <p
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 300,
                            fontSize: '20.83px',
                            lineHeight: '100%',
                            letterSpacing: '0em',
                            textTransform: 'lowercase',
                        }}
                    >
                        Lifeinnovior
                    </p>
                </div>

                {/* Address */}
                <div className="flex flex-col space-y-2">
                    <p
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 300,
                            fontSize: '20.83px',
                            lineHeight: '100%',
                            letterSpacing: '0em',
                            textTransform: 'lowercase',
                        }}
                    >
                        Lift 4, House 774, Road 11, Avenue
                    </p>
                    <p
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 300,
                            fontSize: '20.83px',
                            lineHeight: '100%',
                            letterSpacing: '0em',
                            textTransform: 'lowercase',
                        }}
                    >
                        Mirpur DOHS
                    </p>
                    <p
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 300,
                            fontSize: '20.83px',
                            lineHeight: '100%',
                            letterSpacing: '0em',
                            textTransform: 'lowercase',
                        }}
                    >
                        Dhaka 1216
                    </p>
                    <p
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 300,
                            fontSize: '20.83px',
                            lineHeight: '100%',
                            letterSpacing: '0em',
                            textTransform: 'lowercase',
                        }}
                    >
                        Bangladesh
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-col space-y-2">
                    <a
                        href="https://github.com/yourusername" // Changed to GitHub
                        className="hover:text-purple-600 transition-colors"
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 300,
                            fontSize: '20.83px',
                            lineHeight: '100%',
                            letterSpacing: '0em',
                            textTransform: 'lowercase',
                        }}
                    >
                        X
                    </a>
                    <a
                        href="https://github.com/yourusername" // Changed to GitHub
                        className="hover:text-purple-600 transition-colors"
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 300,
                            fontSize: '20.83px',
                            lineHeight: '100%',
                            letterSpacing: '0em',
                            textTransform: 'lowercase',
                        }}
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/yourusername" // Changed to GitHub
                        className="hover:text-purple-600 transition-colors"
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 300,
                            fontSize: '20.83px',
                            lineHeight: '100%',
                            letterSpacing: '0em',
                            textTransform: 'lowercase',
                        }}
                    >
                        YouTube
                    </a>
                    <a
                        href="https://github.com/yourusername" // Changed to GitHub
                        className="hover:text-purple-600 transition-colors"
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 300,
                            fontSize: '20.83px',
                            lineHeight: '100%',
                            letterSpacing: '0em',
                            textTransform: 'lowercase',
                        }}
                    >
                        Facebook
                    </a>
                    <a
                        href="https://github.com/yourusername" // Changed to GitHub
                        className="hover:text-purple-600 transition-colors"
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 300,
                            fontSize: '20.83px',
                            lineHeight: '100%',
                            letterSpacing: '0em',
                            textTransform: 'lowercase',
                        }}
                    >
                        Instagram
                    </a>
                </div>
            </div>

            {/* Footer Copyright Section */}
            {/* Updated background color to #EBEBEB and text color to #444444 */}
            <div className="bg-[#EBEBEB] text-[#444444] py-4 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center text-sm">
                <p
                    style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 300,
                        fontSize: '18.33px',
                        lineHeight: '100%',
                        letterSpacing: '0em',
                        textTransform: 'capitalize',
                    }}
                >
                    Copyright © 2025 Kahafil Ora
                </p>
                <div className="flex space-x-6 mt-2 md:mt-0">
                    <a
                        href="#"
                        className="hover:text-white transition-colors"
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 300,
                            fontSize: '18.33px',
                            lineHeight: '100%',
                            letterSpacing: '0em',
                            textTransform: 'capitalize',
                        }}
                    >
                        Privacy & Policy
                    </a>
                    <a
                        href="#"
                        className="hover:text-white transition-colors"
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 300,
                            fontSize: '18.33px',
                            lineHeight: '100%',
                            letterSpacing: '0em',
                            textTransform: 'capitalize',
                        }}
                    >
                        Terms & Conditions
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <svg className="w-4 h-4 inline-block ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
