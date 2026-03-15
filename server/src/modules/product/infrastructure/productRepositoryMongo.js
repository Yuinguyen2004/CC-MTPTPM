const ProductModel = require('./ProductModel');

function createProductRepositoryMongo() {
  return Object.freeze({
    findAll: ({ category, search, page = 1, limit = 50 } = {}) => {
      const filter = {};
      if (category) filter.category = category;
      if (search) filter.name = { $regex: search, $options: 'i' };
      return ProductModel.find(filter)
        .sort({ category: 1, name: 1 })
        .skip((page - 1) * limit)
        .limit(limit);
    },
    findById: (id) => ProductModel.findById(id),
    add: (productData) => ProductModel.create(productData),
    updateById: (id, data) => ProductModel.findByIdAndUpdate(id, data, { new: true }),
    deleteById: (id) => ProductModel.findByIdAndDelete(id),
    findByCategory: (category) => ProductModel.find({ category }).sort({ name: 1 }),
    updateStock: (id, quantity) =>
      ProductModel.findByIdAndUpdate(id, { $inc: { stock: quantity } }, { new: true }),
  });
}

module.exports = createProductRepositoryMongo;
