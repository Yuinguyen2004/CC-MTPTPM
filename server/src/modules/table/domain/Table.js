const TABLE_TYPES = Object.freeze({ FLAT: 'flat', CAROM: 'carom' });
const TABLE_STATUSES = Object.freeze({
  AVAILABLE: 'available',
  OCCUPIED: 'occupied',
  RESERVED: 'reserved',
  MAINTENANCE: 'maintenance',
});

function createTable({
  tableNo,
  name,
  type = TABLE_TYPES.FLAT,
  pricePerHour,
  status = TABLE_STATUSES.AVAILABLE,
  position = { x: 0, y: 0 },
}) {
  return Object.freeze({
    getTableNo: () => tableNo,
    getName: () => name,
    getType: () => type,
    getPricePerHour: () => pricePerHour,
    getStatus: () => status,
    getPosition: () => ({ ...position }),
    toObject: () => ({ tableNo, name, type, pricePerHour, status, position }),
  });
}

module.exports = { createTable, TABLE_TYPES, TABLE_STATUSES };
