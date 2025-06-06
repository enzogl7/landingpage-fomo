import type { FC } from 'react';
import { MapPin, Bell, MessageCircle } from 'lucide-react';

const Section2: FC = () => {
  return (
    <section className="relative bg-[#F9F9F9] py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-[#B9FA5E] opacity-30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-60 h-60 bg-[#B9FA5E] opacity-20 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-shadow-sm">Por que você precisa do FOMO?</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Você nunca mais vai perder tempo procurando a boa, todas estarão aqui, na palma da sua mão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-xl rounded-3xl p-8 text-left hover:scale-105 transition-transform duration-300">
            <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#B9FA5E]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Explore eventos por perto</h3>
            <p className="text-gray-600">Descubra tudo que está acontecendo na sua cidade e não perca mais nenhuma oportunidade.</p>
          </div>

          <div className="bg-white shadow-xl rounded-3xl p-8 text-left hover:scale-105 transition-transform duration-300">
            <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Bell className="w-6 h-6 text-[#B9FA5E]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Alertas personalizados</h3>
            <p className="text-gray-600">Receba notificações para garantir que você esteja sempre no lugar certo, na hora certa.</p>
          </div>

          <div className="bg-white shadow-xl rounded-3xl p-8 text-left hover:scale-105 transition-transform duration-300">
            <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-[#B9FA5E]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Compartilhe com a galera</h3>
            <p className="text-gray-600">Convide pessoas para o rolê, diga como está a <em>vibe</em> do local, faça amizades e crie experiências ainda mais inesquecíveis.</p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Section2;
