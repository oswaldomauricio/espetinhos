import React from 'react';
import { CheckCircle2, Mail, ArrowLeft, HelpCircle } from 'lucide-react';
import { config } from '../config';

export function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#F6F1E8] font-sans text-[#20201E] flex flex-col justify-between">
      {/* Top Header */}
      <header className="bg-[#20201E] text-white py-4 px-4 text-center border-b border-[#E87516]/30">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-lg sm:text-xl text-[#F6F1E8] flex items-center space-x-2">
            <span className="text-[#E87516]">🔥</span>
            <span>{config.productName}</span>
          </a>
          <a 
            href="/" 
            className="text-xs sm:text-sm text-[#F6F1E8]/80 hover:text-[#E87516] flex items-center space-x-1 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao site</span>
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="grow py-12 md:py-20 px-4 flex items-center justify-center">
        <div className="w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-12 shadow-2xl border border-[#20201E]/10 text-center relative overflow-hidden">
          
          {/* Success Icon */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#E87516]/10 text-[#E87516] rounded-full flex items-center justify-center mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-[#E87516]/20 rounded-full animate-ping opacity-75"></div>
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#E87516] relative z-10" />
          </div>

          <span className="bg-[#E87516]/10 text-[#C95508] text-xs sm:text-sm font-extrabold uppercase tracking-widest py-1.5 px-4 rounded-full inline-block mb-4">
            🎉 Pedido Confirmado com Sucesso!
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#20201E] mb-4 leading-tight">
            Obrigado pela sua compra!
          </h1>

          <p className="text-base sm:text-xl text-[#222222]/80 mb-8 max-w-xl mx-auto leading-relaxed">
            Seu pagamento foi confirmado. O seu pacote com todos os arquivos editáveis no Canva está sendo enviado o mais breve possível para o seu e-mail.
          </p>

          {/* Delivery Notice Box */}
          <div className="bg-[#20201E] text-white p-6 sm:p-8 rounded-2xl mb-8 text-left shadow-lg border border-[#E87516]/30 relative overflow-hidden">
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="w-6 h-6 text-[#E87516] shrink-0" />
              <h2 className="text-lg sm:text-xl font-bold text-white">Envio via E-mail</h2>
            </div>
            
            <p className="text-sm sm:text-base text-[#F6F1E8]/90 leading-relaxed mb-4">
              Confira a sua caixa de entrada no e-mail utilizado na compra. Em instantes você receberá a mensagem com o acesso completo aos arquivos e materiais do pack.
            </p>

            <div className="bg-white/10 p-4 rounded-xl border border-white/10 text-xs sm:text-sm text-amber-200">
              <strong className="text-white block mb-1">💡 Dica Importante:</strong>
              Caso não encontre a mensagem na sua caixa de entrada principal dentro de alguns minutos, verifique também as pastas de <strong>Spam</strong>, <strong>Lixo Eletrônico</strong> ou a aba <strong>Promoções</strong>.
            </div>
          </div>

          {/* Steps */}
          <div className="mb-10 text-left">
            <h3 className="text-lg font-bold text-[#20201E] mb-4 text-center sm:text-left">
              Próximos passos simples:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#F6F1E8]/70 p-4 rounded-xl border border-[#20201E]/5">
                <span className="w-7 h-7 bg-[#E87516] text-white rounded-full flex items-center justify-center font-bold text-xs mb-2">1</span>
                <h4 className="font-bold text-sm text-[#20201E] mb-1">Abra seu E-mail</h4>
                <p className="text-xs text-[#222222]/70">Acesse o e-mail cadastrado na hora da compra.</p>
              </div>

              <div className="bg-[#F6F1E8]/70 p-4 rounded-xl border border-[#20201E]/5">
                <span className="w-7 h-7 bg-[#E87516] text-white rounded-full flex items-center justify-center font-bold text-xs mb-2">2</span>
                <h4 className="font-bold text-sm text-[#20201E] mb-1">Clique no Acesso</h4>
                <p className="text-xs text-[#222222]/70">Abra o link enviado para abrir os modelos no Canva.</p>
              </div>

              <div className="bg-[#F6F1E8]/70 p-4 rounded-xl border border-[#20201E]/5">
                <span className="w-7 h-7 bg-[#E87516] text-white rounded-full flex items-center justify-center font-bold text-xs mb-2">3</span>
                <h4 className="font-bold text-sm text-[#20201E] mb-1">Edite no Canva</h4>
                <p className="text-xs text-[#222222]/70">Personalize preços, fotos e contatos do seu negócio!</p>
              </div>
            </div>
          </div>

          {/* Support Line */}
          <div className="pt-6 border-t border-[#20201E]/10 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-[#222222]/70 gap-4">
            <div className="flex items-center space-x-2">
              <HelpCircle className="w-4 h-4 text-[#E87516]" />
              <span>Dúvidas com seu pedido?</span>
            </div>
            {config.supportEmail && (
              <a 
                href={`mailto:${config.supportEmail}`} 
                className="font-semibold text-[#C95508] hover:underline"
              >
                Suporte: {config.supportEmail}
              </a>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#20201E] text-[#F6F1E8]/50 py-6 px-4 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} {config.productName}. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
