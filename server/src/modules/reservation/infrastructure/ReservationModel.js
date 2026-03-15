const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  tableId: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true, index: true },
  customerName: { type: String, required: true, trim: true },
  customerPhone: { type: String, required: true, trim: true, index: true },
  date: { type: Date, required: true, index: true },
  timeSlot: { type: String, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending', index: true },
}, { timestamps: true });

module.exports = mongoose.model('Reservation', reservationSchema);
