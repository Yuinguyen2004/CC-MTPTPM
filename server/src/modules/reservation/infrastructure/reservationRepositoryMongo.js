const ReservationModel = require('./ReservationModel');

function createReservationRepositoryMongo() {
  return Object.freeze({
    findById: (id) => ReservationModel.findById(id).populate('tableId'),
    add: (reservationData) => ReservationModel.create(reservationData),
    updateById: (id, data) =>
      ReservationModel.findByIdAndUpdate(id, data, { new: true }).populate('tableId'),
    findByDate: (date) => {
      const start = new Date(date);
      start.setHours(0, 0, 0, 0);
      const end = new Date(date);
      end.setHours(23, 59, 59, 999);
      return ReservationModel.find({ date: { $gte: start, $lte: end } })
        .populate('tableId')
        .sort({ timeSlot: 1 });
    },
    findByPhone: (phone) =>
      ReservationModel.find({ customerPhone: phone })
        .populate('tableId')
        .sort({ date: -1 }),
  });
}

module.exports = createReservationRepositoryMongo;
