import React from 'react';

const BrandSlider = () => {
    // Assuming one brand logo, duplicated for sliding. Place your br1.png in public/assets/
    // Duplicating logos for seamless looping in both directions. Adjust the Array(X) count
    // based on how many logos you want to be visible at once and the desired length of the loop.
    // A higher number provides a longer, smoother continuous animation.
    const brandLogos = Array(15).fill('public/assets/br1.png'); // Increased count for better loop

    return (
        // Section for "I help brands to drive results." (Auto-sliding Logos)
        <section className="relative z-0 bg-[#F5F1ED] pt-32 pb-20 px-8 md:px-20 text-gray-800 font-sans">
            <h2 className="text-5xl md:text-6xl font-normal text-gray-900 mb-20 leading-tight max-w-4xl">
                I help brands to drive results<span className="text-purple-600">.</span>
            </h2>

            {/* Brands Logos - Auto Sliding Container */}
            <div className="overflow-hidden py-4">
                <style>
                    {`
                    @keyframes slideLeft {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-100%); }
                    }
                    @keyframes slideRight {
                        0% { transform: translateX(-100%); } /* Start off-screen to the left */
                        100% { transform: translateX(0); } /* Slide back to original position */
                    }
                    .animate-slide-left {
                        animation: slideLeft 40s linear infinite; /* Adjust duration for speed */
                        display: flex; /* Ensure flex behavior for smooth sliding */
                        width: fit-content; /* Allow content to dictate width */
                    }
                    .animate-slide-right {
                        animation: slideRight 40s linear infinite; /* Adjust duration for speed */
                        display: flex; /* Ensure flex behavior for smooth sliding */
                        width: fit-content; /* Allow content to dictate width */
                        flex-direction: row-reverse; /* Ensure proper direction for reverse slide */
                    }
                    /* Ensure images don't wrap and are horizontally aligned */
                    .brand-logo-row {
                        white-space: nowrap;
                    }
                    .brand-logo-row img {
                        flex-shrink: 0; /* Prevent images from shrinking */
                    }
                    `}
                </style>

                {/* First Row: Left to Right (default slide animation) */}
                <div className="brand-logo-row">
                    <div className="animate-slide-left">
                        {/* Duplicate logos to create a seamless loop */}
                        {brandLogos.concat(brandLogos).map((logo, index) => (
                            <img
                                key={`row1-${index}`}
                                src={logo}
                                alt={`Brand Logo ${index}`}
                                className="h-16 md:h-24 inline-block mx-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300"
                                style={{ pointerEvents: 'none' }} /* Prevents interaction issues during slide */
                                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/100x50/e0e0e0/555?text=Logo+Err'; }}
                            />
                        ))}
                    </div>
                </div>

                {/* Second Row: Right to Left (reverse slide animation) */}
                {/* Added margin-top for spacing between rows */}
                <div className="brand-logo-row mt-8">
                    <div className="animate-slide-right">
                        {/* Duplicate logos, potentially reversed or ordered differently for the reverse animation effect */}
                        {brandLogos.concat(brandLogos).map((logo, index) => (
                            <img
                                key={`row2-${index}`}
                                src={logo}
                                alt={`Brand Logo ${index}`}
                                className="h-16 md:h-24 inline-block mx-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300"
                                style={{ pointerEvents: 'none' }} /* Prevents interaction issues during slide */
                                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/100x50/e0e0e0/555?text=Logo+Err'; }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandSlider;
