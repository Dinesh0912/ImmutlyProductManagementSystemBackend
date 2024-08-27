const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: { type: String, unique: true, required: true },
  productName: { type: String, required: true },
  productDescription: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  availabilityStatus: { type: Boolean, required: true },
});

module.exports = mongoose.model('Product', productSchema);
