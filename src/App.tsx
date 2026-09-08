import React, { useState, useEffect, useRef } from 'react';
import { Check, ChevronRight, ChevronLeft } from 'lucide-react';
import { config } from './config';
import { WhatYouGet, PracticalBenefits, HowItWorks as HowItWorksSection, PremiumBonuses, SocialProof, Pricing, Guarantee, FAQ, FinalCTA, Footer } from './components/RestOfApp';
import { ThankYouPage } from './components/ThankYou';

/* ───────────────────────────────────────────────────────
   SEÇÃO 1 — BARRA SUPERIOR
   ─────────────────────────────────────────────────────── */
function TopBar() {
  return (
    <div className="bg-[#C95508] text-white py-2.5 px-4 text-center">
      <p className="text-[11px] sm:text-xs font-semibold tracking-wide uppercase leading-relaxed max-w-4xl mx-auto">
        Acesso imediato &nbsp;•&nbsp; Editável no Canva &nbsp;•&nbsp; Pagamento único &nbsp;•&nbsp; 7 dias de garantia &nbsp;•&nbsp; Vitalício
      </p>
    </div>
  );
}

/* ───────────────────────────────────────────────────────
   HEADER — Logo + botão
   ─────────────────────────────────────────────────────── */
function Header() {
  return (
    <header className="bg-white border-b border-[#E2E5EA] py-3 px-4 sticky top-0 z-40">
      <div className="max-w-[1160px] mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="Espetinho de Marca" className="h-10 sm:h-12 w-auto object-contain" />
        </a>
        <a
          href="#pacotes"
          className="bg-[#E87516] hover:bg-[#C95508] transition-colors text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-lg shadow-sm"
        >
          Ver os pacotes
        </a>
      </div>
    </header>
  );
}

/* ───────────────────────────────────────────────────────
   VSL PLAYER — Componente isolado para embed do Vimeo
   ─────────────────────────────────────────────────────── */
function VslPlayer() {
  return (
    <div className="w-full max-w-[360px] mx-auto my-8">
      <div style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
        <iframe
          src="https://player.vimeo.com/video/1224822448?badge=0&autopause=0&player_id=0&app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          title="Espetinho de Marca"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────
   SEÇÃO 2 — HERO (headline, VSL, CTA, mockup)
   ─────────────────────────────────────────────────────── */
function Hero({ onOpenUpsell }: { onOpenUpsell: () => void }) {
  return (
    <section id="hero" className="bg-[#EEF1F5] pt-10 pb-14 px-5 md:pt-16 md:pb-20">
      <div className="max-w-[1160px] mx-auto">
        {/* Desktop: 2 colunas — texto | VSL */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">

          {/* Coluna de texto */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="inline-block bg-[#E87516]/10 text-[#E87516] text-[11px] sm:text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full mb-5 border border-[#E87516]/20">
              Pack Digital Editável no Canva
            </span>

            <h1 className="text-[1.75rem] sm:text-4xl md:text-[2.75rem] lg:text-5xl font-extrabold text-[#171717] leading-[1.15] mb-5">
              Seu espetinho já dá água na boca. Agora sua{' '}
              <span className="text-[#E87516]">marca também pode chamar atenção.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#4B5563] mb-6 max-w-xl leading-relaxed">
              Cardápios, posts e artes para embalagens com a mesma identidade visual. Personalize sua marca, seus produtos e seus preços sem começar do zero.
            </p>

            {/* CTA — Mobile: abaixo do texto, antes da VSL */}
            <div className="flex flex-col items-center lg:items-start w-full sm:w-auto mb-6 lg:mb-0">
              <button
                onClick={(e) => { e.preventDefault(); onOpenUpsell(); }}
                className="bg-[#E87516] hover:bg-[#C95508] transition-all text-white font-bold text-base sm:text-lg py-4 px-8 rounded-xl w-full sm:w-auto shadow-lg shadow-[#E87516]/20 text-center hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                QUERO POR R$ {config.basicPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </button>
              <p className="text-xs text-[#4B5563] mt-3 font-medium text-center lg:text-left">
                Pagamento único • Acesso após aprovação • Garantia de 7 dias
              </p>
            </div>
          </div>

          {/* Coluna da VSL */}
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <VslPlayer />
          </div>
        </div>

        {/* Mockup completo do produto abaixo */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#E2E5EA]">
            <img
              src={config.images.heroPack}
              alt="Conjunto completo de materiais do Espetinho de Marca"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────
   SEÇÃO 3 — MINI-BENEFÍCIOS (faixa com 4 indicadores)
   ─────────────────────────────────────────────────────── */
function MiniBenefits() {
  const items = [
    { number: "120", label: "modelos no Premium" },
    { number: "5", label: "categorias de materiais" },
    { number: "✎", label: "Editável no Canva" },
    { number: "7", label: "dias de garantia" },
  ];

  return (
    <section className="bg-[#171717] py-8 sm:py-10 px-5">
      <div className="max-w-[1000px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
        {items.map((item, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#E87516] mb-1 font-heading">
              {item.number}
            </div>
            <div className="text-xs sm:text-sm text-white/80 font-medium uppercase tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────
   APP PRINCIPAL
   ─────────────────────────────────────────────────────── */
export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [upsellStep, setUpsellStep] = useState<1 | 2 | null>(null);

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

  const openUpsell = () => setUpsellStep(1);

  return (
    <div className="min-h-screen bg-[#EEF1F5] font-sans relative">
      <TopBar />
      <Header />
      <Hero onOpenUpsell={openUpsell} />
      <MiniBenefits />
      <WhatYouGet />
      <PracticalBenefits />
      <HowItWorksSection />
      <PremiumBonuses />
      <SocialProof />
      <Pricing upsellStep={upsellStep} setUpsellStep={setUpsellStep} />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
