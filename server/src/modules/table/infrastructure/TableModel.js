const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  tableNo: { type: Number, required: true, unique: true },
  name: { type: String, required: true, trim: true },
  type: { type: String, enum: ['flat', 'carom'], default: 'flat' },
  pricePerHour: { type: Number, required: true, min: 0 },
  status: { type: String, enum: ['available', 'occupied', 'reserved', 'maintenance'], default: 'available', index: true },
  position: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
  },
}, { timestamps: true });

module.exports = mongoose.model('Table', tableSchema);
