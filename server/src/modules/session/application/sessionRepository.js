function createSessionRepository(impl) {
  return Object.freeze({
    findById: (id) => impl.findById(id),
    findActive: () => impl.findActive(),
    add: (sessionData) => impl.add(sessionData),
    updateById: (id, data) => impl.updateById(id, data),
    findByDateRange: (from, to, options) => impl.findByDateRange(from, to, options),
    findActiveByTableId: (tableId) => impl.findActiveByTableId(tableId),
  });
}

module.exports = createSessionRepository;
