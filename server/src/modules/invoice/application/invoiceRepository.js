function createInvoiceRepository(impl) {
  return Object.freeze({
    findById: (id) => impl.findById(id),
    add: (invoiceData) => impl.add(invoiceData),
    findByDateRange: (from, to, options) => impl.findByDateRange(from, to, options),
    getRevenueStats: (from, to) => impl.getRevenueStats(from, to),
  });
}

module.exports = createInvoiceRepository;
