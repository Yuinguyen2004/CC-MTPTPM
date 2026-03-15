const SessionModel = require('./SessionModel');

function createSessionRepositoryMongo() {
  return Object.freeze({
    findById: (id) =>
      SessionModel.findById(id)
        .populate('tableId')
        .populate('customerId')
        .populate('startedBy', '-password'),
    findActive: () =>
      SessionModel.find({ status: 'active' })
        .populate('tableId')
        .populate('customerId')
        .populate('startedBy', '-password'),
    add: (sessionData) => SessionModel.create(sessionData),
    updateById: (id, data) =>
      SessionModel.findByIdAndUpdate(id, data, { new: true })
        .populate('tableId')
        .populate('customerId'),
    findByDateRange: (from, to, { page = 1, limit = 20 } = {}) =>
      SessionModel.find({ startTime: { $gte: from, $lte: to } })
        .populate('tableId')
        .populate('customerId')
        .sort({ startTime: -1 })
        .skip((page - 1) * limit)
        .limit(limit),
    findActiveByTableId: (tableId) =>
      SessionModel.findOne({ tableId, status: 'active' })
        .populate('customerId'),
  });
}

module.exports = createSessionRepositoryMongo;
