const RESERVATION_STATUSES = Object.freeze({
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  CANCELLED: 'cancelled',
});

function createReservation({
  tableId,
  customerName,
  customerPhone,
  date,
  timeSlot,
  status = RESERVATION_STATUSES.PENDING,
}) {
  return Object.freeze({
    getTableId: () => tableId,
    getCustomerName: () => customerName,
    getCustomerPhone: () => customerPhone,
    getDate: () => date,
    getTimeSlot: () => timeSlot,
    getStatus: () => status,
    toObject: () => ({ tableId, customerName, customerPhone, date, timeSlot, status }),
  });
}

module.exports = { createReservation, RESERVATION_STATUSES };
