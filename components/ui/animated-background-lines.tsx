"use client";

import React from 'react';

const AnimatedCTASection = () => {
  const lineWrapperTops = ['top-[10%]', 'top-[30%]', 'top-[50%]', 'top-[70%]', 'top-[90%]'];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white font-sans overflow-hidden p-8 sm:p-16">
      {/* Grid Background */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,149,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,149,0,0.07) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite',
        }}
      />

      {/* Animated Background Lines */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-[1]">
        {lineWrapperTops.map((topClass, index) => (
          <div key={index} className={`absolute w-full h-[100px] ${topClass}`}>
            <div className="w-full h-0.5 relative overflow-hidden">
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent 0%, #ff9500 20%, #ffd700 50%, #ff9500 80%, transparent 100%)',
                  animation: `lineMove 4s linear infinite${index % 2 !== 0 ? ' reverse' : ''}`,
                  animationDelay: index % 2 !== 0 ? '2s' : '0s',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Corner Lines */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] z-[5]">
        <svg
          className="absolute top-1/2 -translate-y-1/2 left-[-150px] w-[120px] h-[60px]"
          style={{ animation: 'cornerLineAnimation 6s linear infinite' }}
          viewBox="0 0 120 60"
          stroke="#ff9500"
          strokeWidth="2"
          fill="none"
          strokeDasharray="50"
        >
          <path d="M120 0 L20 0 Q0 0 0 20 L0 60" />
        </svg>
        <svg
          className="absolute top-1/2 -translate-y-1/2 right-[-150px] w-[120px] h-[60px] scale-x-[-1]"
          style={{ animation: 'cornerLineAnimation 6s linear infinite', animationDelay: '3s' }}
          viewBox="0 0 120 60"
          stroke="#ff9500"
          strokeWidth="2"
          fill="none"
          strokeDasharray="50"
        >
          <path d="M120 0 L20 0 Q0 0 0 20 L0 60" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-3xl z-[10] relative">
        <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight mb-8">
          Ready to build
          <br />
          <span
            style={{
              backgroundImage: 'linear-gradient(45deg, #ff9500, #ffb347, #ffd700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
              animation: 'gradientShift 3s ease-in-out infinite alternate',
            }}
          >
            the software of the future?
          </span>
        </h1>
        <a
          href="#"
          className="inline-block py-3 px-8 sm:py-4 sm:px-10 bg-white text-black no-underline rounded-lg font-semibold text-base sm:text-lg mt-8 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] active:translate-y-0 active:shadow-[0_5px_15px_rgba(255,255,255,0.1)]"
        >
          Start building
        </a>
      </div>
    </section>
  );
};

export default function AnimatedBackgroundLines() {
  return (
    <div className="bg-black">
      <AnimatedCTASection />
    </div>
  );
}
