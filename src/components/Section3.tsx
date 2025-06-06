import type { FC } from 'react';

const Section3: FC = () => {
  return (
    <section className="relative bg-[#F9F9F9] py-20 px-6 overflow-hidden drop-shadow-lg">
    <div className="absolute bottom-40 left-0 w-full h-64 bg-[#B9FA5E] opacity-30 rounded-b-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">O FOMO está quase chegando!</h2>
        <p className="text-gray-600 mb-8">
          Ainda estamos trabalhando para entregar a melhor experiência. Deixe seu e-mail abaixo para ser avisado quando lançarmos oficialmente e nos motivar demonstrando seu interesse.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <input type="email" placeholder="Digite seu e-mail" required className="w-full sm:w-auto flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B9FA5E] transition"/>
        <button type="submit" className="px-6 py-3 rounded-lg font-semibold text-white  bg-gradient-to-br from-[#9ecc39]  to-[#B9FA5E]  shadow-sm hover:from-[#a5d14b]  hover:to-[#B9FA5E]  transition-all duration-300 ease-in-out">
            Me avise!
        </button>
        </form>
      </div>
    </section>
  );
};

export default Section3;
