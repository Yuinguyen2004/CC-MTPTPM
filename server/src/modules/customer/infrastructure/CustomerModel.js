const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, unique: true, trim: true, index: true },
  type: { type: String, enum: ['walk-in', 'member'], default: 'walk-in' },
  points: { type: Number, default: 0 },
  totalSpent: { type: Number, default: 0 },
  visits: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);
