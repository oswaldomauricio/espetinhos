import React, { useState, useEffect } from 'react';
import { CheckCircle2, Check } from 'lucide-react';
import { config } from './config';
import { Deliverables, Bonuses, Pricing, Guarantee, HowItWorks, License, FAQ, Footer, StickyCTA } from './components/RestOfApp';

function PromoBar() {
  const [timeLeft, setTimeLeft] = useState<{ minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    if (!config.promotionEnabled) return;

    const endTimeStr = localStorage.getItem('promoEndTime');
    let endTime: number;

    if (endTimeStr) {
      endTime = parseInt(endTimeStr, 10);
      if (Date.now() > endTime) {
        setTimeLeft({ minutes: 0, seconds: 0 });
        return;
      }
    } else {
      endTime = Date.now() + config.promotionDurationMinutes * 60 * 1000;
      localStorage.setItem('promoEndTime', endTime.toString());
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ minutes: 0, seconds: 0 });
      } else {
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!config.promotionEnabled) {
    return (
      <div className="bg-[#C95508] text-white py-3 px-4 text-center text-sm sm:text-base font-semibold">
        SUA MARCA DE ESPETINHOS COM UMA APRESENTAÇÃO MAIS PROFISSIONAL
      </div>
    );
  }

  const hasEnded = timeLeft && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <div className="bg-[#C95508] text-white py-3 px-4 text-center">
      {!hasEnded ? (
        <div className="flex flex-col items-center justify-center space-y-1">
          <span className="font-bold tracking-wider text-xs sm:text-sm uppercase">Condição especial por tempo limitado</span>
          <div className="flex items-center space-x-2 text-sm sm:text-base">
            <span>Confira os pacotes enquanto esta condição está disponível:</span>
            {timeLeft && (
              <span className="font-bold bg-black/20 px-2 py-1 rounded">
                {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            )}
          </div>
        </div>
      ) : (
        <span className="text-sm font-medium">Confira as condições atuais nos pacotes abaixo</span>
      )}
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

        <div className="w-full max-w-3xl mb-10 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={config.images.heroPack} 
            alt="Conjunto completo de materiais para espetinhos" 
            className="w-full h-auto object-cover aspect-[4/3] sm:aspect-video"
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
          <p className="text-sm font-semibold text-[#C95508] mt-2 text-center">
            Pacote Premium completo por R$ {config.premiumPrice.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
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
  const items = [
    { title: "Cardápios", img: config.images.menuExample },
    { title: "Artes para embalagens", img: config.images.packagingExample },
    { title: "Posts para Instagram", img: config.images.instagramExample },
    { title: "Cartões de contato", img: config.images.contactCardExample },
    { title: "Etiquetas e adesivos", img: config.images.labelsExample },
  ];

  return (
    <section className="bg-[#20201E] text-[#F6F1E8] py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 uppercase">
          Veja como seu negócio pode se apresentar
        </h2>
        <p className="text-lg text-[#F6F1E8]/80 max-w-2xl mx-auto">
          Da postagem que chama atenção à embalagem que chega ao cliente: tudo com uma identidade visual consistente.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl border border-[#F6F1E8]/10">
        <img 
          src={config.images.showcasePack} 
          alt="Vitrine de todos os materiais" 
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((item, i) => (
            <div key={i} className="min-w-[70vw] sm:min-w-0 snap-center flex-none sm:flex-1 bg-[#F6F1E8]/5 p-4 rounded-xl border border-[#F6F1E8]/10 flex flex-col">
              <div className="aspect-[4/5] bg-black/20 rounded-lg overflow-hidden mb-4 relative flex items-center justify-center p-2">
                <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-center mt-auto">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-[#F6F1E8]/50 mt-8 max-w-lg mx-auto">
        Exemplos ilustrativos dos materiais. Confira as quantidades de cada pacote. Mockups ilustrativos. Produto digital; materiais físicos não inclusos.
      </p>
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
  const images = [
    config.images.sellerAtGrill,
    config.images.menuExample,
    config.images.showcasePack,
    config.images.packagingExample,
    config.images.sellerShowingPack
  ];

  return (
    <section className="bg-[#F6F1E8] pb-16 overflow-hidden">
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 px-4 md:grid md:grid-cols-5 md:gap-2 md:px-2">
        {images.map((img, i) => (
          <div key={i} className="min-w-[80vw] sm:min-w-[300px] md:min-w-0 flex-none snap-center rounded-xl overflow-hidden aspect-[4/5] md:aspect-[3/4] md:rounded-none">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
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
  return (
    <div className="min-h-screen bg-[#F6F1E8] font-sans relative">
      <PromoBar />
      <Hero />
      <Showcase />
      <Benefits />
      <Transformation />
      <PhotoStrip />
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
