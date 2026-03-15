function createReservationRepository(impl) {
  return Object.freeze({
    findById: (id) => impl.findById(id),
    add: (reservationData) => impl.add(reservationData),
    updateById: (id, data) => impl.updateById(id, data),
    findByDate: (date) => impl.findByDate(date),
    findByPhone: (phone) => impl.findByPhone(phone),
  });
}

module.exports = createReservationRepository;
