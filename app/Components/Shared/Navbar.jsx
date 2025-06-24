import React, { useState } from 'react';

const Hero = () => {
    const [currentHeroImage, setCurrentHeroImage] = useState('/assets/hero1.png'); // Corrected path

    return (
        <section className="relative min-h-screen w-full bg-[#EFEAE4] text-gray-800 font-sans overflow-hidden">

            {/* Top Navigation */}
            <div className="absolute top-4 left-0 w-full z-40 flex items-center justify-between px-8 text-xs md:text-sm uppercase font-medium text-gray-900">
                <div className="flex space-x-24 md:space-x-32 lg:space-x-40">
                    <a href="#" className="hover:text-purple-600 transition-colors">WORK</a>
                    <a href="#" className="hover:text-purple-600 transition-colors">ABOUT</a>
                </div>
                <div className="flex ml-auto items-center">
                    <a href="#" className="hover:text-purple-600 transition-colors mr-16 md:mr-24 lg:mr-32">THOUGHTS</a>
                    <a href="#" className="hover:text-purple-600 transition-colors">MAIL</a>
                    <div className="flex space-x-4 ml-4">
                        <a href="#" className="hover:text-purple-600 transition-colors">X</a>
                        <a href="#" className="hover:text-purple-600 transition-colors">FB</a>
                        <a href="#" className="hover:text-purple-600 transition-colors">LI</a>
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 h-[780px] w-[920px] z-10">
                <img
                    src={currentHeroImage}
                    alt="Kahafil Ora"
                    className="w-full h-full object-cover"
                    onMouseEnter={() => setCurrentHeroImage('/assets/hero2.png')} // Corrected path
                    onMouseLeave={() => setCurrentHeroImage('/assets/hero1.png')} // Corrected path
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://placehold.co/920x780/ccc/333?text=Hero+Image+Error';
                    }}
                />
            </div>

            {/* ORA - now OUTSIDE the image container, at bottom right of full page */}
            <p className="absolute bottom-0 right-4 text-[150px] font-bold leading-none tracking-normal uppercase text-gray-900 z-50 pb-4">
                ORA
            </p>

            {/* KAHAFIL 2K25 + Portfolio */}
            <div className="absolute top-[120px] left-8 z-30 text-left">
                <h1 className="text-[8vw] md:text-[6vw] font-black uppercase leading-none tracking-tight text-gray-900">
                    KAHAFIL
                </h1>
                <p className="text-[3vw] md:text-[2vw] font-semibold text-gray-700 tracking-wide">
                    2K25
                </p>
                <div className="mt-8 border-l-2 border-purple-600 pl-4 py-2">
                    <a href="#" className="text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors">
                        / PORTFOLIO
                    </a>
                </div>
            </div>

            {/* Biography */}
            <div className="absolute top-[120px] right-8 z-30 text-right w-[280px] md:w-[350px]">
                <p className="text-xs uppercase font-bold text-gray-600 mb-2">Biography</p>
                <p className="text-sm leading-relaxed text-gray-800">
                    A Visionary Leader With 22+ Years of Experience In Innovation And Growth. As MD Of Goinnovior Limited And Co-Founder Of 360D Soul, Lifeinnovior, And Codeinnovior, He Blends Tech, Business, And Social Impact—Delivering ICT And InfoSec Solutions, Promoting Mental Health, And Enabling Free Tech Education.
                </p>
            </div>

            {/* IT CONSULTANT with Arrow */}
            <div className="absolute top-[56%] left-[calc(50%-450px)] transform -translate-y-1/2 z-30 font-mono text-[13px] tracking-tight flex flex-col items-start">
                <p className="mb-1 text-gray-600">IT CONSULTANT</p>
                <svg
                    width="100"
                    height="20"
                    viewBox="0 0 100 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5 10 L95 10"
                        stroke="#000"
                        strokeWidth="1.5"
                        strokeDasharray="4,4"
                        fill="none"
                        markerEnd="url(#arrowhead)"
                    />
                    <defs>
                        <marker
                            id="arrowhead"
                            markerWidth="6"
                            markerHeight="6"
                            refX="6"
                            refY="3"
                            orient="auto"
                        >
                            <polygon points="0 0, 6 3, 0 6" fill="#000" />
                        </marker>
                    </defs>
                </svg>
            </div>

            {/* Scroll Down */}
            <div className="absolute bottom-8 left-8 text-gray-600 z-30">
                <p className="text-sm uppercase font-medium mb-1">Scroll Down</p>
                <span className="text-xl">↓</span>
            </div>
        </section>
    );
};

export default Hero;
