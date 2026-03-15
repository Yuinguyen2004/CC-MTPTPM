const OrderModel = require('./OrderModel');

function createOrderRepositoryMongo() {
  return Object.freeze({
    findBySessionId: (sessionId) =>
      OrderModel.find({ sessionId }).sort({ createdAt: -1 }),
    add: (orderData) => OrderModel.create(orderData),
    deleteById: (id) => OrderModel.findByIdAndDelete(id),
  });
}

module.exports = createOrderRepositoryMongo;
