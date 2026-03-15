const CustomerModel = require('./CustomerModel');

function createCustomerRepositoryMongo() {
  return Object.freeze({
    findById: (id) => CustomerModel.findById(id),
    findByPhone: (phone) => CustomerModel.findOne({ phone }),
    add: (customerData) => CustomerModel.create(customerData),
    updateById: (id, data) => CustomerModel.findByIdAndUpdate(id, data, { new: true }),
    search: (query, { page = 1, limit = 20 } = {}) => {
      const filter = {};
      if (query.phone) filter.phone = { $regex: query.phone, $options: 'i' };
      if (query.name) filter.name = { $regex: query.name, $options: 'i' };
      if (query.type) filter.type = query.type;
      return CustomerModel.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit);
    },
    getTopCustomers: (limit = 10) =>
      CustomerModel.find({ type: 'member' }).sort({ totalSpent: -1 }).limit(limit),
  });
}

module.exports = createCustomerRepositoryMongo;
