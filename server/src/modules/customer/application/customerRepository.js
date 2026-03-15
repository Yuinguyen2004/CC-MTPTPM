function createCustomerRepository(impl) {
  return Object.freeze({
    findById: (id) => impl.findById(id),
    findByPhone: (phone) => impl.findByPhone(phone),
    add: (customerData) => impl.add(customerData),
    updateById: (id, data) => impl.updateById(id, data),
    search: (query, options) => impl.search(query, options),
    getTopCustomers: (limit) => impl.getTopCustomers(limit),
  });
}

module.exports = createCustomerRepository;
