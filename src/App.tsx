import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Check, Flame, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { config } from './config';
import { Deliverables, Bonuses, Pricing, Guarantee, HowItWorks, License, FAQ, Footer, StickyCTA, Testimonials } from './components/RestOfApp';
import { ThankYouPage } from './components/ThankYou';

function PromoBar() {
  const [timeLeft, setTimeLeft] = useState<{ minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    if (!config.promotionEnabled) return;

    const durationMs = config.promotionDurationMinutes * 60 * 1000;
    const endTimeStr = localStorage.getItem('promoEndTime');
    let endTime: number;

    if (endTimeStr) {
      endTime = parseInt(endTimeStr, 10);
      if (Date.now() > endTime) {
        endTime = Date.now() + durationMs;
        localStorage.setItem('promoEndTime', endTime.toString());
      }
    } else {
      endTime = Date.now() + durationMs;
      localStorage.setItem('promoEndTime', endTime.toString());
    }

    const updateTimer = () => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference <= 0) {
        // Reset timer when it reaches 0 so scarcity timer stays active for visitors
        const newEndTime = Date.now() + durationMs;
        localStorage.setItem('promoEndTime', newEndTime.toString());
        endTime = newEndTime;
        setTimeLeft({ minutes: config.promotionDurationMinutes, seconds: 0 });
      } else {
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!config.promotionEnabled) {
    return (
      <div className="bg-[#C95508] text-white py-3 px-4 text-center text-sm sm:text-base font-semibold">
        SUA MARCA DE ESPETINHOS COM UMA APRESENTAÇÃO MAIS PROFISSIONAL
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[#B93806] via-[#E87516] to-[#B93806] text-white py-2.5 px-4 text-center shadow-md">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-xs sm:text-sm font-semibold">
        <div className="flex items-center space-x-1.5">
          <Flame className="w-4 h-4 text-yellow-300 animate-pulse" />
          <span className="uppercase tracking-wider font-extrabold text-white">⚡ OFERTA POR TEMPO LIMITADO:</span>
        </div>

        <div className="flex items-center space-x-2">
          <span>Esta condição se esgota em</span>
          {timeLeft ? (
            <div className="flex items-center font-mono font-bold bg-black/40 text-yellow-300 px-2.5 py-0.5 rounded border border-yellow-400/30 text-sm sm:text-base shadow-inner">
              <Clock className="w-3.5 h-3.5 text-yellow-300 mr-1.5" />
              <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="animate-pulse mx-0.5">:</span>
              <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          ) : (
            <div className="flex items-center font-mono font-bold bg-black/40 text-yellow-300 px-2.5 py-0.5 rounded border border-yellow-400/30 text-sm sm:text-base">
              <Clock className="w-3.5 h-3.5 text-yellow-300 mr-1.5" />
              <span>15:00</span>
            </div>
          )}
        </div>

        <span className="text-amber-100 text-[11px] sm:text-xs font-normal italic">
          (Ao zerar o cronômetro, a oferta será encerrada)
        </span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="bg-[#F6F1E8] pt-12 pb-16 px-4 md:pt-20 md:pb-24 relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <span className="bg-[#20201E] text-[#F6F1E8] text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full mb-6">
          Pack Digital Editável no Canva
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#20201E] leading-tight mb-6">
          Seu espetinho já dá água na boca. Agora sua marca também pode chamar atenção.
        </h1>
        <p className="text-lg sm:text-xl text-[#222222]/80 mb-10 max-w-2xl">
          Até 120 modelos para transformar seu cardápio, suas embalagens e sua divulgação — sem começar cada arte do zero.
        </p>

        <div className="w-full max-w-4xl mb-10 rounded-2xl overflow-hidden shadow-2xl border border-[#20201E]/10">
          <img
            src={config.images.heroPack}
            alt="Conjunto completo de materiais para espetinhos"
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-base sm:text-lg text-[#222222] mb-8 max-w-2xl">
          Cardápios, posts para Instagram, artes para embalagens, cartões de contato e etiquetas com uma apresentação que combina com o seu negócio.
        </p>

        <ul className="text-left space-y-3 mb-10 max-w-lg mx-auto">
          {[
            "Personalize com sua marca, seus produtos e seus preços.",
            "Organize sua divulgação sem criar tudo do zero.",
            "Use no celular ou no computador.",
            "Receba por e-mail após a confirmação do pagamento.",
            "Tenha acesso vitalício aos arquivos adquiridos."
          ].map((item, i) => (
            <li key={i} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-[#E87516] shrink-0 mr-3 mt-0.5" />
              <span className="text-[#222222] font-medium">{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center w-full sm:w-auto">
          <a
            href="#pacotes"
            className="bg-[#E87516] hover:bg-[#C95508] transition-colors text-white font-bold text-lg py-4 px-8 rounded-xl w-full sm:w-auto shadow-lg shadow-[#E87516]/30 text-center"
          >
            QUERO CONHECER OS PACOTES
          </a>
          <p className="text-xs text-[#222222]/60 mt-3 font-medium text-center">
            Pagamento único • Acesso imediato após aprovação • Garantia de 7 dias
          </p>
          <p className="text-[10px] text-[#222222]/50 mt-4 uppercase tracking-wider text-center">
            Produto digital. Impressão e embalagens físicas não inclusas.
          </p>
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const items = [
    { title: "Cardápios", img: config.images.menuExample },
    { title: "Artes para embalagens", img: config.images.packagingExample },
    { title: "Posts para Instagram", img: config.images.instagramExample },
    { title: "Cartões de contato", img: config.images.contactCardExample },
    { title: "Banners e flyers", img: config.images.banners },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#20201E] text-[#F6F1E8] py-12 md:py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 uppercase">
          Veja como seu negócio pode se apresentar
        </h2>
        <p className="text-sm sm:text-lg text-[#F6F1E8]/80 max-w-2xl mx-auto">
          Da postagem que chama atenção à embalagem que chega ao cliente: tudo com uma identidade visual consistente.
        </p>
      </div>
      <div className="max-w-7xl mx-auto relative">
        {/* Controles de Navegação no Mobile */}
        <div className="flex justify-between items-center mb-3 sm:hidden px-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#E87516]">
            Deslize para ver mais
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleScroll('left')}
              className="bg-[#E87516] hover:bg-[#C95508] active:scale-95 text-white p-2 rounded-full shadow transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="bg-[#E87516] hover:bg-[#C95508] active:scale-95 text-white p-2 rounded-full shadow transition-all"
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carrossel de itens compactos no mobile */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar pb-4 gap-3 sm:gap-4 sm:grid sm:grid-cols-3 lg:grid-cols-5"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="w-[150px] sm:w-auto shrink-0 snap-center bg-[#F6F1E8]/5 p-3 rounded-xl border border-[#F6F1E8]/10 flex flex-col items-center hover:border-[#E87516]/40 transition-all"
            >
              <div className="w-full aspect-[4/5] max-h-[160px] sm:max-h-none bg-black/20 rounded-lg overflow-hidden mb-3 relative flex items-center justify-center p-2">
                <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-xs sm:text-sm text-center mt-auto leading-snug">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    {
      title: "Uma marca mais organizada",
      text: "Cardápio, embalagem e divulgação conversando entre si, com cores e elementos que representam seu negócio."
    },
    {
      title: "Mais clareza para o cliente",
      text: "Apresente sabores, acompanhamentos, combos e formas de contato de maneira fácil de entender."
    },
    {
      title: "Mais praticidade para divulgar",
      text: "Escolha um modelo, atualize as informações e prepare sua próxima postagem."
    },
    {
      title: "Mais autonomia no dia a dia",
      text: "Altere preços, produtos e contatos sem precisar encomendar uma nova arte a cada mudança."
    }
  ];

  return (
    <section className="bg-[#F6F1E8] py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#20201E] max-w-3xl mx-auto">
          A apresentação do seu negócio pode acompanhar o capricho da sua brasa.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#20201E]/5">
              <div className="w-12 h-12 bg-[#E87516]/10 rounded-full flex items-center justify-center mb-6">
                <Check className="text-[#E87516] w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#20201E] mb-3">{b.title}</h3>
              <p className="text-[#222222]/80 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg font-medium text-[#20201E] mb-8">
            Você cuida do sabor. O pack facilita a apresentação.
          </p>
          <a
            href="#pacotes"
            className="inline-block bg-[#E87516] hover:bg-[#C95508] transition-colors text-white font-bold text-lg py-4 px-8 rounded-xl w-full sm:w-auto shadow-lg shadow-[#E87516]/30 text-center"
          >
            QUERO MELHORAR MINHA APRESENTAÇÃO
          </a>
        </div>
      </div>
    </section>
  );
}

function Transformation() {
  const items = [
    "Divulgue o cardápio com mais organização.",
    "Apresente combos e acompanhamentos com clareza.",
    "Personalize a parte externa das embalagens.",
    "Deixe seu contato fácil de encontrar.",
    "Prepare posts com a mesma identidade visual.",
    "Mantenha os materiais atualizados com mais facilidade."
  ];

  return (
    <section className="bg-[#F6F1E8] pb-16 md:pb-24 px-4">
      <div className="max-w-4xl mx-auto bg-[#20201E] rounded-3xl p-8 md:p-12 shadow-xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center sm:text-left">
          Uma identidade que aparece em cada detalhe do seu espetinho.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-[#E87516] shrink-0 mr-3 mt-1" />
              <span className="text-[#F6F1E8]/90">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotoStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const images = [
    config.images.heroPack,
    config.images.menuExample,
    config.images.instagramExample,
    config.images.packagingExample,
    config.images.banners
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#F6F1E8] pb-12 md:pb-16 overflow-hidden px-4 md:px-2">
      <div className="max-w-7xl mx-auto relative">
        {/* Controles no Mobile */}
        <div className="flex justify-between items-center mb-3 sm:hidden px-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#20201E]/70">
            Galeria de fotos
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleScroll('left')}
              className="bg-[#20201E] hover:bg-[#E87516] active:scale-95 text-white p-2 rounded-full shadow transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="bg-[#20201E] hover:bg-[#E87516] active:scale-95 text-white p-2 rounded-full shadow transition-all"
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carrossel no mobile / Grid no desktop */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar gap-3 sm:gap-3 md:grid md:grid-cols-5 pb-2"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="w-[150px] sm:w-auto shrink-0 snap-center rounded-xl overflow-hidden aspect-[3/4] shadow-md border border-[#20201E]/10 bg-black/5"
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaDivider() {
  return (
    <section className="bg-[#20201E] text-white py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Seu próximo cardápio, sua próxima postagem e sua próxima embalagem começam aqui.
        </h2>
        <p className="text-[#F6F1E8]/80 text-lg mb-8">
          Conheça o Espetinho de Marca e escolha o pacote ideal para deixar sua apresentação mais profissional.
        </p>
        <a
          href="#premium"
          className="inline-block bg-[#E87516] hover:bg-[#C95508] transition-colors text-white font-bold text-lg py-4 px-8 rounded-xl w-full sm:w-auto text-center"
        >
          VER O PACK COMPLETO
        </a>
        <p className="text-xs text-[#F6F1E8]/50 mt-4 font-medium">
          Editável no Canva • Pagamento único • Garantia de 7 dias
        </p>
      </div>
    </section>
  );
}

function TargetAudience() {
  const items = [
    { title: "Quem vende espetinhos no delivery", desc: "Organize a apresentação do pedido e deixe seu contato junto do cliente." },
    { title: "Quem tem um ponto de espetinhos", desc: "Atualize cardápios, preços, acompanhamentos e divulgação." },
    { title: "Quem está começando", desc: "Tenha uma base visual para personalizar com a identidade do seu negócio." },
    { title: "Quem divulga pelo Instagram", desc: "Use modelos para apresentar produtos, novidades e combos." },
    { title: "Quem recebe pedidos pelo WhatsApp", desc: "Compartilhe um cardápio claro e materiais com seu contato." },
    { title: "Quem quer parar de improvisar cada arte", desc: "Tenha modelos organizados para diferentes necessidades." }
  ];

  return (
    <section className="bg-[#F6F1E8] py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#20201E] max-w-2xl mx-auto">
          Feito para quem vive da brasa e quer cuidar melhor da própria marca.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-[#20201E]/5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-lg font-bold text-[#20201E] mb-2">{item.title}</h3>
              <p className="text-[#222222]/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const normalizedPath = currentPath.toLowerCase().replace(/\/$/, '');

  if (normalizedPath === '/obrigado') {
    return <ThankYouPage />;
  }

  return (
    <div className="min-h-screen bg-[#F6F1E8] font-sans relative">
      <PromoBar />
      <Hero />
      <Showcase />
      <Benefits />
      <Transformation />
      <PhotoStrip />
      <Testimonials />
      <CtaDivider />
      <TargetAudience />
      <Deliverables />
      <Bonuses />
      <Pricing />
      <Guarantee />
      <HowItWorks />
      <License />
      <FAQ />
      <Footer />
      <StickyCTA />
    </div>
  );
}
