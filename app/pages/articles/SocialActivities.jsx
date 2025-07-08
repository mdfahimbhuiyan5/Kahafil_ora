import React from 'react';

const SocialActivities = () => {
  return (
    <div className="bg-white text-gray-800 font-sans px-6 md:px-20 py-20">
      {/* Page Header */}
      <header className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
          Social Activities<span className="text-purple-600">.</span>
        </h1>
        <p className="text-lg text-gray-600">
          Highlights from our community engagement and social impact initiatives.
        </p>
      </header>

      {/* Articles Container - now a grid to display them side-by-side on larger screens */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        
        {/* Article 1: Empowering Fresh Graduates: How Goinnovior Is Shaping Tomorrow’s Tech Leaders */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          {/* Image wrapper with specified dimensions, border-radius, shadow, and margin */}
          <div className="w-full h-[400px] rounded-[20px] overflow-hidden shadow-md mb-8">
            <img
              src="/assets/image_de7a9a.png" // Assuming this is the image for the first article
              alt="Empowering Fresh Graduates"
              className="w-full h-full object-cover" // Image fills the container
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/695x400/efefef/666?text=Image+Not+Found'; }}
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3 leading-tight">
              Empowering Fresh Graduates: How Goinnovior Is Shaping Tomorrow’s Tech Leaders
            </h2>
            <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
              <span className="uppercase tracking-wide">Training & Education</span>
              <span>May 25, 2025</span>
            </div>
            <p className="text-base text-gray-600 mb-4 line-clamp-3">
              Working With Fresh Graduates To Prepare Them For The Tech industry Is A Crucial Step Toward Driving Nationwide Growth. At Goinnovior I.L...
            </p>
            <a href="https://www.facebook.com/your-goinnovior-link" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200">
              Read On Facebook →
            </a>
          </div>
        </article>

        {/* Article 2: Coding The Future: Why Early Tech Education Matters For Students Today */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          {/* Image wrapper with specified dimensions, border-radius, shadow, and margin */}
          <div className="w-full h-[400px] rounded-[20px] overflow-hidden shadow-md mb-8">
            <img
              src="/assets/image_0426f8.png" // Assuming this is the image for the second article
              alt="Coding The Future"
              className="w-full h-full object-cover" // Image fills the container
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/695x400/efefef/666?text=Image+Not+Found'; }}
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3 leading-tight">
              Coding The Future: Why Early Tech Education Matters For Students Today
            </h2>
            <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
              <span className="uppercase tracking-wide">Education, Social Impact</span>
              <span>May 25, 2025</span>
            </div>
            <p className="text-base text-gray-600 mb-4 line-clamp-3">
              In Today’s Fast-Paced, Technology-Driven World, Digital Proficiency Is No Longer A Luxury—It’s A Necessity. As A Technology Enthusiast Dedic...
            </p>
            <a href="https://www.facebook.com/your-coding-future-link" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200">
              Read On Facebook →
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SocialActivities;
