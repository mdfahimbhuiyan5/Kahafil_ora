import React from "react";
import { FaCrown } from "react-icons/fa";

const awards = [
  { org: "SkillJobs", title: "Panelist, IT Job Fair", year: "2024" },
  { org: "IBA, University of Dhaka", title: "ACMP 4.0", year: "2025" },
  { org: "SkillJobs", title: "Speaker, Chakrimela 2025", year: "2025" },
];

const MetricMarvels = () => {
  return (
    <section className="bg-[#f5f1ed] py-16 px-6 md:px-20 text-gray-800">
      <h2 className="mb-12 text-gray-900">
        <span className="metric-heading">metric marvels</span>
        <span className="metric-heading text-purple-600">.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Block */}
        <div className="flex flex-col gap-4">
          <FaCrown className="text-4xl text-gray-700" />
          <div className="text-xs uppercase tracking-widest text-gray-500">
            Awards & Recognition
          </div>
          <div className="text-5xl font-semibold text-gray-900">50+</div>
        </div>

        {/* Right Block - Table Style */}
        <div className="md:col-span-2 w-full">
          <div className="w-full divide-y divide-gray-300">
            {awards.map((award, index) => (
              <div
                key={index}
                className="grid grid-cols-[1.5fr_2.5fr_auto] text-sm py-2 items-center gap-2 border-b border-gray-300"
              >
                <div className="text-gray-800 font-medium">{award.org}</div>
                <div className="text-gray-600">{award.title}</div>
                <div className="text-gray-500">{award.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricMarvels;
