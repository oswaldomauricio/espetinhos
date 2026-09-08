import React, { useState, useRef } from 'react';
import { Check, ChevronDown, ChevronRight, ChevronLeft, Shield, X, Sparkles, Flame } from 'lucide-react';
import { config } from '../config';

/* ───────────────────────────────────────────────────────
   SEÇÃO 4 — O QUE VOCÊ VAI RECEBER
   ─────────────────────────────────────────────────────── */
export function WhatYouGet() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const items = [
    {
      title: "50 artes para Instagram",
      desc: "Apresente sabores, divulgue novidades e mantenha sua comunicação ativa. Usando uma por dia, você tem material para 50 dias.",
      img: config.images.instagramApostila,
    },
    {
      title: "20 variações de cardápio",
      desc: "Organize espetinhos, acompanhamentos, bebidas e combos. Personalize nomes, fotos, preços e contatos.",
      img: config.images.cardapiosApostila,
    },
    {
      title: "15 artes para embalagens",
      desc: "Personalize a parte externa das embalagens com artes que reforçam a identidade do seu negócio.",
      img: config.images.embalagensApostilas,
    },
    {
      title: "10 modelos de cartão de contato",
      desc: "Deixe WhatsApp, Instagram e outras informações fáceis de encontrar.",
      img: config.images.cartaoApostila,
    },
    {
      title: "25 modelos de etiquetas e adesivos",
      desc: "Acrescente sua marca aos pedidos com modelos para personalizar e mandar imprimir.",
      img: config.images.labelsExample,
    },
  ];

  const galleryImages = [
    config.images.menuExample,
    config.images.instagramExample,
    config.images.packagingExample,
    config.images.contactCardExample,
    config.images.banners,
  ];

  return (
    <section className="bg-[#EEF1F5] py-16 md:py-24 px-5">
      <div className="max-w-[1000px] mx-auto">
        {/* Section label */}
        <div className="text-center mb-10">
          <span className="inline-block bg-[#E87516]/10 text-[#E87516] text-[10px] sm:text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full mb-4 border border-[#E87516]/15">
            O que está incluso
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#171717] mb-3 leading-tight max-w-2xl mx-auto">
            Uma identidade visual para cada ponto de contato do seu negócio.
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] max-w-xl mx-auto">
            Conheça os 120 modelos principais do pacote Premium.
          </p>
        </div>

        {/* 5 cards */}
        <div className="space-y-5">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row gap-5 bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-[#E2E5EA] items-center sm:items-start hover:shadow-md transition-shadow"
            >
              <div className="w-full sm:w-1/3 aspect-square bg-[#F5F6F8] rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-3">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="w-full sm:w-2/3 flex flex-col justify-center sm:py-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#171717] mb-2 text-center sm:text-left">{item.title}</h3>
                <p className="text-[#4B5563] text-sm sm:text-base text-center sm:text-left leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Galeria "Veja os materiais de perto" */}
        <div className="mt-12">
          <h3 className="text-lg sm:text-xl font-bold text-[#171717] text-center mb-6">
            Veja os materiais de perto
          </h3>
          <div className="relative">
            <div className="flex sm:hidden justify-between items-center mb-3 px-1">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#4B5563]">
                Deslize para ver mais →
              </span>
            </div>
            <div
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar gap-3 sm:grid sm:grid-cols-3 lg:grid-cols-5 pb-2"
            >
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="w-[160px] sm:w-auto shrink-0 snap-center rounded-xl overflow-hidden aspect-[3/4] shadow-md border border-[#E2E5EA] bg-white"
                >
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Aviso + CTA */}
        <p className="text-[11px] text-[#4B5563] mt-8 text-center max-w-lg mx-auto">
          Você recebe arquivos digitais. Impressão, materiais e embalagens físicas são contratados separadamente.
        </p>

        <div className="text-center mt-8">
          <a
            href="#pacotes"
            className="inline-block bg-[#E87516] hover:bg-[#C95508] transition-all text-white font-bold text-base py-4 px-8 rounded-xl shadow-lg shadow-[#E87516]/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            VER OS PACOTES
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────
   SEÇÃO 5 — BENEFÍCIOS PRÁTICOS
   ─────────────────────────────────────────────────────── */
