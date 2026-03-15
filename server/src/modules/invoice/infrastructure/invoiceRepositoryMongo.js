const InvoiceModel = require('./InvoiceModel');

function createInvoiceRepositoryMongo() {
  return Object.freeze({
    findById: (id) =>
      InvoiceModel.findById(id).populate({
        path: 'sessionId',
        populate: [
          { path: 'tableId' },
          { path: 'customerId' },
          { path: 'startedBy', select: '-password' },
        ],
      }),
    add: (invoiceData) => InvoiceModel.create(invoiceData),
    findByDateRange: (from, to, { page = 1, limit = 20 } = {}) =>
      InvoiceModel.find({ paidAt: { $gte: from, $lte: to } })
        .populate({ path: 'sessionId', populate: [{ path: 'tableId' }, { path: 'customerId' }] })
        .sort({ paidAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit),
    getRevenueStats: (from, to) =>
      InvoiceModel.aggregate([
        { $match: { paidAt: { $gte: from, $lte: to } } },
        {
          $group: {
            _id: { $dateToString: { format: '%Y-%m-%d', date: '$paidAt' } },
            totalRevenue: { $sum: '$totalAmount' },
            tableRevenue: { $sum: '$tableCharge' },
            fbRevenue: { $sum: '$fbCharge' },
            totalDiscount: { $sum: '$discount' },
            count: { $sum: 1 },
          },
        },
        { $sort: { _id: 1 } },
      ]),
  });
}

module.exports = createInvoiceRepositoryMongo;
