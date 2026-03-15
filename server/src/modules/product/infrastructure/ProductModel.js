const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  category: { type: String, enum: ['drink', 'food', 'snack'], required: true, index: true },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, default: 0, min: 0 },
  image: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
