import React, { useState } from 'react';

const Hero = () => {
    const [currentHeroImage, setCurrentHeroImage] = useState('/assets/hero1.png');

    return (
        // Ensured font-amiri is applied to the entire section for consistent styling
        <section className="relative min-h-screen w-full bg-[#EFEAE4] text-gray-800 font-amiri overflow-hidden">
            
            {/* Background Image with low opacity */}
            <div
                className="absolute top-0 left-0 w-full h-full z-0"
                style={{
                    backgroundImage: 'url(/assets/polytech.jpg)', // Background image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.3, // Lower opacity for the background image
                }}
            ></div>

            {/* Top Navigation */}
            {/* Using standard Tailwind spacing values for better responsiveness */}
            <div className="absolute top-4 left-0 w-full z-40 flex items-center justify-between px-8 text-sm md:text-lg uppercase font-medium text-gray-900">
                <div className="flex space-x-24 md:space-x-32 lg:space-x-40">
                    <a href="#" className="hover:text-purple-600 transition-colors">WORK</a>
                    <a href="#" className="hover:text-purple-600 transition-colors">ABOUT</a>
                </div>
                <div className="flex ml-auto items-center">
                    <a href="#" className="hover:text-purple-600 transition-colors mr-8 md:mr-16 lg:mr-24">THOUGHTS</a>
                    <a href="#" className="hover:text-purple-600 transition-colors">MAIL</a>
                    <div className="flex space-x-4 ml-4">
                        <a href="#" className="hover:text-purple-600 transition-colors">X</a>
                        <a href="#" className="hover:text-purple-600 transition-colors">FB</a>
                        <a href="#" className="hover:text-purple-600 transition-colors">LI</a>
                    </div>
                </div>
            </div>

            {/* Hero Image - Adjusted to be more responsive */}
            {/* Uses max-w-[920px] and w-[90vw] to scale with viewport, h-auto to maintain aspect ratio */}
            <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 max-w-[920px] w-[90vw] h-auto max-h-[780px] z-10">
                <img
                    src={currentHeroImage}
                    alt="Kahafil Ora"
                    className="w-full h-full object-cover"
                    onMouseEnter={() => setCurrentHeroImage('/assets/hero2.png')}
                    onMouseLeave={() => setCurrentHeroImage('/assets/hero1.png')}

                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://placehold.co/920x780/ccc/333?text=Hero+Image+Error';
                    }}
                />
            </div>

            {/* ORA */}
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
                {/* Portfolio section with vertical line and text */}
                <div className="mt-8 flex flex-col items-start justify-center">
                    <div className="w-[2px] h-35 bg-gray-600 mb-5 ml-5"></div> {/* Vertical line */}
                    <a
                        href="#"
                        className="text-xl font-medium text-gray-700 hover:text-purple-600 transition-colors ml-2"
                        style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }} // Vertical text style
                    >
                        / PORTFOLIO
                    </a>
                </div>
            </div>

            {/* Updated Visionary Leader Text with Title */}
            {/* Positioned responsively from the right edge, text size adjusted */}
            <div
                className="absolute z-30 text-right font-jakarta top-[160px] right-5" // Changed right-8 to right-0 for more right
                style={{
                    width: 'clamp(280px, 35vw, 600px)', // Slightly reduced max-width and vw to make it smaller
                    height: '160px',
                    gap: '5px',
                    fontSize: '20px',
                    letterSpacing: '0.01em',
                    lineHeight: '160%',
                    fontWeight: '400',
                }}
            >
                <p className="text-lg font-bold uppercase text-gray-500 opacity-40 mb-2">
                    Biography
                </p>
                <p className="text-[18px] md:text-[22px] leading-snug text-gray-800 font-normal tracking-wide"> {/* Reduced font size for smaller text */}
                    A Visionary Leader With 22+ Years of Experience In Innovation And Growth. As MD Of Goinnovior Limited And Co-Founder Of 360D Soul, Lifeinnovior, And Codeinnovior, He Blends Tech, Business, And Social Impact—Delivering ICT And InfoSec Solutions, Promoting Mental Health, And Enabling Free Tech Education.
                </p>
            </div>

            {/* IT Consultant with Curved Arrow - Responsive Positioning */}
            {/* Adjusted left positioning to use responsive Tailwind classes instead of fixed calc() */}
            <div className="absolute top-[56%] left-8 md:left-20 lg:left-60 transform -translate-y-1/2 z-30 font-mono text-[25px] tracking-tight flex items-center">
                <p className="mt-42 text-gray-600 mr-2" >IT CONSULTANT</p>
                <svg
                    width="120"
                    height="60"
                    viewBox="0 0 120 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-42"
                >
                    <path
                        d="M110 30 Q 90 5, 70 30 Q 50 55, 30 30 L 5 30"
                        stroke="#000"
                        strokeWidth="1.5"
                        strokeDasharray="4,4"
                        fill="none"
                        markerEnd="url(#arrowhead-curve)"
                    />
                    <defs>
                        <marker
                            id="arrowhead-curve"
                            markerWidth="6"
                            markerHeight="6"
                            refX="0"
                            refY="3"
                            orient="auto"
                        >
                            <polygon points="6 0, 0 3, 6 6" fill="#000" />
                        </marker>
                    </defs>
                </svg>
            </div>

            {/* Scroll Down */}
            <div className="absolute bottom-8 left-8 text-gray-600 z-30">
                <p className="text-sm uppercase font-medium mb-1 ">Scroll Down</p>
                <span className="text-xl">↓</span>
            </div>

        </section>
    );
};

export default Hero;
