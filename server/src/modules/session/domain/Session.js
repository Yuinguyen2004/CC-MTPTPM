const SESSION_STATUSES = Object.freeze({ ACTIVE: 'active', COMPLETED: 'completed' });

function createSession({
  tableId,
  customerId = null,
  startedBy,
  startTime = new Date(),
  endTime = null,
  totalAmount = 0,
  status = SESSION_STATUSES.ACTIVE,
}) {
  return Object.freeze({
    getTableId: () => tableId,
    getCustomerId: () => customerId,
    getStartedBy: () => startedBy,
    getStartTime: () => startTime,
    getEndTime: () => endTime,
    getTotalAmount: () => totalAmount,
    getStatus: () => status,
    toObject: () => ({ tableId, customerId, startedBy, startTime, endTime, totalAmount, status }),
  });
}

module.exports = { createSession, SESSION_STATUSES };
