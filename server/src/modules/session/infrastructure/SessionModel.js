const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  tableId: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true, index: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', default: null },
  startedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  startTime: { type: Date, required: true, default: Date.now },
  endTime: { type: Date, default: null },
  totalAmount: { type: Number, default: 0 },
  status: { type: String, enum: ['active', 'completed'], default: 'active', index: true },
}, { timestamps: true });

module.exports = mongoose.model('Session', sessionSchema);
