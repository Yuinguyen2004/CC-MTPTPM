const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  sessionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Session', required: true, index: true },
  tableCharge: { type: Number, default: 0 },
  fbCharge: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  totalAmount: { type: Number, default: 0 },
  paidAt: { type: Date, default: null },
  paymentMethod: { type: String, enum: ['cash', 'transfer'], default: 'cash' },
}, { timestamps: true });

module.exports = mongoose.model('Invoice', invoiceSchema);
