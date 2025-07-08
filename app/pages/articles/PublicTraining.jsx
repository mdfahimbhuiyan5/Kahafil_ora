import React from 'react';

const PublicTraining = () => {
  return (
    <div className="bg-white text-gray-800 font-sans px-6 md:px-20 py-20">
      {/* Page Header */}
      <header className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
          Public Speaking & Training<span className="text-purple-600">.</span>
        </h1>
        <p className="text-lg text-gray-600">
          Insights and experiences from various public speaking engagements and training initiatives.
        </p>
      </header>

      {/* Articles Container - now a grid to display them side-by-side on larger screens */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        
        {/* Article 1: Cyber Talk On ATN Bangla */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <img
            src="/assets/cyber-talk.png" // Placeholder. Ensure this image is in public/assets/
            alt="Cyber Talk On ATN Bangla"
            className="w-full h-64 object-contain rounded-xl shadow-md mb-8" // Changed h-96 to h-64 and object-cover to object-contain
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/600x400/efefef/666?text=Image+Not+Found'; }}
          />
          <div className="p-6"> {/* Added padding to the content inside the card */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-3 leading-tight"> {/* Adjusted font size and weight */}
              Cyber Talk On ATN Bangla
            </h2>
            <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
              <span className="uppercase tracking-wide">Cybersecurity</span> {/* Adjusted category text */}
              <span>May 25, 2025</span>
            </div>
            <p className="text-base text-gray-600 mb-4 line-clamp-3"> {/* Added line-clamp-3 for concise description */}
              As our world becomes more digital, the threats facing organizations grow more complex and dangerous. Cybersecurity is no longer a luxury for large corporations; it's a critical necessity for businesses of all sizes. The proliferation of data, cloud computing, and remote work has expanded the attack surface, making every company a potential target for cybercriminals.
            </p>
            <a href="https://www.facebook.com/your-cyber-talk-link" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200">
              Watch On Facebook →
            </a>
          </div>
        </article>

        {/* Article 2: Training @ Skylark Soft Limited */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <img
            src="/assets/skylark-training.png" // Placeholder. Ensure this image is in public/assets/
            alt="Training @ Skylark Soft Limited"
            className="w-full h-64 object-contain rounded-xl shadow-md mb-8" // Changed h-96 to h-64 and object-cover to object-contain
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://placehold.co/600x400/efefef/666?text=Image+Not+Found'; }}
          />
          <div className="p-6"> {/* Added padding to the content inside the card */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-3 leading-tight"> {/* Adjusted font size and weight */}
              Training @ Skylark Soft Limited
            </h2>
            <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
              <span className="uppercase tracking-wide">Training & Learning</span> {/* Adjusted category text */}
              <span>May 25, 2025</span>
            </div>
            <p className="text-base text-gray-600 mb-4 line-clamp-3"> {/* Added line-clamp-3 for concise description */}
              When we launched Codeinnovior, the mission was simple – make coding fun and accessible for kids. Technology shouldn't just be for a select few; it should be a universal language that empowers the next generation to create, innovate, and solve real-world problems. This training session at Skylark Soft Limited focused on empowering young minds with essential coding skills.
            </p>
            <a href="https://www.linkedin.com/your-skylark-training-link" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200">
              Watch & Read On LinkedIn →
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PublicTraining;
