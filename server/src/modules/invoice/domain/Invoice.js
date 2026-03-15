const PAYMENT_METHODS = Object.freeze({ CASH: 'cash', TRANSFER: 'transfer' });

function createInvoice({
  sessionId,
  tableCharge = 0,
  fbCharge = 0,
  discount = 0,
  totalAmount = 0,
  paidAt = null,
  paymentMethod = PAYMENT_METHODS.CASH,
}) {
  return Object.freeze({
    getSessionId: () => sessionId,
    getTableCharge: () => tableCharge,
    getFbCharge: () => fbCharge,
    getDiscount: () => discount,
    getTotalAmount: () => totalAmount,
    getPaidAt: () => paidAt,
    getPaymentMethod: () => paymentMethod,
    toObject: () => ({
      sessionId,
      tableCharge,
      fbCharge,
      discount,
      totalAmount,
      paidAt,
      paymentMethod,
    }),
  });
}

module.exports = { createInvoice, PAYMENT_METHODS };
