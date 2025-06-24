import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const solutionsData = [
  {
    id: 1,
    image: "/assets/solution1.png", // Corrected image path
    category: "Cybersecurity",
    date: "May 25, 2025",
    title: "Why Cybersecurity Is No Longer Optional For Businesses",
    description: "As Our World Becomes More Digital, The Threats Facing Organizations Grow More Complex And Dangerous. Cybersecurity Is No Longer A Lu...",
    link: "/articles/cybersecurity" // Updated to actual route path
  },
  {
    id: 2,
    image: "/assets/solution2.png", // Corrected image path
    category: "Education, Social Impact",
    date: "May 25, 2025",
    title: "Tech For Good: How Codeinnovior Is Shaping Future Innovators",
    description: "When We Launched Codeinnovior, The Mission Was Simple–Make Coding Fun And Accessible For Kids. Technology Shouldn't Just Be For...",
    link: "/articles/education-tech" // Updated to actual route path
  },
];

const SolutionsCreated = () => {
  return (
    // Assuming 'poppins-font' is correctly configured in your tailwind.config.js
    <section className="px-16 py-20 bg-white text-gray-800 poppins-font">
      <h2 className="text-5xl font-normal mb-16 text-gray-900 tracking-tight">
        some solutions that i created<span className="text-purple-600">.</span>
      </h2>

      {/* Navigation/Filter Bar - these remain <a> tags as they lead to general filters, not specific React Router paths */}
      <nav className="mb-12 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium uppercase text-gray-600">
        <a href="#" className="hover:text-purple-600 transition-colors duration-200">Blogs & Articles</a>
        <span className="text-gray-400">/</span>
        <a href="#" className="hover:text-purple-600 transition-colors duration-200">Public Speaking & Training</a>
        <span className="text-gray-400">/</span>
        <a href="#" className="hover:text-purple-600 transition-colors duration-200">Recent Event Activates</a>
        <span className="text-gray-400">/</span>
        <a href="#" className="hover:text-purple-600 transition-colors duration-200">Social Activities</a>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {solutionsData.map(solution => (
          <div key={solution.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <img
              src={solution.image} // Corrected image path
              alt={solution.title}
              className="w-full h-64 object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://placehold.co/600x400/efefef/666?text=Image+Not+Found';
              }}
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                <span className="uppercase tracking-wide">{solution.category}</span>
                <span>{solution.date}</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 leading-tight">
                {solution.title}
              </h3>
              <p className="text-base text-gray-600 mb-4 line-clamp-3">
                {solution.description}
              </p>
              {/* IMPORTANT: Changed <a> tag to Link component and 'href' to 'to' */}
              <Link to={solution.link} className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsCreated;
