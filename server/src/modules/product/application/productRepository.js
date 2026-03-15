function createProductRepository(impl) {
  return Object.freeze({
    findAll: (options) => impl.findAll(options),
    findById: (id) => impl.findById(id),
    add: (productData) => impl.add(productData),
    updateById: (id, data) => impl.updateById(id, data),
    deleteById: (id) => impl.deleteById(id),
    findByCategory: (category) => impl.findByCategory(category),
    updateStock: (id, quantity) => impl.updateStock(id, quantity),
  });
}

module.exports = createProductRepository;
