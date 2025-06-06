import type { FC } from 'react';
import mockupImage from '/FOMO-mockup.png';

const Section1: FC = () => {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden shadow">
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="absolute rounded-full blur-3xl opacity-60 animate-blob mix-blend-multiply"
            style={{
              width: `${200 + Math.random() * 200}px`,
              height: `${200 + Math.random() * 200}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: '#B9FA5E',
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 z-30 text-black select-none text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold fomo-font sm:top-6 md:top-8">
        fomo
      </div>

      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-10 max-w-7xl mx-auto gap-8 md:gap-10">
        <h1 className=" text-shadow-lg flex-1 text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-center md:text-left font-display max-w-xl mt-40 md:mt-0">
          Para você nunca mais
          <br />
          perder a{' '}
          <span className="relative inline-block text-[#B9FA5E] font-bold">
            vibe
            <span className="underline-anim" />
          </span>
        </h1>

        <div className="flex-shrink-0 mt-8 md:mt-0">
          <img
            src={mockupImage}
            alt="Mockup FOMO"
            className="w-72 sm:w-80 md:w-96 lg:w-[520px] object-contain animate-fade-scale-in"
            style={{ userSelect: 'none' }}
          />
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40 animate-bounce select-none text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Section1;
