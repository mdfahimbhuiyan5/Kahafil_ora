import React, { useState } from 'react';

const SolutionsShowcase = () => {
    const solutionsData = [
        {
            id: 1,
            defaultImage: '/assets/b1.png', // Corrected path
            hoverImage: '/assets/b1.png', // Set distinct hover image if needed
            category: 'DIGITAL TRANSFORMATION',
            strategy: 'STRATEGY',
            description: 'Helping Businesses Modernize Operations Through Tailored Digital Adoption Plans.',
            link: '#'
        },
        {
            id: 2,
            defaultImage: '/assets/b2.png', // Corrected path
            hoverImage: '/assets/b2.png', // Set distinct hover image if needed
            category: 'IT INFRASTRUCTURE &',
            strategy: 'CYBERSECURITY',
            description: 'Providing Expert Advice On Building Scalable, Secure Infrastructure.',
            link: '#'
        },
        {
            id: 3,
            defaultImage: '/assets/b3.png', // Corrected path
            hoverImage: '/assets/b3.png', // Set distinct hover image if needed
            category: 'STARTUP & INNOVATION',
            strategy: 'COACHING',
            description: 'Guiding Early-Stage Founders With Business Modeling, Product-Market Fit.',
            link: '#'
        },
        {
            id: 4,
            defaultImage: '/assets/b4.png', // Corrected path
            hoverImage: '/assets/b4.png', // Set distinct hover image if needed
            category: 'EDTECH & LEARNING PROGRAM',
            strategy: 'DESIGN',
            description: 'Designing Educational Platforms For Institutions That Want To Empower Students.',
            link: '#'
        },
        {
            id: 5,
            defaultImage: '/assets/b5.png', // Corrected path
            hoverImage: '/assets/b5.png', // Set distinct hover image if needed
            category: 'CORPORATE IT TRAINING &',
            strategy: 'WORKSHOPS',
            description: 'Delivering Customized Training For Mid-Level Managers.',
            link: '#'
        },
        {
            id: 6,
            defaultImage: '/assets/b6.png', // Corrected path
            hoverImage: '/assets/b6.png', // Set distinct hover image if needed
            category: 'HR & TALENT STRATEGY FOR TECH',
            strategy: 'TEAMS',
            description: 'Helping Organizations Hire, Train, And Retain Top Technical Talent.',
            link: '#'
        }
    ];

    const [startIndex, setStartIndex] = useState(0);
    const cardsPerPage = 4;

    const handleNext = () => {
        setStartIndex(prevIndex => Math.min(prevIndex + cardsPerPage, solutionsData.length - cardsPerPage));
    };

    const handlePrev = () => {
        setStartIndex(prevIndex => Math.max(prevIndex - cardsPerPage, 0));
    };

    const gapSize = 2;

    return (
        <section className="relative z-0 bg-[#F5F1ED] pt-32 pb-20 px-8 md:px-20 text-gray-800 font-sans">
            <div className="flex justify-between items-end mb-8">
                <h2 className="text-5xl md:text-6xl font-normal text-gray-900 leading-tight max-w-4xl pr-8">
                    Creating Excellence Through Collaboration and Innovation<span className="text-purple-600">.</span>
                </h2>
                <div className="flex space-x-4 mb-8">
                    <button
                        onClick={handlePrev}
                        disabled={startIndex === 0}
                        className="p-3 border border-gray-900 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={startIndex >= solutionsData.length - cardsPerPage}
                        className="p-3 border border-gray-900 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </div>
            </div>
            <div className="border-b border-gray-300 w-full mb-16"></div>

            <div className="relative overflow-hidden">
                <div
                    className="flex flex-nowrap transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(calc(-${startIndex * (100 / cardsPerPage)}% - ${startIndex * gapSize}rem))`,
                        width: `calc(${solutionsData.length * (100 / cardsPerPage)}% + ${solutionsData.length * gapSize}rem)`
                    }}
                >
                    {solutionsData.map((solution, index) => (
                        <div
                            key={solution.id}
                            className="relative bg-white rounded-lg shadow-md overflow-hidden group border border-gray-200 flex-shrink-0"
                            style={{
                                width: `calc(25% - ${gapSize * 0.75}rem)`,
                                marginRight: index < solutionsData.length - 1 ? `${gapSize}rem` : '0',
                            }}
                        >
                            <div className="relative w-full h-48 overflow-hidden">
                                <img
                                    src={solution.defaultImage}
                                    alt={solution.category}
                                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/400x300/e0e0e0/555?text=Img+Err'; }}
                                />
                                <img
                                    src={solution.hoverImage}
                                    alt={solution.category + " Hover"}
                                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/400x300/e0e0e0/555?text=Hover+Img+Err'; }}
                                />
                            </div>
                            <div className="p-6">
                                <p className="text-sm uppercase font-semibold text-gray-600">{solution.category}</p>
                                <p className="text-sm uppercase font-semibold text-gray-600 mb-4">{solution.strategy}</p>
                                <p className="text-base text-gray-700 mb-4 line-clamp-3">{solution.description}</p>
                                <a href={solution.link} className="text-purple-600 text-sm font-medium hover:underline">
                                    Learn More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsShowcase;
