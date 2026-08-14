// IDs de precio de ejemplo/placeholder (test mode). Reemplazar por los reales
// antes de salir a producción.
const STRIPE_PRICE_IDS = {
  basic: 'price_basic_123',
  completo: 'price_profesional_456',
  premium: 'price_premium_789'
};

export function getStripeCheckoutUrl(planId) {
  const priceId = STRIPE_PRICE_IDS[planId];
  return `https://buy.stripe.com/test_${priceId}`;
}