export function PracticalBenefits() {
  const benefits = [
    {
      title: "Uma marca mais organizada",
      text: "Cardápio, embalagem e divulgação com cores e elementos que combinam.",
    },
    {
      title: "Mais clareza para o cliente",
      text: "Apresente sabores, acompanhamentos, combos e contatos de forma fácil de entender.",
    },
    {
      title: "Mais praticidade para divulgar",
      text: "Escolha um modelo e atualize as informações para preparar sua próxima postagem.",
    },
    {
      title: "Mais autonomia no dia a dia",
      text: "Altere preços, produtos e contatos sem começar uma nova arte a cada mudança.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-5">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10 text-[#171717] max-w-2xl mx-auto leading-tight">
          A apresentação do seu negócio pode acompanhar o{' '}
          <span className="text-[#E87516]">capricho da sua brasa.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {benefits.map((b, i) => (
            <div key={i} className="bg-[#F5F6F8] p-6 sm:p-7 rounded-2xl border border-[#E2E5EA] hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#E87516]/10 rounded-full flex items-center justify-center mb-5">
                <Check className="text-[#E87516] w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#171717] mb-2">{b.title}</h3>
              <p className="text-[#4B5563] leading-relaxed text-sm sm:text-base">{b.text}</p>
            </div>
          ))}
        </div>

        <p className="text-lg font-semibold text-[#171717] text-center">
          Você cuida do sabor. O pack facilita a apresentação.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────
   SEÇÃO 6 — COMO FUNCIONA
   ─────────────────────────────────────────────────────── */
export function HowItWorks() {
  const steps = [
    { num: "01", title: "Escolha seu pacote", desc: "Escolha seu pacote e finalize a compra." },
    { num: "02", title: "Receba as instruções", desc: "Receba as instruções de acesso por e-mail após a aprovação do pagamento." },
    { num: "03", title: "Personalize no Canva", desc: "Abra os modelos no Canva e personalize as informações." },
    { num: "04", title: "Publique ou imprima", desc: "Publique suas artes ou envie os materiais para impressão." },
  ];

  return (
    <section className="bg-[#EEF1F5] py-16 md:py-24 px-5">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#E87516]/10 text-[#E87516] text-[10px] sm:text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full mb-4 border border-[#E87516]/15">
            Passo a passo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#171717] leading-tight">
            Escolha, personalize e comece a usar.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-[#E2E5EA] text-center sm:text-left hover:shadow-md transition-shadow">
              <div className="w-11 h-11 bg-[#E87516] text-white rounded-full flex items-center justify-center font-extrabold text-sm mb-4 mx-auto sm:mx-0 font-heading">
                {step.num}
              </div>
              <h3 className="font-bold text-[#171717] mb-2 text-base">{step.title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────
   SEÇÃO 7 — BÔNUS EXCLUSIVOS DO PREMIUM
   ─────────────────────────────────────────────────────── */
export function PremiumBonuses() {
  const bonuses = [
    { num: 1, title: "50 legendas para suas postagens", desc: "Textos de apoio para adaptar ao seu negócio e acompanhar a divulgação.", img: config.images.bonusCaptions },
    { num: 2, title: "30 modelos de stories", desc: "Opções para mostrar o cardápio, avisar que está aberto e apresentar novidades.", img: config.images.bonusStories },
    { num: 3, title: "12 modelos de combos e promoções", desc: "Apresente suas próprias ofertas com clareza, incluindo condições e preços.", img: config.images.bonusCombos },
    { num: 4, title: "Calendário de conteúdo de 30 dias", desc: "Um roteiro simples para organizar o que publicar ao longo do mês.", img: config.images.bonusCalendar },
  ];

  return (
    <section className="bg-[#171717] py-16 md:py-24 px-5">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#E87516]/20 text-[#E87516] text-[10px] sm:text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full mb-4 border border-[#E87516]/30">
            Exclusivo Premium
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight max-w-2xl mx-auto">
            No Premium, você também recebe materiais para organizar sua divulgação.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bonuses.map((b) => (
            <div key={b.num} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-[#E87516]/40 transition-all">
              <div className="relative aspect-square bg-white/5 p-3 flex items-center justify-center">
                <div className="absolute top-3 left-3 bg-[#E87516] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider z-10">
                  Incluso no Premium
                </div>
                <img src={b.img} alt={b.title} className="w-full h-full object-contain rounded-lg drop-shadow-md" loading="lazy" />
              </div>
              <div className="p-5 flex flex-col grow">
                <span className="text-[#E87516] font-bold text-xs mb-1.5 uppercase tracking-wider">Bônus {b.num}</span>
                <h3 className="text-base font-bold text-white mb-2">{b.title}</h3>
                <p className="text-white/60 text-sm mt-auto leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/50 text-xs mt-8">
          Inclusos no pacote Premium, além dos 120 modelos principais.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────
   SEÇÃO 8 — PROVA SOCIAL
   ─────────────────────────────────────────────────────── */
export function SocialProof() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#EEF1F5] py-16 md:py-24 px-5 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#E87516]/10 text-[#E87516] text-[10px] sm:text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full mb-4 border border-[#E87516]/15">
            Feedback
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#171717] mb-3 leading-tight">
            Veja o que clientes compartilham sobre o material.
          </h2>
        </div>

        {/* Mobile hint */}
        <div className="flex sm:hidden justify-start items-center mb-3 px-1">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#4B5563]">
            Deslize para ver mais →
          </span>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 pb-2"
        >
          {config.images.testimonials.map((img, i) => (
            <div
              key={i}
              className="w-[280px] sm:w-auto shrink-0 snap-center rounded-2xl overflow-hidden bg-white border border-[#E2E5EA] hover:shadow-lg transition-all"
            >
              <img
                src={img}
                alt={`Depoimento ${i + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Pendência: depoimentos são mockups genéricos. 
            Substituir por capturas reais quando disponíveis. */}
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────
   SEÇÃO 9 — OFERTA E PLANOS
   ─────────────────────────────────────────────────────── */
export function Pricing({ upsellStep, setUpsellStep }: { upsellStep: 1 | 2 | null; setUpsellStep: (step: 1 | 2 | null) => void }) {
  const diff = config.premiumPrice - config.basicPrice;

  const handleBasicClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setUpsellStep(1);
  };

  const closeUpsell = () => {
    setUpsellStep(null);
  };

  const handleDeclineStep1 = (e: React.MouseEvent) => {
    e.preventDefault();
    setUpsellStep(2);
  };

  const handleDeclineStep2 = () => {
    window.location.href = config.basicCheckoutUrl;
  };

  return (
    <section id="pacotes" className="bg-white py-16 md:py-24 px-5 scroll-mt-16 relative">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#E87516]/10 text-[#E87516] text-[10px] sm:text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full mb-4 border border-[#E87516]/15">
            Pacotes disponíveis
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#171717] mb-3 leading-tight">
            Escolha como você quer começar.
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] max-w-xl mx-auto">
            Do essencial ao conjunto completo, com pagamento único e acesso vitalício aos arquivos adquiridos.
          </p>
        </div>

        {/* Mobile: link rápido para Premium */}
        <div className="md:hidden w-full text-center mb-4">
          <a href="#premium" className="text-[#E87516] font-bold underline underline-offset-4 text-sm">
            Ver Premium completo ↓
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-stretch">

          {/* ── Pacote Básico ── */}
          <div className="w-full max-w-sm bg-[#F5F6F8] rounded-2xl p-7 border border-[#E2E5EA] flex flex-col relative hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-[#171717] mb-1">BÁSICO</h3>
            <p className="text-[#4B5563] text-sm mb-5">Para dar o primeiro passo na apresentação do seu negócio.</p>

            <div className="mb-5">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#171717]">
                R$ {config.basicPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </div>

            <a
              href={config.basicCheckoutUrl}
              onClick={handleBasicClick}
              className="bg-[#171717] hover:bg-black transition-colors text-white font-bold py-3.5 px-4 rounded-xl text-center w-full mb-6 cursor-pointer shadow-sm active:scale-[0.98]"
            >
              QUERO O PACOTE BÁSICO
            </a>

            <div className="space-y-2.5 flex-grow">
              <p className="font-bold text-[#171717] text-sm pb-2 border-b border-[#E2E5EA]">32 modelos principais:</p>
              {[
                "20 artes para Instagram.",
                "4 variações de cardápio.",
                "2 artes para embalagens.",
                "2 modelos de cartão de contato.",
                "4 modelos de etiquetas e adesivos.",
              ].map((item, i) => (
                <div key={i} className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#171717] shrink-0 mr-2 mt-0.5" />
                  <span className="text-[#4B5563]">{item}</span>
                </div>
              ))}
              <div className="pt-2 border-t border-[#E2E5EA] space-y-2.5 mt-2">
                {[
                  "Entrega por e-mail após aprovação.",
                  "Acesso vitalício aos arquivos adquiridos.",
                  "Licença de uso comercial conforme os termos do produto.",
                  "Garantia de 7 dias.",
                ].map((item, i) => (
                  <div key={`extra-${i}`} className="flex items-start text-sm">
                    <Check className="w-4 h-4 text-[#171717]/40 shrink-0 mr-2 mt-0.5" />
                    <span className="text-[#4B5563]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Pacote Premium ── */}
          <div id="premium" className="w-full max-w-sm bg-white rounded-2xl p-7 shadow-xl border-2 border-[#E87516] flex flex-col relative scroll-mt-16 md:-mt-3 md:mb-3 md:scale-105 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E87516] text-white px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-md">
              Pacote Completo
            </div>

            <h3 className="text-lg font-bold text-[#171717] mb-1 mt-2">PREMIUM</h3>
            <p className="text-[#4B5563] text-sm mb-1">Sua marca em todos os detalhes.</p>
            <p className="text-[#E87516] font-bold text-sm mb-5">
              Por R$ {diff.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} a mais que o Básico, receba 120 modelos principais e os 4 bônus.
            </p>

            <div className="mb-5">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#171717]">
                R$ {config.premiumPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </div>

            <a
              href={config.premiumCheckoutUrl}
              className="bg-[#E87516] hover:bg-[#C95508] transition-all text-white font-bold py-4 px-4 rounded-xl text-center w-full mb-6 shadow-lg shadow-[#E87516]/20 hover:shadow-xl"
            >
              QUERO O PREMIUM POR R$ {config.premiumPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </a>

            <div className="space-y-2.5 flex-grow">
              <p className="font-bold text-[#171717] text-sm pb-2 border-b border-[#E2E5EA]">120 modelos + 4 Bônus:</p>
              {[
                "50 artes para Instagram.",
                "20 variações de cardápio.",
                "15 artes para embalagens.",
                "10 modelos de cartão de contato.",
                "25 modelos de etiquetas e adesivos.",
              ].map((item, i) => (
                <div key={i} className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#E87516] shrink-0 mr-2 mt-0.5" />
                  <span className="text-[#171717] font-medium">{item}</span>
                </div>
              ))}
              {[
                { label: "Bônus:", value: "50 legendas." },
                { label: "Bônus:", value: "30 modelos de stories." },
                { label: "Bônus:", value: "12 modelos de combos e promoções." },
                { label: "Bônus:", value: "calendário de conteúdo de 30 dias." },
              ].map((b, i) => (
                <div key={`b-${i}`} className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#E87516] shrink-0 mr-2 mt-0.5" />
                  <span className="text-[#171717] font-medium">
                    <strong className="text-[#E87516]">{b.label}</strong> {b.value}
                  </span>
                </div>
              ))}
              <div className="pt-2 border-t border-[#E2E5EA] space-y-2.5 mt-2">
                {[
                  "Entrega por e-mail após aprovação.",
                  "Acesso vitalício aos arquivos adquiridos.",
                  "Licença de uso comercial conforme os termos do produto.",
                  "Garantia de 7 dias.",
                ].map((item, i) => (
                  <div key={`pextra-${i}`} className="flex items-start text-sm">
                    <Check className="w-4 h-4 text-[#E87516]/40 shrink-0 mr-2 mt-0.5" />
                    <span className="text-[#4B5563]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Texto abaixo dos planos */}
        <div className="text-center mt-10">
          <p className="text-sm font-bold text-[#171717]">Compra única. Sem mensalidade do pack.</p>
          <p className="text-xs text-[#4B5563] mt-1 max-w-md mx-auto">
            O acesso é liberado após a confirmação do pagamento.
          </p>
        </div>
      </div>

      {/* ── Upsell / Downsell Modal ── */}
      {upsellStep !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white text-[#171717] w-full max-w-lg rounded-2xl shadow-2xl p-6 sm:p-8 relative overflow-hidden border-2 border-[#E87516] max-h-[90vh] overflow-y-auto">

            {/* Close */}
            <button
              onClick={closeUpsell}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-20"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {upsellStep === 1 ? (
              /* ETAPA 1: UPSELL PREMIUM R$ 27,99 */
              <div className="text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-[#E87516]/10 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-[#E87516]" />
                </div>

                <span className="bg-[#E87516] text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-widest py-1 px-3 rounded-full mb-3">
                  🔥 Espere! Oferta de Upgrade
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#171717] mb-3 leading-tight">
                  Por apenas <span className="text-[#E87516]">R$ 10,00 a mais</span> você leva o Pacote Completo!
                </h3>

                <p className="text-xs sm:text-sm text-[#4B5563] mb-5 leading-relaxed">
                  No pacote Básico você recebe apenas 32 modelos. Ao escolher o <strong>Premium</strong>, você garante <strong>120 modelos principais + 4 Bônus Exclusivos</strong> para o seu negócio!
                </p>

                <div className="w-full bg-[#F5F6F8] p-4 rounded-xl border border-[#E2E5EA] mb-6 text-left space-y-2 text-xs sm:text-sm">
                  <div className="font-bold text-[#171717] pb-1 border-b border-[#E2E5EA] text-center">
                    Tudo o que você leva no Premium por + R$ 10,00:
                  </div>
                  {[
                    { bold: "120 Modelos Principais", rest: " (vs 32 do Básico)" },
                    { bold: "Bônus 1:", rest: " 50 Legendas para suas postagens" },
                    { bold: "Bônus 2:", rest: " 30 Modelos de Stories" },
                    { bold: "Bônus 3:", rest: " 12 Modelos de Combos e Promoções" },
                    { bold: "Bônus 4:", rest: " Calendário de Conteúdo de 30 Dias" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center text-[#171717]">
                      <Check className="w-4 h-4 text-[#E87516] mr-2 shrink-0" />
                      <span><strong>{item.bold}</strong>{item.rest}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={config.premiumCheckoutUrl}
                  className="w-full bg-[#E87516] hover:bg-[#C95508] text-white font-extrabold text-sm sm:text-base py-4 px-6 rounded-xl shadow-lg shadow-[#E87516]/20 transition-all text-center mb-3"
                >
                  🔥 SIM! QUERO MUDAR PARA O PREMIUM POR R$ 27,99
                </a>

                <button
                  onClick={handleDeclineStep1}
                  className="text-xs text-gray-500 hover:text-gray-800 underline transition-colors pt-2 cursor-pointer"
                >
                  Não, obrigado. Não quero os 4 bônus e prefiro continuar...
                </button>
              </div>
            ) : (
              /* ETAPA 2: DOWNSELL R$ 19,99 */
              <div className="text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Flame className="w-8 h-8 text-red-600 animate-pulse" />
                </div>

                <span className="bg-red-600 text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-widest py-1 px-3 rounded-full mb-3">
                  ⚡ Última Chance: Desconto Exclusivo
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#171717] mb-2 leading-tight">
                  Leve o Pacote Premium por apenas <span className="text-red-600">R$ 19,99</span>!
                </h3>

                <p className="text-xs sm:text-sm text-[#4B5563] mb-5 leading-relaxed">
                  Não queremos que você fique sem os modelos e os bônus! Liberamos um <strong>desconto único</strong>: por apenas <strong>R$ 2,00 a mais</strong> que o Básico, você garante o <strong>Premium Completo (120 modelos + 4 Bônus)</strong>!
                </p>

                <div className="w-full bg-red-50 p-4 rounded-xl border border-red-200 mb-6 text-center">
                  <div className="text-xs text-gray-400 line-through">De R$ 27,99</div>
                  <div className="text-3xl font-extrabold text-red-600">Por apenas R$ 19,99</div>
                  <div className="text-xs font-semibold text-gray-700 mt-1">Economize R$ 8,00 e leve 120 modelos + 4 Bônus!</div>
                </div>

                <a
                  href={config.premiumDiscountCheckoutUrl}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base py-4 px-6 rounded-xl shadow-lg shadow-red-600/30 transition-all text-center mb-3"
                >
                  🎉 QUERO O PREMIUM COM DESCONTO POR R$ 19,99
                </a>

                <button
                  onClick={handleDeclineStep2}
                  className="text-xs text-gray-500 hover:text-gray-800 underline transition-colors pt-2 cursor-pointer"
                >
                  Não aceitar o desconto. Quero apenas o Básico por R$ 17,99.
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

/* ───────────────────────────────────────────────────────
   SEÇÃO 10 — GARANTIA
   ─────────────────────────────────────────────────────── */
export function Guarantee() {
  return (
    <section className="bg-[#EEF1F5] py-16 md:py-24 px-5">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-[#E2E5EA] text-center flex flex-col items-center relative overflow-hidden">

        {/* Selo */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-[#E87516]/10 rounded-full blur-2xl scale-125"></div>
          <img
            src={config.images.guaranteeBadge}
            alt="Selo de 7 Dias de Garantia"
            className="w-28 h-28 sm:w-36 sm:h-36 object-contain relative z-10 drop-shadow-md"
          />
        </div>

        <span className="bg-[#E87516]/10 text-[#E87516] text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full mb-4 border border-[#E87516]/15">
          Garantia de 7 Dias
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#171717] mb-4 leading-tight">
          Conheça o material com 7 dias de garantia.
        </h2>

        <p className="text-base sm:text-lg text-[#4B5563] mb-8 max-w-xl leading-relaxed">
          Após a compra, você tem <strong>7 dias</strong> para avaliar o material. Se decidir que ele não é para você, solicite o reembolso pelo canal indicado nas instruções da compra.
        </p>

        <a
          href="#pacotes"
          className="bg-[#E87516] hover:bg-[#C95508] text-white transition-all font-bold py-4 px-8 rounded-xl shadow-lg shadow-[#E87516]/20 text-base sm:text-lg w-full sm:w-auto hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
        >
          ESCOLHER MEU PACOTE
        </a>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────
   SEÇÃO 11 — PERGUNTAS FREQUENTES (FAQ)
   ─────────────────────────────────────────────────────── */
export function FAQ() {
  const faqs = [
    { q: "O que vou receber?", a: "Você recebe arquivos digitais e links para os modelos do pacote escolhido. As quantidades e os bônus estão descritos na comparação dos planos." },
    { q: "Recebo embalagens impressas?", a: "Não. Este é um produto digital. Você recebe as artes para personalizar. Impressão, embalagens e demais materiais físicos não estão inclusos." },
    { q: "Como recebo o acesso?", a: "As instruções e links são enviados ao e-mail informado na compra, após a aprovação do pagamento. Confira também as pastas de spam e promoções." },
    { q: "Posso editar pelo celular?", a: "Sim. Os modelos são preparados para personalização no Canva pelo celular ou computador." },
    { q: "Preciso saber design?", a: "Você parte de modelos prontos e pode alterar as informações do seu negócio seguindo o tutorial." },
    { q: "Preciso do Canva Pro?", a: "Os modelos do pack devem ser preparados e validados para uso no Canva gratuito. Se você adicionar por conta própria elementos pagos, eles podem exigir uma assinatura ou pagamento adicional." },
    { q: "Posso alterar preços, fotos e contatos?", a: "Sim, nos elementos editáveis dos modelos. Você pode adaptar as informações e utilizar fotos reais dos seus produtos." },
    { q: "Qual a diferença entre Básico e Premium?", a: "O Básico tem 32 modelos principais. O Premium inclui 120 modelos principais e 4 bônus exclusivos (legendas, stories, combos e calendário de conteúdo)." },
    { q: "O pagamento é único?", a: "Sim. A compra do pack é única, sem mensalidade." },
    { q: "O acesso é vitalício?", a: "Sim. Você tem acesso vitalício aos arquivos adquiridos." },
    { q: "Posso usar os materiais no meu negócio?", a: "Sim. O pack inclui licença de uso comercial para personalizar e divulgar seu próprio negócio, conforme os termos de uso." },
    { q: "Posso revender os arquivos?", a: "Não. A licença permite utilizar os materiais no seu negócio, mas não revender ou redistribuir os arquivos editáveis." },
    { q: "Como funciona a garantia?", a: "Você pode solicitar o reembolso dentro de 7 dias após a compra, pelo canal indicado nas instruções do pedido." },
    { q: "Como entro em contato com o suporte?", a: config.supportEmail ? `Envie um e-mail para ${config.supportEmail}.` : "Utilize o canal de suporte indicado nas instruções do pedido." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 md:py-24 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#E87516]/10 text-[#E87516] text-[10px] sm:text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full mb-4 border border-[#E87516]/15">
            Dúvidas
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#171717] leading-tight">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#F5F6F8] rounded-xl border border-[#E2E5EA] overflow-hidden">
              <button
                onClick={() => toggleFaq(i)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFaq(i); } }}
                className="w-full text-left px-5 py-4 font-bold text-[#171717] flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E87516] focus-visible:ring-inset cursor-pointer"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="pr-4 text-sm sm:text-base">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#E87516] transition-transform duration-200 shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div
                  id={`faq-answer-${i}`}
                  className="px-5 pb-4 text-[#4B5563] text-sm leading-relaxed animate-slideDown"
                  role="region"
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────
   SEÇÃO 12 — CTA FINAL
   ─────────────────────────────────────────────────────── */
export function FinalCTA() {
  return (
    <section className="bg-[#171717] py-16 md:py-20 px-5 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
          O capricho da sua brasa merece aparecer na sua{' '}
          <span className="text-[#E87516]">marca.</span>
        </h2>
        <p className="text-base sm:text-lg text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
          Escolha seu pacote e personalize seu próximo cardápio, sua próxima postagem e a apresentação dos seus pedidos.
        </p>

        <a
          href="#pacotes"
          className="inline-block bg-[#E87516] hover:bg-[#C95508] transition-all text-white font-bold text-lg py-4 px-10 rounded-xl shadow-lg shadow-[#E87516]/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
        >
          ESCOLHER MEU PACOTE
        </a>

        <p className="text-xs text-white/40 mt-4 font-medium">
          Pagamento único • Garantia de 7 dias
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────
   RODAPÉ
   ─────────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white/50 py-12 px-5">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center space-y-5 text-xs text-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.png" alt="Espetinho de Marca" className="h-12 w-auto object-contain" />
        </a>

        <p className="text-white/30">Produto digital. Impressão e embalagens físicas não inclusas.</p>

        <div className="border-t border-white/10 w-full max-w-xs"></div>

        <p>&copy; {new Date().getFullYear()} {config.productName}. Todos os direitos reservados.</p>
        {config.sellerName && (
          <p>Distribuído por: {config.sellerName} {config.sellerDocument && `- ${config.sellerDocument}`}</p>
        )}

        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {config.supportEmail && (
            <a href={`mailto:${config.supportEmail}`} className="hover:text-white transition-colors">
              Suporte: {config.supportEmail}
            </a>
          )}
          {config.termsUrl !== '#' && (
            <a href={config.termsUrl} className="hover:text-white transition-colors">Termos de Uso</a>
          )}
          {config.privacyUrl !== '#' && (
            <a href={config.privacyUrl} className="hover:text-white transition-colors">Política de Privacidade</a>
          )}
        </div>

        <p className="mt-4 max-w-xl mx-auto text-[10px] text-white/20">
          Este produto não é afiliado, patrocinado ou endossado pelo Instagram, Meta ou Canva.
        </p>
      </div>
    </footer>
  );
}
