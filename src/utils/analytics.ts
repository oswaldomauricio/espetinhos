declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Dispara evento no Google Analytics quando o usuário clica no botão de comprar/checkout
 * @param location Identificador de onde o botão foi clicado (ex: 'hero', 'pacote_basico', 'upsell_step1')
 * @param packageName Nome do pacote selecionado
 * @param price Valor do pacote
 */
export function trackBuyClick(location: string, packageName: string = 'Pack Espetinho de Marca', price: number = 17.99) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    // Evento personalizado fácil de ver nos relatórios do GA4 (Eventos -> click_buy_button)
    window.gtag('event', 'click_buy_button', {
      button_location: location,
      package_name: packageName,
      value: price,
      currency: 'BRL',
    });

    // Evento padrão do GA4 para início de finalização de compra
    window.gtag('event', 'begin_checkout', {
      currency: 'BRL',
      value: price,
      items: [
        {
          item_name: packageName,
          price: price,
          quantity: 1,
        },
      ],
    });
  }
}

/**
 * Dispara evento de conversão/compra concluída na página de Obrigado
 */
export function trackPurchase(value: number = 17.99) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'purchase', {
      transaction_id: `TX_${Date.now()}`,
      value: value,
      currency: 'BRL',
      items: [
        {
          item_name: 'Espetinho de Marca',
          quantity: 1,
        },
      ],
    });
  }
}
