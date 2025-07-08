import React, { useState } from 'react'; // Import useState

// Data for the solution cards with updated image names and links to new pages
const solutionsData = [
    {
        id: 1,
        image: "/assets/solution1.png", // Corrected image path
        category: "Blogs & Articles", // Changed to match category name in navigation
        date: "May 25, 2025",
        title: "Why Cybersecurity Is No Longer Optional For Businesses",
        description: "As Our World Becomes More Digital, The Threats Facing Organizations Grow More Complex And Dangerous. Cybersecurity Is No Longer A Lu...",
        link: "/articles/cybersecurity" // Updated to actual route path
    },
    {
        id: 2,
        image: "/assets/solution2.png", // Corrected image path
        category: "Blogs & Articles", // Changed to match category name in navigation
        date: "May 25, 2025",
        title: "Tech For Good: How Codeinnovior Is Shaping Future Innovators",
        description: "When We Launched Codeinnovior, The Mission Was Simple–Make Coding Fun And Accessible For Kids. Technology Shouldn't Just Be For...",
        link: "/articles/education-tech" // Updated to actual route path
    },
    {
        id: 3,
        image: "/assets/cyber-talk.png", // Placeholder. Ensure this image is in public/assets/
        category: "Public Speaking & Training", // This category will now filter on the same page
        date: "May 25, 2025",
        title: "Cyber Talk On ATN Bangla",
        description: "As Our World Becomes More Digital, The Threats Facing Organizations Grow More Complex And Dangerous. Cybersecurity Is No Longer A Lu...",
        link: "/articles/public-speaking-training" // This link is now for the individual article, not the category filter
    },
    {
        id: 4,
        image: "/assets/skylark-training.png", // Placeholder. Ensure this image is in public/assets/
        category: "Public Speaking & Training", // This category will now filter on the same page
        date: "May 25, 2025",
        title: "Training @ Skylark Soft Limited",
        description: "When We Launched Codeinnovior, The Mission Was Simple–Make Coding Fun And Accessible For Kids. Technology Shouldn't Just Be For...",
        link: "/articles/public-speaking-training" // This link is now for the individual article, not the category filter
    },
    {
        id: 5,
        image: "/assets/image_712805.png", // Updated to actual image from RecentEvent.jsx
        category: "Recent Event Activates",
        date: "May 25, 2025", // Updated date to match RecentEvent.jsx
        title: "Honored to Speak at Job Fest 'চাকরি মেলা ২০২৫'", // Updated title from RecentEvent.jsx
        description: "On February 22, 2025, I Had The Privilege Of Being A Panel Speaker On 'Leadership & Soft Skills' At Job Fest চাকরি মেলা ২০২৫ Organized By Daf...", // Updated description from RecentEvent.jsx
        link: "#"
    },
    {
        id: 6,
        image: "/assets/image_017fbf.png", // Updated to actual image from RecentEvent.jsx
        category: "Recent Event Activates",
        date: "May 25, 2025", // Updated date to match RecentEvent.jsx
        title: "আইটি প্রফেশনালস মিটআপ", // Updated title from RecentEvent.jsx
        description: "দেশের আইটি খাতের ১০০ জন আইটি পেশােফনালকে বিষেশ দক্ষতা উন্নয়ন প্রশিক্ষণ দেওয়া হয়েছে...", // Updated description from RecentEvent.jsx
        link: "#" 
    },
     {
        id: 7, // New ID for a Social Activities article
        image: "/assets/image_de7a9a.png", // Updated to actual image for Social Activities
        category: "Social Activities",
        date: "May 25, 2025",
        title: "Empowering Fresh Graduates: How Goinnovior Is Shaping Tomorrow’s Tech Leaders",
        description: "Working With Fresh Graduates To Prepare Them For The Tech industry Is A Crucial Step Toward Driving Nationwide Growth. At Goinnovior I.L...",
        link: "#" // Updated to actual route path for SocialActivities.jsx
    },
     {
        id: 8, // New ID for another Social Activities article
        image: "/assets/image_0426f8.png", // Updated to actual image for Social Activities
        category: "Social Activities",
        date: "May 25, 2025",
        title: "Coding The Future: Why Early Tech Education Matters For Students Today",
        description: "In Today’s Fast-Paced, Technology-Driven World, Digital Proficiency Is No Longer A Luxury—It’s A Necessity. As A Technology Enthusiast Dedic...",
        link: "#" // Updated to actual route path for SocialActivities.jsx
    },
];

const SolutionsCreated = () => {
    // State to manage the active filter category. 'Blogs & Articles' by default.
    const [activeCategory, setActiveCategory] = useState('Blogs & Articles'); 

    // Filter the solutions based on the activeCategory
    const filteredSolutions = solutionsData.filter(solution => solution.category === activeCategory);

    // List of available categories for the navigation
    const categories = [
        'Blogs & Articles',
        'Public Speaking & Training',
        'Recent Event Activates',
        'Social Activities'
    ];

    return (
        // Assuming 'poppins-font' is correctly configured in your tailwind.config.js
        <section className="px-16 py-20 bg-white text-gray-800 poppins-font">
            <h2 className="text-5xl font-normal mb-16 text-gray-900 tracking-tight">
                some solutions that i created<span className="text-purple-600">.</span>
            </h2>

            {/* Navigation/Filter Bar */}
            <nav className="mb-12 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium uppercase text-gray-600">
                {categories.map(category => (
                    <React.Fragment key={category}>
                        {/* All category links now filter on the same page */}
                        <a
                            href="#" // Prevent actual navigation
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default link behavior
                                setActiveCategory(category); // Set the active category for filtering
                            }}
                            className={`hover:text-purple-600 transition-colors duration-200 ${
                                activeCategory === category ? 'text-purple-600 font-semibold' : '' // Highlight active category
                            }`}
                        >
                            {category}
                        </a>
                        {/* Add separator only if it's not the last category */}
                        {category !== categories[categories.length - 1] && (
                            <span className="text-gray-400">/</span>
                        )}
                    </React.Fragment>
                ))}
            </nav>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredSolutions.length > 0 ? (
                    filteredSolutions.map(solution => (
                        <div key={solution.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                            {/* Image Wrapper: Ensures consistent height and overflow handling */}
                            {/* Applied width, height, and border-radius to this div */}
                            <div className="w-[695px] h-[400px] rounded-[20px] overflow-hidden">
                                <img
                                    src={solution.image}
                                    alt={solution.title}
                                    className="w-full h-full object-cover" // Image fills the new fixed-size container
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = 'https://placehold.co/600x400/efefef/666?text=Image+Not+Found';
                                    }}
                                />
                            </div>
                            <div className="p-6">
                                {/* Category and Date */}
                                <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                                    <span className="uppercase tracking-wide">{solution.category}</span>
                                    <span>{solution.date}</span>
                                </div>
                                {/* Title */}
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3 leading-tight">
                                    {solution.title}
                                </h3>
                                {/* Description */}
                                <p className="text-base text-gray-600 mb-4 line-clamp-3">
                                    {solution.description}
                                </p>
                                {/* Read More Link - still navigates to specific article pages if defined */}
                                <a href={solution.link} className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200">
                                    Read More →
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-600">No articles found for this category.</p>
                )}
            </div>
        </section>
    );
};

export default SolutionsCreated;
