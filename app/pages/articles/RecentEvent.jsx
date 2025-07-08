import React from 'react';

const RecentEvent = () => {
  return (
    <div className="bg-white text-gray-800 font-sans px-6 md:px-20 py-20">
      {/* Page Header */}
      <header className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
          Recent Event Activates<span className="text-purple-600">.</span>
        </h1>
        <p className="text-lg text-gray-600">
          Highlights from recent events, speaking engagements, and community activities.
        </p>
      </header>

      {/* Articles Container - now a grid to display them side-by-side on larger screens */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        
        {/* Article 1: Honored to Speak at Job Fest 'চাকরি মেলা ২০২৫' */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="w-full h-[400px] rounded-[20px] overflow-hidden"> {/* Image wrapper with specified dimensions and border-radius */}
            <img
              src="/assets/image_712805.jpg" // Assuming this is the image for the first article
              alt="Honored to Speak at Job Fest"
              className="w-full h-full object-cover" // Image fills the container
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/695x400/efefef/666?text=Image+Not+Found'; }}
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3 leading-tight">
              Honored to Speak at Job Fest 'চাকরি মেলা ২০২৫'
            </h2>
            <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
              <span className="uppercase tracking-wide">Leadership & Soft Skills</span>
              <span>May 25, 2025</span>
            </div>
            <p className="text-base text-gray-600 mb-4 line-clamp-3">
              On February 22, 2025, I Had The Privilege Of Being A Panel Speaker On 'Leadership & Soft Skills' At Job Fest চাকরি মেলা ২০২৫ Organized By Daf...
            </p>
            <a href="https://www.facebook.com/your-job-fest-link" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200">
              Read On Facebook →
            </a>
          </div>
        </article>

        {/* Article 2: আইটি প্রফেশনালস মিটআপ */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="w-full h-[400px] rounded-[20px] overflow-hidden"> {/* Image wrapper with specified dimensions and border-radius */}
            <img
              src="/assets/image_017fbf.png" // Assuming this is the image for the second article
              alt="IT Professionals Meetup"
              className="w-full h-full object-cover" // Image fills the container
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/695x400/efefef/666?text=Image+Not+Found'; }}
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3 leading-tight">
              আইটি প্রফেশনালস মিটআপ
            </h2>
            <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
              <span className="uppercase tracking-wide">Education, Social Impact</span>
              <span>May 25, 2025</span>
            </div>
            <p className="text-base text-gray-600 mb-4 line-clamp-3">
              দেশের আইটি খাতের ১০০ জন আইটি পেশােফনালকে বিষেশ দক্ষতা উন্নয়ন প্রশিক্ষণ দেওয়া হয়েছে...
            </p>
            <a href="https://www.facebook.com/your-meetup-link" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200">
              Read On Facebook →
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default RecentEvent;
