import React, { useState } from 'react'; // Import useState

// IMPORTANT: When images are in the public/assets/ folder, reference them directly with root-relative paths.

const Hero = () => {
    const [currentHeroImage, setCurrentHeroImage] = useState('/assets/hero11.png'); // Initial image

    return (
        <section className="relative min-h-screen w-full bg-[#F5F1ED] text-gray-800 font-sans py-16 px-8 md:px-20 overflow-hidden">

            {/* "ABOUT KAHAFIL ORA" Section */}
            <div className="text-center mb-16 pt-12 font-poppins">
                <h2
                    className="mb-4 text-gray-600"
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

                    ABOUT KAHAFIL ORA
                </h2>
               <div className="mx-auto text-gray-900 px-4" style={{
    font: 'Poppins',
    fontWeight: 300,
    fontSize: '35px',
    lineHeight: '100%',
    letterSpacing: '0em',
    textAlign: 'center',
    textTransform: 'capitalize',
    width: '1440px',
    height: '212px',
}}>
     <div className="flex flex-col items-center space-y-[10px]">
    <p>Kahafil Ora is an experienced IT Consultant known for delivering smart, tech-</p>
    <p>driven solutions to businesses. With a strong grasp of IT infrastructure and digital </p>
    <p>strategy, he helps organizations improve efficiency and achieve their goals</p>
    <p>through innovative technology</p>
  </div>
</div>
            </div>

            {/* Divider Line */}
            <div className="border-b border-gray-300 w-full max-w-6xl mx-auto mb-16"></div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto items-center">

                {/* Left Column */}
                <div className="flex flex-col space-y-12 text-gray-800">
                    <div>
                        <div style={{ opacity: 0.5 }}>
  <p
    className="mb-2"
    style={{
      fontFamily: "'Fragment Mono', monospace",
      fontWeight: 400,
      fontSize: '22px',
      lineHeight: '100%',
      letterSpacing: '0em',
      textTransform: 'uppercase',
      color: '#4B5563', // Tailwind's text-gray-600
    }}
  >
    DRIVING DIGITAL INNOVATION ACROSS
  </p>
  <p
    style={{
      fontFamily: "'Fragment Mono', monospace",
      fontWeight: 400,
      fontSize: '22px',
      lineHeight: '100%',
      letterSpacing: '0em',
      textTransform: 'uppercase',
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
    fontSize: '20px',
    lineHeight: '200%',
    letterSpacing: '0.02em',
    textTransform: 'capitalize',
    color: '#1F2937', // Tailwind's text-gray-800 (optional for visual match)
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
    style={{
      fontFamily: "'Fragment Mono', monospace",
      fontWeight: 400,
      fontSize: '22px',
      lineHeight: '100%',
      letterSpacing: '0em',
      textTransform: 'uppercase',
      color: '#4B5563',
      opacity: '50%',
    }}
  >
    CONTACT
  </p>
                       <div
  style={{
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 300,
    fontSize: '20px',
    lineHeight: '200%',
    letterSpacing: '0.02em',
    textTransform: 'capitalize',
    color: '#1F2937', // Optional: Tailwind's text-gray-800
  }}
>
  <p>Kahafil Ora</p>
  <p>Dhaka | Bangladesh</p>
  <p>+880 1622-992222</p>
  <p>kahafil@goinnovior.com</p>
</div>
                    </div>
                </div>

                {/* Center Image */}
                <div className="flex justify-center items-center relative lg:col-span-1">
                    <img
                        src={currentHeroImage}
                        alt="Kahafil Ora Profile"
                        className="w-[300px] h-[400px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] object-cover rounded-full transition-all duration-300 ease-in-out"
                        onMouseEnter={() => setCurrentHeroImage('/assets/hero12.png')}
                        onMouseLeave={() => setCurrentHeroImage('/assets/hero11.png')}
                        onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = 'https://placehold.co/400x500/ccc/333?text=Profile+Image+Error';
                        }}
                    />
                </div>

                {/* Right Column: Metrics */}
                <div className="flex flex-col justify-between text-gray-800 space-y-12 lg:col-span-1">
                    <div className="text-right">
                        <p
    style={{
      fontFamily: "'Fragment Mono', monospace",
      fontWeight: 400,
      fontSize: '22px',
      lineHeight: '100%',
      letterSpacing: '0em',
      textTransform: 'uppercase',
      color: '#4B5563',
      opacity:'50%',
    }}
  >
    Years of Experience
  </p>
                        <div className="flex items-center justify-end">
                            <span
                                style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 300,
                                    fontSize: '80px',
                                    lineHeight: '100%',
                                    letterSpacing: '0.01em', // 1% letter-spacing
                                    textTransform: 'capitalize',
                                    verticalAlign: 'middle', // Added vertical-align
                                }}
                                className="mr-2" // Kept mr-2 for spacing with SVG
                            >
                                22+
                            </span>
                          
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xs uppercase font-medium text-gray-600 mb-2">SATISFACTION CLIENTS</p>
                        <span
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 300,
                                fontSize: '80px',
                                lineHeight: '100%',
                                letterSpacing: '0.01em', // 1% letter-spacing
                                textTransform: 'capitalize',
                                verticalAlign: 'middle', // Added vertical-align
                            }}
                        >
                            100%
                        </span>
                    </div>
                    <div className="text-right">
                        <p className="text-xs uppercase font-medium text-gray-600 mb-2">CLIENTS ON WORLDWIDE</p>
                        <span
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 300,
                                fontSize: '80px',
                                lineHeight: '100%',
                                letterSpacing: '0.01em', // 1% letter-spacing
                                textTransform: 'capitalize',
                                verticalAlign: 'middle', // Added vertical-align
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

export default Hero;
