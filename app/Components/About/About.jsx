import React, { useState, useEffect } from 'react';

const About = () => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const preload = new Image();
    preload.src = '/assets/hero12.png';
  }, []);

  return (
    <section className="relative w-full bg-[#F5F1ED] text-gray-800 py-16 px-6 md:px-16 overflow-hidden font-poppins">
      {/* Title */}
      <div className="text-center mb-16 pt-12">
        <h2
          className="mb-4 uppercase text-gray-600"
          style={{
            fontFamily: "'Fragment Mono', monospace",
            fontWeight: 400,
            fontSize: '18px',
            opacity: 0.5,
          }}
        >
          ABOUT KAHAFIL ORA
        </h2>

        {/* Paragraph */}
        <div
          className="mx-auto w-full max-w-[1440px] h-auto leading-snug text-center"
          style={{
            fontFamily: 'Poppins',
            fontWeight: 300,
            fontSize: 'clamp(18px, 5vw, 35px)',
            color: '#000000',
            textTransform: 'capitalize',
            lineHeight: '100%',
            letterSpacing: '0%',
          }}
        >
          <p>
            Kahafil Ora is an experienced IT Consultant known for delivering smart, tech-driven solutions to businesses.
            With a strong grasp of IT infrastructure and digital strategy, he helps organizations improve efficiency and
            achieve their goals through innovative technology.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-300 w-full max-w-6xl mx-auto mb-16"></div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto items-center">
        {/* Left Column */}
        <div className="flex flex-col space-y-12 text-gray-800">
          <div>
            <div style={{ opacity: 0.5 }}>
              <p
                className="mb-2 uppercase"
                style={{
                  fontFamily: "'Fragment Mono', monospace",
                  fontWeight: 400,
                  fontSize: 'clamp(16px, 3vw, 22px)',
                  color: '#4B5563',
                }}
              >
                DRIVING DIGITAL INNOVATION ACROSS
              </p>
              <p
                className="uppercase"
                style={{
                  fontFamily: "'Fragment Mono', monospace",
                  fontWeight: 400,
                  fontSize: 'clamp(16px, 3vw, 22px)',
                  color: '#4B5563',
                }}
              >
                BANGLADESH AND BEYOND
              </p>
            </div>

            <ul
              className="mt-4 space-y-1"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(18px, 3vw, 20px)',
                lineHeight: '200%',
                letterSpacing: '0.02em',
                textTransform: 'capitalize',
                color: '#000000',
              }}
            >
              <li>Mentor</li>
              <li>IT Strategist</li>
              <li>Tech Entrepreneur</li>
              <li>Cybersecurity Advocate</li>
            </ul>
          </div>

          <div>
            <p
              className="uppercase"
              style={{
                fontFamily: "'Fragment Mono', monospace",
                fontWeight: 400,
                fontSize: 'clamp(16px, 3vw, 22px)',
                color: '#4B5563',
                opacity: '0.5',
              }}
            >
              CONTACT
            </p>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(18px, 3vw, 20px)',
                lineHeight: '200%',
                letterSpacing: '2%',
                textTransform: 'capitalize',
                color: '#000000',
                case: 'Title case',
              }}
            >
              <p>Kahafil Ora</p>
              <p>Dhaka | Bangladesh</p>
              <p>+880 1622-992222</p>
              <p>kahafil@goinnovior.com</p>
            </div>
          </div>
        </div>

        {/* Center Image with Smart Animate Hover */}
        <div
          className="relative flex justify-center items-center w-[250px] h-[350px] md:w-[300px] md:h-[400px] lg:w-[350px] lg:h-[450px] lg:col-span-1"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Default */}
          <img
            src="/assets/hero11.png"
            alt="Kahafil Ora"
            className={`absolute inset-0 w-full h-full object-cover rounded-full transition-opacity duration-500 ease-linear ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* Hovered */}
          <img
            src="/assets/hero12.png"
            alt="Kahafil Ora Hover"
            className={`absolute inset-0 w-full h-full object-cover rounded-full transition-opacity duration-500 ease-linear ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'https://placehold.co/400x500/ccc/333?text=Image+Error';
            }}
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between text-gray-800 space-y-12 lg:col-span-1">
          <div className="text-right">
            <p
              className="uppercase text-gray-600"
              style={{
                fontFamily: "'Fragment Mono', monospace",
                fontWeight: 400,
                fontSize: 'clamp(16px, 3vw, 22px)',
                opacity: 0.5,
              }}
            >
              Years of Experience
            </p>
            <div className="flex items-center justify-end">
              <span
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 300,
                  fontSize: 'clamp(60px, 6vw, 80px)',
                  lineHeight: '100%',
                  letterSpacing: '1%',
                  horizontalAlignment: 'Right',
                  verticalAlign: 'Center',

                }}
              >
                22+
              </span>
            </div>
          </div>

         <div className="text-right">
  <p
    style={{
      fontFamily: "'Fragment Mono', monospace",
      fontWeight: 400,
      fontSize: '22px',
      lineHeight: '100%',
      letterSpacing: '0%',
      textTransform: 'uppercase',
      textAlign: 'right',
      opacity:'0.5',
    }}
    className="mb-2 text-gray-600"
  >
    SATISFACTION CLIENTS
  </p>
            <span
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(60px, 6vw, 80px)',
                
              }}
            >
              100%
            </span>
          </div>

          <div className="text-right">
  <p
    style={{
      fontFamily: "'Fragment Mono', monospace",
      fontWeight: 400,
      fontSize: '22px',
      lineHeight: '100%',
      letterSpacing: '0%',
      textTransform: 'uppercase',
      textAlign: 'right',
      opacity:'0.5',
    }}
    className="mb-2 text-gray-600"
  >
   CLIENTS ON WORLDWIDE
  </p>
            <span
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 300,
                fontSize: 'clamp(60px, 6vw, 80px)',
              }}
            >
              70+
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
