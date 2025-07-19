import React, { useState } from 'react';

const Hero = () => {
  const [currentHeroImage, setCurrentHeroImage] = useState('/assets/hero1.png');

  return (
    <section className="relative min-h-screen w-full bg-[#EFEAE4] text-gray-800 font-amiri overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url(/assets/polytech.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
        }}
      ></div>

      {/* Hero Image */}
      <div className="absolute z-10 top-[10vh] left-1/2 transform -translate-x-1/2 w-[90vw] max-w-[900px] h-auto">
        <img
          src={currentHeroImage}
          alt="Kahafil Ora"
          className="w-full h-auto object-contain"
          onMouseEnter={() => setCurrentHeroImage('/assets/hero2.png')}
          onMouseLeave={() => setCurrentHeroImage('/assets/hero1.png')}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://placehold.co/920x780/ccc/333?text=Hero+Image+Error';
          }}
        />
      </div>
        {/* ORA Title */}
      <p
        className="absolute bottom-0 right-4 z-50 pb-4 uppercase leading-none"
        style={{
          fontFamily: 'Poppins',
          fontWeight: 700,
          fontSize: 'clamp(40px, 8vw, 150px)',
          WebkitTextStroke: '2px #444444',
          color: '#444444',
        }}
      >
        ORA
      </p>

      {/* KAHAFIL, 2K25, Portfolio (lowered + left) */}
      <div className="absolute z-30 left-6 bottom-[25%] text-left">
        <h1
          className="uppercase leading-none"
          style={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: 'clamp(40px, 8vw, 150px)',
            WebkitTextStroke: '2px #444444',
            color: '#444444',
          }}
        >
          KAHAFIL
        </h1>
        <p
          className="mt-2"
          style={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 700,
            fontSize: 'clamp(16px, 2vw, 30px)',
            color: '#4B5563',
            textTransform: 'uppercase',
          }}
        >
          2K25
        </p>

        <div className="mt-8 flex flex-col items-start">
          <div className="w-[2px] h-[100px] bg-gray-600 mb-4 ml-3"></div>
          <a
            href="#"
            className="text-xl text-gray-700 hover:text-purple-600 ml-2"
            style={{
              writingMode: 'vertical-lr',
              textOrientation: 'mixed',
              fontFamily: 'Plus Jakarta Sans',
            }}
          >
            / PORTFOLIO
          </a>
        </div>
      </div>

      {/* Biography (top right, same) */}
      <div
        className="absolute z-30 text-right top-[25vh] right-5"
        style={{
          width: 'clamp(280px, 35vw, 600px)',
          fontSize: 'clamp(14px, 1.2vw, 20px)',
          lineHeight: '160%',
          fontFamily: 'Plus Jakarta Sans',
        }}
      >
        <p
          className="text-gray-500 opacity-40 mb-2 uppercase"
          style={{
            fontFamily: 'Fragment Mono',
            fontSize: 'clamp(16px, 1.5vw, 25px)',
          }}
        >
          Biography
        </p>

        <p className="text-gray-800">
          A Visionary Leader With 22+ Years of Experience In Innovation And Growth. As MD Of Goinnovior Limited And Co-Founder Of 360D Soul, Lifeinnovior, And Codeinnovior, He Blends Tech, Business, And Social Impact—Delivering ICT And InfoSec Solutions, Promoting Mental Health, And Enabling Free Tech Education.
        </p>
      </div>

      {/* IT CONSULTANT + Arrow (moved left under text) */}
     <div
  className="absolute z-30 flex items-center"
  style={{
    top: 'calc(60% )', // Move slightly higher (reduce 25% of the container height)
    left: 'calc(20% )', // Move a bit right from the center (adjust as needed)
    transform: 'translateY(-50%)', // Keep vertical centering relative to top position
    fontFamily: 'Fragment Mono',
    fontSize: 'clamp(14px, 1.5vw, 22px)',
    color: '#4B5563',
    textTransform: 'uppercase',
  }}
>
  <p className="mr-4">IT CONSULTANT</p>
  <img
    src="/assets/arrow.png"
    alt="Arrow"
    style={{
      width: 'clamp(80px, 8vw, 156px)',
      height: 'auto',
      objectFit: 'contain',
      rotate: '19.82deg',
    }}
  />
</div>


      {/* Scroll Down (left bottom corner) */}
      <div className="absolute bottom-4 left-6 text-gray-600 z-30">
        <p className="text-sm uppercase font-medium mb-1">Scroll Down</p>
        <span className="text-xl">↓</span>
      </div>
    </section>
  );
};


export default Hero;
