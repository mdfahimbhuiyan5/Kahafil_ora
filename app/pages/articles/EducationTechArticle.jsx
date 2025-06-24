import React from 'react';

const EducationTechArticle = () => {
  return (
    <div className="bg-white text-gray-800 font-sans px-6 md:px-20 py-20">
      {/* Article Header */}
      <header className="max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
          Tech For Good: How Codeinnovior Is Shaping Future Innovators
          <span className="text-purple-600">.</span>
        </h1>
        <p className="text-lg text-gray-600">
          Codeinnovior is revolutionizing education by making coding fun and accessible for children, fostering innovation from a young age.
        </p>
        <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
          <span>Category: Education, Social Impact</span>
          <span>Published: May 25, 2025</span>
        </div>
      </header>

      {/* Main Article Content */}
      <article className="max-w-4xl mx-auto prose prose-lg">
        {/* Hero Image */}
        <img
          src="/assets/solution2.png" // Use root-relative path
          alt="Education Tech"
          className="w-full h-96 object-cover rounded-xl shadow-md mb-8"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://placehold.co/1200x600/efefef/666?text=Image+Not+Found';
          }}
        />

        <p>
          When we launched Codeinnovior, the mission was simple – make coding fun and accessible for kids. Technology shouldn't just be for a select few; it should be a universal language that empowers the next generation to create, innovate, and solve real-world problems. We believe that by instilling computational thinking skills early, we are not just teaching kids to code, but teaching them to think critically and creatively.
        </p>
        <p>
          Our unique approach combines gamified learning, interactive projects, and mentorship from experienced developers. This creates an engaging environment where children can experiment, fail safely, and learn from their mistakes – all crucial elements for fostering true innovation. We've seen incredible results, with students developing their own simple apps, games, and even contributing to open-source projects.
        </p>
        <blockquote>
          "The best way to predict the future is to create it. And our children are the creators of tomorrow."
        </blockquote>
        <p>
          Codeinnovior is more than just a coding platform; it's a community. We organize regular hackathons, workshops, and online challenges to keep the students engaged and connect them with peers who share similar interests. This social learning aspect is vital in building confidence and collaborative skills, preparing them for the demands of future careers in technology.
        </p>
        <p>
          The impact goes beyond just technical skills. We've seen an increase in problem-solving abilities, logical reasoning, and perseverance among our students. By equipping them with the tools and mindset of innovators, Codeinnovior is contributing to a future where technology is used for social good and progress. We are shaping not just coders, but future leaders who will drive positive change in the world.
        </p>
      </article>
    </div>
  );
};

export default EducationTechArticle;
