function createOrder({ sessionId, items = [], totalAmount = 0 }) {
  return Object.freeze({
    getSessionId: () => sessionId,
    getItems: () => items.map((item) => ({ ...item })),
    getTotalAmount: () => totalAmount,
    toObject: () => ({
      sessionId,
      items: items.map((item) => ({ ...item })),
      totalAmount,
    }),
  });
}

module.exports = { createOrder };
