import React, { useState } from 'react';

const SolutionsShowcase = () => {
    // State for solutions images and content (assuming you'll have b1.png, b2.png etc. in public/assets/)
    // For demonstration, I'm using placeholder images and content.
    // Replace 'b1.png', 'b2.png' etc. with your actual image file names.
    const solutionsData = [
        {
            id: 1,
            defaultImage: 'public/assets/b1.png', // Placeholder, replace with your actual image
            hoverImage: 'public/assets/b1.png', // Placeholder, replace with your actual hover image
            category: 'DIGITAL TRANSFORMATION',
            strategy: 'STRATEGY',
            description: 'Helping Businesses Modernize Operations Through Tailored Digital Adoption Plans - Enh.',
            link: '#'
        },
        {
            id: 2,
            defaultImage: 'public/assets/b2.png', // Placeholder
            hoverImage: 'public/assets/b2.png', // Placeholder
            category: 'IT INFRASTRUCTURE &',
            strategy: 'CYBERSECURITY',
            description: 'Providing Expert Advice On Building Scalable, Secure Infrastructure—Covering network setu..',
            link: '#'
        },
        {
            id: 3,
            defaultImage: 'public/assets/b3.png', // Placeholder
            hoverImage: 'public/assets/b3.png', // Placeholder
            category: 'STARTUP & INNOVATION',
            strategy: 'COACHING',
            description: 'Guiding Early-Stage Founders With Business Modeling, Product-Market Fit, Branding, Team..',
            link: '#'
        },
        {
            id: 4,
            defaultImage: 'public/assets/b4.png', // Placeholder
            hoverImage: 'public/assets/b4.png', // Placeholder
            category: 'EDTECH & LEARNING PROGRAM',
            strategy: 'DESIGN',
            description: 'Designing Educational Platforms And Training Programs For Institutions That Want To Empa..',
            link: '#'
        },
        {
            id: 5,
            defaultImage: 'apublic/assets/b5.png', // New placeholder image
            hoverImage: 'public/assets/b5.png', // New placeholder hover image
            category: 'CORPORATE IT TRAINING &',
            strategy: 'WORKSHOPS',
            description: 'Delivering Customized Training For Mid-Level Managers And Teams On Topics Like Digital T..',
            link: '#'
        },
        {
            id: 6,
            defaultImage: 'public/assets/b6.png', // New placeholder image
            hoverImage: 'publicrun/assets/b6.png', // New placeholder hover image
            category: 'HR & TALENT STRATEGY FOR TECH',
            strategy: 'TEAMS',
            description: 'Attaining Organizations On How To Hire, Train, And Retain Top Technical Talent—Focusing O..',
            link: '#'
        },
        // Add more solutions (b7 etc.) here following this structure if needed.
    ];

    // State to manage the starting index of the visible solutions
    const [startIndex, setStartIndex] = useState(0);
    const cardsPerPage = 4; // Display 4 cards at a time

    // Calculate the subset of solutions to display based on startIndex
    // const visibleSolutions = solutionsData.slice(startIndex, startIndex + cardsPerPage); // No longer needed for mapping all items

    // Handle navigation to the next set of cards - now moves by cardsPerPage
    const handleNext = () => {
        setStartIndex(prevIndex => Math.min(prevIndex + cardsPerPage, solutionsData.length - cardsPerPage));
    };

    // Handle navigation to the previous set of cards - now moves by cardsPerPage
    const handlePrev = () => {
        setStartIndex(prevIndex => Math.max(prevIndex - cardsPerPage, 0));
    };

    // Calculate the transform value. Each card is 1/4 of the width, plus a gap (2rem for gap-8)
    // For 4 cards, there are 3 gaps. So each card effectively takes 25% + (3/4)*gap.
    // Or, more simply, the percentage slide is (startIndex / total_cards_in_row) * 100%.
    // And then add the cumulative gap size.
    // Tailwind's gap-8 is 2rem (32px).
    const gapSize = 2; // in rem, for gap-8

    return (
        // Section for "Creating Excellence Through Collaboration and Innovation"
        <section className="relative z-0 bg-[#F5F1ED] pt-32 pb-20 px-8 md:px-20 text-gray-800 font-sans">
            {/* Heading and Navigation Arrows */}
            <div className="flex justify-between items-end mb-8">
                <h2 className="text-5xl md:text-6xl font-normal text-gray-900 leading-tight max-w-4xl pr-8">
                    creating excellence through collaboration and innovation<span className="text-purple-600">.</span>
                </h2>
                {/* Navigation Arrows - now control the card slider */}
                <div className="flex space-x-4 mb-8">
                    <button
                        onClick={handlePrev}
                        disabled={startIndex === 0} // Disable prev button at the beginning
                        className="p-3 border border-gray-900 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={startIndex >= solutionsData.length - cardsPerPage} // Disable next button at the end
                        className="p-3 border border-gray-900 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </div>
            </div>
            <div className="border-b border-gray-300 w-full mb-16"></div> {/* Divider */}

            {/* Solutions Carousel Container */}
            <div className="relative overflow-hidden">
                <div
                    className="flex flex-nowrap transition-transform duration-300 ease-in-out"
                    // The transform now shifts by the width of 'cardsPerPage' items plus their internal gaps
                    // Each card will have a width that makes 4 fit in the viewport
                    style={{
                        transform: `translateX(calc(-${startIndex * (100 / cardsPerPage)}% - ${startIndex * gapSize}rem))`,
                        // Set width to accommodate all cards + gaps without wrapping
                        width: `calc(${solutionsData.length * (100 / cardsPerPage)}% + ${solutionsData.length * gapSize}rem)`
                    }}
                >
                    {solutionsData.map((solution, index) => (
                        <div
                            key={solution.id}
                            className="relative bg-white rounded-lg shadow-md overflow-hidden group border border-gray-200 flex-shrink-0"
                            // Set width of each card: 1/4 of parent width minus a portion of the gap
                            // For 4 cards and a 2rem gap, the total gap for 4 cards is 3 * 2rem = 6rem.
                            // So each card needs to take (100% - 6rem) / 4 = 25% - 1.5rem.
                            // We will use a fixed margin-right to create the gap.
                            style={{
                                width: `calc(25% - ${gapSize * 0.75}rem)`, // 25% minus (3/4 * gap size)
                                marginRight: index < solutionsData.length - 1 ? `${gapSize}rem` : '0', // Apply margin-right to all but the last card
                            }}
                        >
                            {/* Image container with hover effect */}
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
