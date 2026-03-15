const UserModel = require('./UserModel');

function createUserRepositoryMongo() {
  return Object.freeze({
    findById: (id) => UserModel.findById(id),
    findByProperty: (property, value) => UserModel.findOne({ [property]: value }),
    add: (userData) => UserModel.create(userData),
    updateById: (id, data) => UserModel.findByIdAndUpdate(id, data, { new: true }),
    deleteById: (id) => UserModel.findByIdAndDelete(id),
  });
}

module.exports = createUserRepositoryMongo;
