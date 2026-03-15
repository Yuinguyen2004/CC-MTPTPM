function createOrderRepository(impl) {
  return Object.freeze({
    findBySessionId: (sessionId) => impl.findBySessionId(sessionId),
    add: (orderData) => impl.add(orderData),
    deleteById: (id) => impl.deleteById(id),
  });
}

module.exports = createOrderRepository;
