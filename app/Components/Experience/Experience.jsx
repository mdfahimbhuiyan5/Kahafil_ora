import React from 'react';

const experiences = [
  { company: "Goinnovior Limited", role: "Founder & Managing Director", duration: "2016-Present" },
  { company: "360D Soul Limited", role: "Founder & Managing Director", duration: "2023-Present" },
  { company: "CodeInnovior", role: "Founder & Managing Director", duration: "2020-Present" },
  { company: "Skylark Soft Limited", role: "Head of Businesses", duration: "2022-2024" },
  { company: "Impress Group", role: "Head of Information Technology Operations.", duration: "2018-2022" },
  { company: "Next IT Ltd.", role: "Founder & Managing Director", duration: "2016-2018" },
  { company: "MASCO Group", role: "Head of Information Technology Department.", duration: "2010-2016" },
];

const Experience = () => {
  return (
    <section className="px-16 py-20 bg-white text-gray-800 font-sans">
      {/* Heading with Poppins font only for the word "experience" */}
      <h2 className="mb-16">
        <span className="experience-heading">experience</span>
        <span className="experience-heading text-purple-600">.</span>
      </h2>

      {/* Horizontal divider */}
      <div className="border-b border-gray-300 mb-8"></div>

      {/* Experience content in 2-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Description column */}
        <div className="col-span-1 max-w-sm">
          <p className="text-lg text-gray-600 leading-relaxed">
            I’ve worked with companies and clients, both in agency settings. I enjoy collaborating with clients who appreciate the importance of good design.
          </p>
        </div>

        {/* Experiences column */}
        <div className="col-span-1">
          <div className="border-b border-gray-300 divide-y divide-gray-300">
            {experiences.map((exp, idx) => (
              <div key={idx} className="grid grid-cols-3 py-4 items-center">
                <div className="col-span-1">
                  <h4 className="text-base font-normal text-gray-800">{exp.company}</h4>
                </div>
                <div className="col-span-1">
                  <p className="text-base text-gray-600">{exp.role}</p>
                </div>
                <div className="col-span-1 text-right">
                  <span className="text-base text-gray-500">{exp.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
