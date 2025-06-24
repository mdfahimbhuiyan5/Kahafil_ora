import React, { useState } from 'react';

// IMPORTANT: When images are in the public/assets/ folder, you reference them directly
// with a root-relative path, WITHOUT importing them.
// import hero11 from '../assets/hero11.png'; // This import is now removed.
// import hero12 from '../assets/hero12.png'; // This import is now removed.

const Hero = () => {
    // State to manage which hero image is displayed, using direct paths for public assets
    const [currentHeroImage, setCurrentHeroImage] = useState('public/assets/hero11.png');

    return (
        <section className="relative min-h-screen w-full bg-[#F5F1ED] text-gray-800 font-sans py-16 px-8 md:px-20 overflow-hidden">

            {/* "ABOUT KAHAFIL ORA" Section */}
            <div className="text-center mb-16 pt-12">
                <h2 className="text-sm uppercase font-medium text-gray-600 mb-4">ABOUT KAHAFIL ORA</h2>
                <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-gray-900 px-4">
                    Kahafil Ora Is An Experienced IT Consultant Known For Delivering Smart, Tech-Driven Solutions To Businesses. With A Strong Grasp Of IT Infrastructure And Digital Strategy, He Helps Organizations Improve Efficiency And Achieve Their Goals Through Innovative Technology
                </p>
            </div>

            {/* Divider Line */}
            <div className="border-b border-gray-300 w-full max-w-6xl mx-auto mb-16"></div>

            {/* Main Content Grid: Left Text, Center Image, Right Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto items-center">

                {/* Left Column: Driving Digital Innovation & Contact */}
                <div className="flex flex-col space-y-12 text-gray-800">
                    <div>
                        <p className="text-xs uppercase font-medium text-gray-600 mb-2">DRIVING DIGITAL INNOVATION ACROSS</p>
                        <p className="text-xs uppercase font-medium text-gray-600">BANGLADESH AND BEYOND</p>
                        <ul className="mt-4 text-base space-y-1">
                            <li>Mentor</li>
                            <li>IT Strategist</li>
                            <li>Tech Entrepreneur</li>
                            <li>Cybersecurity Advocate</li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs uppercase font-medium text-gray-600 mb-2">CONTACT</p>
                        <p className="text-base">Kahafil Ora</p>
                        <p className="text-base">Dhaka | Bangladesh</p>
                        <p className="text-base">+880 1622-992222</p>
                        <p className="text-base">kahafil@goinnovior.com</p>
                    </div>
                </div>

                {/* Center Column: Image with Hover Effect */}
                <div className="flex justify-center items-center relative lg:col-span-1">
                    {/* The image is now explicitly given a fixed width and height for consistency with the layout */}
                    <img
                        src={currentHeroImage}
                        alt="Kahafil Ora Profile"
                        // Added 'rounded-full' to make the image oval.
                        // Removed transition-transform and transform hover:scale-105 as per the provided image.
                        className="w-[300px] h-[400px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] object-cover rounded-full transition-all duration-300 ease-in-out"
                        onMouseEnter={() => setCurrentHeroImage('public/assets/hero12.png')} // Direct path for hover image
                        onMouseLeave={() => setCurrentHeroImage('public/assets/hero11.png')} // Direct path for default image
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = 'https://placehold.co/400x500/ccc/333?text=Profile+Image+Error';
                        }}
                    />
                </div>

                {/* Right Column: Years of Experience, Satisfaction, Clients Worldwide */}
                <div className="flex flex-col justify-between text-gray-800 space-y-12 lg:col-span-1">
                    <div className="text-right">
                        <p className="text-xs uppercase font-medium text-gray-600 mb-2">YEARS OF EXPERIENCE</p>
                        <div className="flex items-center justify-end">
                            <span className="text-6xl font-semibold mr-2">22+</span>
                            {/* SVG for the 'M' like icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-red-500">
                                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11 15V13H13V15H11ZM11 9V7H13V9H11Z"/>
                            </svg>
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="text-xs uppercase font-medium text-gray-600 mb-2">SATISFACTION CLIENTS</p>
                        <p className="text-6xl font-semibold">100%</p>
                    </div>

                    <div className="text-right">
                        <p className="text-xs uppercase font-medium text-gray-600 mb-2">CLIENTS ON WORLDWIDE</p>
                        <p className="text-6xl font-semibold">70+</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
