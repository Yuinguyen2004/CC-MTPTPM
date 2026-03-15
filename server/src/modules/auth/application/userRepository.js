function createUserRepository(impl) {
  return Object.freeze({
    findById: (id) => impl.findById(id),
    findByProperty: (property, value) => impl.findByProperty(property, value),
    add: (userData) => impl.add(userData),
    updateById: (id, data) => impl.updateById(id, data),
    deleteById: (id) => impl.deleteById(id),
  });
}

module.exports = createUserRepository;
