import React from 'react';

const Testimonial = () => {
  return (
    <section className="bg-white py-20 px-8 md:px-20 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <p
          className="text-gray-600 mb-8"
          style={{
            fontFamily: "'Fragment Mono', monospace",
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '100%',
            letterSpacing: '0em',
            textTransform: 'uppercase',
            opacity: '50%',
          }}
        >
          TESTIMONIAL
        </p>
        <blockquote
          className="text-gray-900 mb-8"
          style={{
            
            fontFamily: 'Poppins', // Applied font-family
            fontWeight: 300,
            style: 'Light' ,// Applied font-weight
            fontSize: '35px', // Applied font-size
            lineHeight: '100%', // Applied line-height
            letterSpacing: '0%', // Applied letter-spacing (0%)
            horizontalAlign: 'center', // Applied text-align
            textTransform: 'capitalize', // Applied text-transform
          }}
        >
          “Kahafil Ora Is A Visionary Leader With A Rare Blend Of Technical Depth And Strategic Foresight. His Insights On Cybersecurity And Infrastructure Optimization Have Been Invaluable To Our Team. Collaborating With Him Has Always Meant Progress And Clarity.”
        </blockquote>
        <p
          className="text-purple-600 font-semibold mb-2"
          style={{
            fontFamily: 'Amiri',
            fontWeight: 700,
            style: 'Bold',
            fontSize: '20px',
            lineHeight: '100%',
            letterSpacing: '0em',
            horizontalAlign: 'center',
            textTransform: 'capitalize',
          }}
        >
          Farzano Rahman
        </p>
        <p
          className="text-gray-600"
          style={{
            fontFamily: 'Amiri',
            fontWeight: 400,
            style: 'Regular',
            fontSize: '12px',
            lineHeight: '100%',
            letterSpacing: '0em',
            textTransform: 'uppercase',
          }}
        >
          CTO, Skylark Soft Limited
        </p>
      </div>
    </section>
  );
};

export default Testimonial;
