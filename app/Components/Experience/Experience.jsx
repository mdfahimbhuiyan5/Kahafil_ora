import React from 'react';

const experiences = [
  { company: "Goinnovior Limited", role: "Founder & Managing Director", duration: "2016–Present" },
  { company: "360D Soul Limited", role: "Founder & Managing Director", duration: "2023–Present" },
  { company: "CodeInnovior", role: "Founder & Managing Director", duration: "2020–Present" },
  { company: "Skylark Soft Limited", role: "Head of Businesses", duration: "2022–2024" },
  { company: "Impress Group", role: "Head of Information Technology Operations.", duration: "2018–2022" },
  { company: "Next IT Ltd.", role: "Founder & Managing Director", duration: "2016–2018" },
  { company: "MASCO Group", role: "Head of Information Technology Department.", duration: "2010–2016" },
];

const Experience = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-white text-gray-800 w-full">
      
      {/* Heading */}
      <h2 className="text-[clamp(28px,4vw,42px)] font-semibold mb-12 lowercase font-poppins">
        <span className="text-black">leadership roles. </span>
        <span className="text-purple-600">.</span>
      </h2>

      {/* Divider */}
      <div className="border-b border-gray-300 mb-10"></div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left: Description */}
        <div className="max-w-xl">
          <p
            className="text-gray-600"
            style={{
              fontFamily: 'Poppins',
              fontWeight: 300,
              fontSize: '25px',
              lineHeight: '120%',
              letterSpacing: '0%',
              color: '#444444',
            }}
          >
            I’ve worked with companies and clients, both in agency settings. I enjoy collaborating with clients who appreciate the importance of good design.
          </p>
        </div>

        {/* Right: Experience List */}
        <div className="w-full">
          <div className="border-b border-gray-300 divide-y divide-gray-300">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 py-4 sm:items-center"
              >
                <div
                  className="text-gray-800"
                  style={{
                    fontFamily: 'Amiri',
                    fontWeight: 400,
                    fontSize: '25px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    paddingTop:'30px',
                    paddingBottom: '30px',
                    color: '#444444',
                  }}
                >
                  {exp.company}
                </div>
                <div
                  className="text-gray-600"
                  style={{
                    fontFamily: 'Amiri',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#444444',
                    paddingTop:'30px',
                    paddingBottom: '30px',
                  }}
                >
                  {exp.role}
                </div>
                <div
                  className="text-right text-gray-500"
                  style={{
                    fontFamily: 'Fragment Mono',
                    fontWeight: 400,
                    fontStyle: 'regular',
                    fontSize: '25px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    paddingTop:'30px',
                    paddingBottom: '30px',
                    color: '#444444',

                  }}
                >
                  {exp.duration}
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
