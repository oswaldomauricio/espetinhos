import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Shield, ChevronDown, ChevronRight, ChevronLeft, Check, Sparkles, X, Flame } from 'lucide-react';
import { config } from '../config';

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#20201E] text-[#F6F1E8] py-16 md:py-24 px-4 overflow-hidden border-t border-[#F6F1E8]/10">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <span className="bg-[#E87516]/20 text-[#E87516] text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full mb-4 inline-block border border-[#E87516]/30">
          Depoimentos de Clientes
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 uppercase">
          Quem usa, aprova e recomenda
        </h2>
        <p className="text-sm sm:text-lg text-[#F6F1E8]/80 max-w-2xl mx-auto">
          Veja a opinião real de quem já adquiriu e transformou a apresentação do seu negócio.
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">
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

        {/* Carrossel no mobile / Grid no desktop */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 pb-4"
        >
          {config.images.testimonials.map((img, i) => (
            <div
              key={i}
              className="w-[280px] xs:w-[300px] sm:w-auto shrink-0 snap-center rounded-2xl overflow-hidden bg-white/5 border border-[#F6F1E8]/10 hover:border-[#E87516]/50 transition-all shadow-xl"
            >
              <img
                src={img}
                alt={`Depoimento ${i + 1}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Deliverables() {
  const items = [
    { title: "50 artes para Instagram", desc: "Tenha 50 opções de postagens para apresentar sabores, divulgar novidades, mostrar acompanhamentos e manter sua comunicação ativa. Usando uma por dia, você terá material para 50 dias.", img: config.images.instagramApostila },
    { title: "20 variações de cardápio", desc: "Modelos para organizar espetinhos, acompanhamentos, bebidas e combos. Personalize nomes, fotos, preços e formas de contato.", img: config.images.cardapiosApostila },
    { title: "15 artes para embalagens", desc: "Personalize a parte externa das embalagens com faixas e aplicações gráficas que reforçam a identidade do seu negócio.", img: config.images.embalagensApostilas },
    { title: "10 modelos de cartão de contato", desc: "Deixe WhatsApp, Instagram e demais informações fáceis de encontrar.", img: config.images.cartaoApostila },
    { title: "25 modelos de etiquetas e adesivos", desc: "Acrescente sua identidade visual aos pedidos com modelos para personalizar e mandar imprimir.", img: config.images.labelsExample },
  ];

  return (
    <section className="bg-[#F6F1E8] py-16 md:py-24 px-4 border-t border-[#20201E]/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-[#20201E]">
          Conheça os 120 modelos do Pacote Premium.
        </h2>
        <p className="text-lg text-center text-[#222222]/80 mb-12 max-w-2xl mx-auto">
          Uma biblioteca visual para usar na divulgação e na apresentação do seu negócio.
        </p>

        <div className="space-y-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm border border-[#20201E]/5 items-center sm:items-start hover:shadow-md transition-shadow">
              <div className="w-full sm:w-1/3 aspect-square bg-[#F6F1E8]/70 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-3">
                <img src={item.img} alt={item.title} className="w-full h-full object-contain drop-shadow-md hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="w-full sm:w-2/3 flex flex-col justify-center h-full sm:py-4">
                <h3 className="text-xl font-bold text-[#20201E] mb-3 text-center sm:text-left">{item.title}</h3>
                <p className="text-[#222222]/80 text-center sm:text-left leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-[#222222]/50 mt-8 max-w-xl mx-auto">
          Os arquivos são digitais. Você recebe os modelos para edição; impressão, materiais e embalagens físicas são contratados separadamente.        </p>
      </div>
    </section>
  );
}

export function Bonuses() {
  const bonuses = [
    { num: 1, title: "50 legendas para suas postagens", desc: "Textos de apoio para adaptar ao seu negócio e acompanhar a divulgação.", img: config.images.bonusCaptions },
    { num: 2, title: "30 modelos de stories", desc: "Opções para mostrar o cardápio, avisar que está aberto e apresentar novidades.", img: config.images.bonusStories },
    { num: 3, title: "12 modelos de combos e promoções", desc: "Apresente suas próprias ofertas com clareza, incluindo condições e preços.", img: config.images.bonusCombos },
    { num: 4, title: "Calendário de conteúdo de 30 dias", desc: "Um roteiro simples para organizar o que publicar ao longo do mês.", img: config.images.bonusCalendar },
  ];

  return (
    <section className="bg-[#20201E] py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#F6F1E8]">
          E no Premium você também recebe:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonuses.map((b) => (
            <div key={b.num} className="bg-[#F6F1E8]/5 border border-[#F6F1E8]/10 rounded-2xl overflow-hidden flex flex-col hover:border-[#E87516]/40 transition-all shadow-xl">
              <div className="relative aspect-square bg-[#F6F1E8]/10 p-3 flex items-center justify-center">
                <div className="absolute top-3 left-3 bg-[#E87516] text-white text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded uppercase tracking-wider z-10 shadow">
                  Incluso no Premium
                </div>
                <img src={b.img} alt={b.title} className="w-full h-full object-contain rounded-lg drop-shadow-md" />
              </div>
              <div className="p-6 flex flex-col grow">
                <span className="text-[#E87516] font-bold text-sm mb-2 uppercase">Bônus {b.num}</span>
                <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                <p className="text-[#F6F1E8]/70 text-sm mt-auto">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const [upsellStep, setUpsellStep] = useState<1 | 2 | null>(null);
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
    <section id="pacotes" className="bg-[#F6F1E8] py-16 md:py-24 px-4 scroll-mt-10 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#20201E] mb-4">
            Escolha como você quer começar.
          </h2>
          <p className="text-lg text-[#222222]/80 max-w-2xl mx-auto">
            Do essencial ao conjunto completo, com pagamento único e acesso vitalício.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch">

          {/* Link para o Premium no celular antes do Básico */}
          <div className="md:hidden w-full text-center mb-2">
            <a href="#premium" className="text-[#C95508] font-bold underline underline-offset-4">
              Ver Premium completo
            </a>
          </div>

          {/* Pacote Básico */}
          <div className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-md border border-[#20201E]/10 flex flex-col relative">
            <h3 className="text-xl font-bold text-[#20201E] mb-2">Básico — para dar o primeiro passo</h3>
            <p className="text-[#222222]/70 text-sm mb-6 min-h-[40px]">Uma seleção prática para começar a organizar sua apresentação.</p>

            <div className="mb-6">
              <span className="text-4xl font-extrabold text-[#20201E]">R$ {config.basicPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>

            <a
              href={config.basicCheckoutUrl}
              onClick={handleBasicClick}
              className="bg-[#20201E] hover:bg-black transition-colors text-white font-bold py-3 px-4 rounded-xl text-center w-full mb-8 cursor-pointer shadow-md active:scale-98"
            >
              QUERO O PACOTE BÁSICO
            </a>

            <div className="space-y-3 flex-grow">
              <p className="font-bold text-[#20201E] text-sm pb-2 border-b border-[#20201E]/10">32 modelos principais.</p>
              {[
                "20 artes para Instagram.",
                "4 variações de cardápio.",
                "2 artes para embalagens.",
                "2 modelos de cartão de contato.",
                "4 modelos de etiquetas e adesivos.",
                "Entrega por e-mail após aprovação.",
                "Acesso vitalício.",
                "Licença de uso comercial nos termos do produto.",
                "Garantia de 7 dias."
              ].map((item, i) => (
                <div key={i} className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#20201E] shrink-0 mr-2 mt-0.5" />
                  <span className="text-[#222222]/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pacote Premium */}
          <div id="premium" className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-xl border-2 border-[#E87516] flex flex-col relative scroll-mt-10 md:-mt-4 md:mb-4 scale-100 md:scale-105 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E87516] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Pacote Completo
            </div>

            <h3 className="text-xl font-bold text-[#20201E] mb-2 mt-2">Premium — sua marca em todos os detalhes</h3>
            <p className="text-[#C95508] font-bold text-sm mb-6 min-h-[40px]">Por R$ {diff.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} a mais que o Básico, receba 120 modelos principais e os 4 bônus.</p>

            <div className="mb-6">
              <span className="text-4xl font-extrabold text-[#20201E]">R$ {config.premiumPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>

            <a
              href={config.premiumCheckoutUrl}
              className="bg-[#E87516] hover:bg-[#C95508] transition-colors text-white font-bold py-4 px-4 rounded-xl text-center w-full mb-8 shadow-lg shadow-[#E87516]/30"
            >
              QUERO O PREMIUM POR R$ {config.premiumPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </a>

            <div className="space-y-3 flex-grow">
              <p className="font-bold text-[#20201E] text-sm pb-2 border-b border-[#20201E]/10">120 modelos + 4 Bônus.</p>
              {[
                "50 artes para Instagram.",
                "20 variações de cardápio.",
                "15 artes para embalagens.",
                "10 modelos de cartão de contato.",
                "25 modelos de etiquetas e adesivos.",
                <span key="b1"><strong className="text-[#C95508]">Bônus:</strong> 50 legendas.</span>,
                <span key="b2"><strong className="text-[#C95508]">Bônus:</strong> 30 modelos de stories.</span>,
                <span key="b3"><strong className="text-[#C95508]">Bônus:</strong> 12 modelos de combos e promoções.</span>,
                <span key="b4"><strong className="text-[#C95508]">Bônus:</strong> calendário de conteúdo de 30 dias.</span>,
                "Entrega por e-mail após aprovação.",
                "Acesso vitalício.",
                "Licença de uso comercial nos termos do produto.",
                "Garantia de 7 dias."
              ].map((item, i) => (
                <div key={i} className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-[#E87516] shrink-0 mr-2 mt-0.5" />
                  <span className="text-[#222222]/90 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-sm font-bold text-[#20201E]">Compra única. Sem mensalidade do pack.</p>
          <p className="text-xs text-[#222222]/60 mt-1 max-w-md mx-auto">Escolha a forma de pagamento disponível no checkout. O acesso é liberado após a confirmação.</p>
        </div>
      </div>

      {/* Upsell / Downsell Modal Popup */}
      {upsellStep !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white text-[#20201E] w-full max-w-lg rounded-3xl shadow-2xl p-6 sm:p-8 relative overflow-hidden border-2 border-[#E87516] max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={closeUpsell}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-20"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {upsellStep === 1 ? (
              /* ETAPA 1: UPSELL DE MUDANÇA PARA PREMIUM R$ 27,99 */
              <div className="text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-[#E87516]/10 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-[#E87516]" />
                </div>

                <span className="bg-[#E87516] text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-widest py-1 px-3 rounded-full mb-3">
                  🔥 ESPERE! OFERTA DE UPGRADE IMPERDÍVEL
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#20201E] mb-3 leading-tight">
                  Por apenas <span className="text-[#E87516]">R$ 10,00 a mais</span> você leva o Pacote Completo!
                </h3>

                <p className="text-xs sm:text-sm text-[#222222]/80 mb-5 leading-relaxed">
                  No pacote Básico você recebe apenas 32 modelos. Ao escolher o <strong>Premium</strong>, você garante <strong>120 modelos principais + 4 Bônus Exclusivos</strong> para o seu negócio!
                </p>

                {/* Caixa de Benefícios */}
                <div className="w-full bg-[#F6F1E8] p-4 rounded-2xl border border-[#20201E]/10 mb-6 text-left space-y-2 text-xs sm:text-sm">
                  <div className="font-bold text-[#20201E] pb-1 border-b border-[#20201E]/10 text-center">
                    Tudo o que você leva no Premium por + R$ 10,00:
                  </div>
                  <div className="flex items-center text-[#20201E]">
                    <Check className="w-4 h-4 text-[#E87516] mr-2 shrink-0" />
                    <span><strong>120 Modelos Principais</strong> (vs 32 do Básico)</span>
                  </div>
                  <div className="flex items-center text-[#20201E]">
                    <Check className="w-4 h-4 text-[#E87516] mr-2 shrink-0" />
                    <span><strong>Bônus 1:</strong> 50 Legendas para suas postagens</span>
                  </div>
                  <div className="flex items-center text-[#20201E]">
                    <Check className="w-4 h-4 text-[#E87516] mr-2 shrink-0" />
                    <span><strong>Bônus 2:</strong> 30 Modelos de Stories</span>
                  </div>
                  <div className="flex items-center text-[#20201E]">
                    <Check className="w-4 h-4 text-[#E87516] mr-2 shrink-0" />
                    <span><strong>Bônus 3:</strong> 12 Modelos de Combos e Promoções</span>
                  </div>
                  <div className="flex items-center text-[#20201E]">
                    <Check className="w-4 h-4 text-[#E87516] mr-2 shrink-0" />
                    <span><strong>Bônus 4:</strong> Calendário de Conteúdo de 30 Dias</span>
                  </div>
                </div>

                <a
                  href={config.premiumCheckoutUrl}
                  className="w-full bg-[#E87516] hover:bg-[#C95508] text-white font-extrabold text-sm sm:text-base py-4 px-6 rounded-xl shadow-lg shadow-[#E87516]/30 transition-all text-center mb-3"
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
              /* ETAPA 2: DOWNSELL DESCONTO PREMIUM R$ 19,99 */
              <div className="text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Flame className="w-8 h-8 text-red-600 animate-pulse" />
                </div>

                <span className="bg-red-600 text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-widest py-1 px-3 rounded-full mb-3">
                  ⚡ ÚLTIMA CHANCE: DESCONTO EXCLUSIVO
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#20201E] mb-2 leading-tight">
                  Leve o Pacote Premium por apenas <span className="text-red-600">R$ 19,99</span>!
                </h3>

                <p className="text-xs sm:text-sm text-[#222222]/80 mb-5 leading-relaxed">
                  Não queremos que você fique sem os modelos e os bônus! Liberamos um <strong>desconto único</strong>: por apenas <strong>R$ 2,00 a mais</strong> que o Básico, você garante o <strong>Premium Completo (120 modelos + 4 Bônus)</strong>!
                </p>

                {/* Caixa de Preço Promocional */}
                <div className="w-full bg-red-50 p-4 rounded-2xl border border-red-200 mb-6 text-center">
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

export function Guarantee() {
  return (
    <section className="bg-[#F6F1E8] py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#20201E]/10 text-center flex flex-col items-center relative overflow-hidden">

        {/* Selo de Garantia */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-[#E87516]/15 rounded-full blur-2xl scale-125"></div>
          <img
            src={config.images.guaranteeBadge}
            alt="Selo de 7 Dias de Garantia"
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain relative z-10 drop-shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        <span className="bg-[#E87516]/10 text-[#C95508] text-xs sm:text-sm font-extrabold uppercase tracking-widest py-1.5 px-4 rounded-full mb-4">
          Risco Zero Para Você
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#20201E] mb-4 leading-tight">
          Teste por 7 dias com garantia incondicional.
        </h2>

        <p className="text-base sm:text-lg text-[#222222]/85 mb-8 max-w-xl leading-relaxed">
          Após a compra, você tem <strong>7 dias inteiros</strong> para explorar os modelos e avaliar no seu negócio. Se por qualquer motivo não ficar satisfeito, basta solicitar o reembolso e devolveremos 100% do seu dinheiro.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8 text-left bg-[#F6F1E8]/80 p-4 sm:p-5 rounded-2xl border border-[#20201E]/5">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-[#E87516] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-[#20201E]">Satisfação 100% Garantida</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-[#E87516] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-[#20201E]">Reembolso Sem Burocracia</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-[#E87516] shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-[#20201E]">Acesso Imediato</span>
          </div>
        </div>

        <a
          href="#pacotes"
          className="bg-[#E87516] hover:bg-[#C95508] text-white transition-all font-bold py-4 px-8 rounded-xl shadow-lg shadow-[#E87516]/30 text-base sm:text-lg w-full sm:w-auto"
        >
          QUERO ESCOLHER MEU PACOTE COM GARANTIA
        </a>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { title: "Escolha seu pacote", desc: "Selecione o Básico ou o Premium e siga para o checkout." },
    { title: "Confirme o pagamento", desc: "A liberação acontece após a aprovação do pagamento." },
    { title: "Receba no seu e-mail", desc: "As instruções e os links de acesso serão enviados ao e-mail informado na compra." },
    { title: "Personalize e use", desc: "Abra os modelos, adapte suas informações e prepare os materiais para postar ou imprimir." },
  ];

  return (
    <section className="bg-[#F6F1E8] py-16 md:py-24 px-4 border-t border-[#20201E]/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#20201E] mb-12">Comprou, recebeu, personalizou.</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="text-center sm:text-left">
              <div className="w-10 h-10 bg-[#E87516] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto sm:mx-0">
                {i + 1}
              </div>
              <h3 className="font-bold text-[#20201E] mb-2">{step.title}</h3>
              <p className="text-sm text-[#222222]/80">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#20201E] text-white rounded-2xl p-8 md:p-10 text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Acesso vitalício aos arquivos adquiridos.</h3>
          <p className="text-[#F6F1E8]/80">
            Você poderá baixar e guardar os arquivos recebidos para continuar usando no seu negócio. Não há mensalidade do pack.
          </p>
        </div>
      </div>
    </section>
  );
}

export function License() {
  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#20201E] mb-6">
          Personalize e use na divulgação do seu negócio.
        </h2>
        <p className="text-lg text-[#222222]/80 mb-6">
          O pack inclui licença de uso comercial dos materiais fornecidos para personalizar e divulgar seu próprio negócio, conforme os termos de uso.
        </p>
        <p className="font-semibold text-[#20201E] mb-6">
          Você pode usar as artes finais nas suas redes sociais, cardápios, cartões, etiquetas e aplicações externas de embalagens.
        </p>
        <div className="bg-[#F6F1E8] p-6 rounded-xl border border-[#20201E]/10">
          <p className="text-sm text-[#222222]/70">
            A licença não permite revender, compartilhar ou distribuir os arquivos editáveis como um novo pack. Elementos de terceiros seguem suas respectivas licenças.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: "O que eu recebo?", a: "Você recebe arquivos digitais e links para os modelos do pacote escolhido. As quantidades e os bônus estão descritos na comparação dos planos." },
    { q: "Vou receber caixas, cartões e etiquetas pelo correio?", a: "Não. Este é um produto digital. Você recebe as artes para personalizar. Impressão, embalagens e demais materiais físicos não estão inclusos." },
    { q: "Como recebo meu acesso?", a: "As instruções e links são enviados ao e-mail informado na compra, após a aprovação do pagamento. Confira também as pastas de spam e promoções." },
    { q: "Posso editar pelo celular?", a: "Sim. Os modelos serão preparados para personalização no Canva pelo celular ou computador. O tutorial explica o acesso e a edição." },
    { q: "Preciso ter experiência com design?", a: "Você parte de modelos prontos e pode alterar as informações do seu negócio seguindo o tutorial." },
    { q: "Preciso do Canva Pro?", a: "Os modelos do pack devem ser preparados e validados para uso no Canva gratuito. Se você adicionar por conta própria elementos pagos, eles podem exigir uma assinatura ou pagamento adicional." },
    { q: "Posso mudar cores, preços e fotos?", a: "Sim, nos elementos editáveis dos modelos. Você pode adaptar as informações e utilizar fotos reais dos seus produtos." },
    { q: "As embalagens vêm prontas?", a: "Não. O pack oferece artes para personalização externa de embalagens. Você utiliza embalagens físicas adequadas ao seu produto e providencia a impressão das artes separadamente." },
    { q: "O acesso tem mensalidade?", a: "Não. A compra do pack é única, com acesso vitalício aos arquivos adquiridos." },
    { q: "O Premium inclui o Básico?", a: "Sim. O Premium inclui os modelos do Básico dentro do total anunciado e acrescenta mais opções e os quatro bônus." },
    { q: "Posso revender os arquivos?", a: "Não. A licença permite utilizar os materiais no seu negócio, mas não revender ou redistribuir os arquivos editáveis." },
    { q: "E se eu não gostar?", a: "Você pode solicitar o reembolso dentro de 7 dias após a compra, pelo canal indicado no pedido." },
    { q: "Quais formas de pagamento estão disponíveis?", a: "As opções e condições são apresentadas no checkout antes da conclusão da compra." },
    { q: "O pack garante aumento das vendas?", a: "Não há garantia de resultados comerciais. O objetivo é facilitar a criação dos materiais e melhorar a apresentação do negócio." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F6F1E8] py-16 md:py-24 px-4 border-t border-[#20201E]/5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#20201E] mb-12">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-[#20201E]/5 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-4 font-bold text-[#20201E] flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#E87516] focus:ring-inset"
                aria-expanded={openIndex === i}
              >
                <span className="pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#E87516] transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`px-6 pb-4 text-[#222222]/80 transition-all duration-300 ease-in-out ${openIndex === i ? 'block' : 'hidden'}`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#20201E] text-[#F6F1E8] py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          O capricho da sua brasa merece aparecer na sua marca.
        </h2>
        <p className="text-lg text-[#F6F1E8]/80 mb-8 max-w-2xl mx-auto">
          Escolha seu pacote e tenha uma base pronta para criar cardápios, divulgar seus espetinhos e personalizar a apresentação dos pedidos.
        </p>

        <div className="flex flex-col items-center mb-16">
          <a
            href="#premium"
            className="bg-[#E87516] hover:bg-[#C95508] transition-colors text-white font-bold text-lg py-4 px-8 rounded-xl w-full sm:w-auto shadow-lg shadow-[#E87516]/30 mb-3 text-center"
          >
            QUERO O PACK PREMIUM
          </a>
          <p className="text-xs text-[#F6F1E8]/50 font-medium text-center">
            R$ {config.premiumPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} • Pagamento único • Garantia de 7 dias
          </p>
          <a href="#pacotes" className="mt-4 text-[#C95508] hover:text-white transition-colors underline font-semibold text-sm">
            Comparar os pacotes
          </a>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col items-center space-y-4 text-xs text-[#F6F1E8]/40">
          <p className="font-bold text-white/60">{config.productName}</p>
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          {config.sellerName && <p>Distribuído por: {config.sellerName} {config.sellerDocument && `- ${config.sellerDocument}`}</p>}
          <p>Produto Digital.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {config.supportEmail && <a href={`mailto:${config.supportEmail}`} className="hover:text-white transition-colors">Suporte: {config.supportEmail}</a>}
            {config.termsUrl !== '#' && <a href={config.termsUrl} className="hover:text-white transition-colors">Termos de Uso</a>}
            {config.privacyUrl !== '#' && <a href={config.privacyUrl} className="hover:text-white transition-colors">Política de Privacidade</a>}
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-[10px]">
            Este produto não é afiliado, patrocinado ou endossado pelo Instagram, Meta ou Canva.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      const pacotes = document.getElementById('pacotes');

      if (hero && pacotes) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        const pacotesTop = pacotes.getBoundingClientRect().top;

        // Show after hero is out of view, hide when pricing is in view
        if (heroBottom < 0 && pacotesTop > window.innerHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden pb-[calc(1rem+env(safe-area-inset-bottom))] bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
      <div className="bg-white rounded-xl shadow-2xl p-3 flex items-center justify-between pointer-events-auto border border-[#20201E]/10">
        <div className="flex flex-col">
          <span className="font-bold text-[#20201E] leading-none">Premium</span>
          <span className="text-sm font-extrabold text-[#C95508]">R$ {config.premiumPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
        </div>
        <a
          href="#premium"
          className="bg-[#E87516] text-white font-bold py-2 px-6 rounded-lg text-sm shadow-md"
        >
          VER PACOTE
        </a>
      </div>
    </div>
  );
}
