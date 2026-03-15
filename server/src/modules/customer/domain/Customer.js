const CUSTOMER_TYPES = Object.freeze({ WALK_IN: 'walk-in', MEMBER: 'member' });

function createCustomer({
  name,
  phone,
  type = CUSTOMER_TYPES.WALK_IN,
  points = 0,
  totalSpent = 0,
  visits = 0,
}) {
  return Object.freeze({
    getName: () => name,
    getPhone: () => phone,
    getType: () => type,
    getPoints: () => points,
    getTotalSpent: () => totalSpent,
    getVisits: () => visits,
    toObject: () => ({ name, phone, type, points, totalSpent, visits }),
  });
}

module.exports = { createCustomer, CUSTOMER_TYPES };
