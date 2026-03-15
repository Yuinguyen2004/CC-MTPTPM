const TableModel = require('./TableModel');

function createTableRepositoryMongo() {
  return Object.freeze({
    findAll: () => TableModel.find().sort({ tableNo: 1 }),
    findById: (id) => TableModel.findById(id),
    add: (tableData) => TableModel.create(tableData),
    updateById: (id, data) => TableModel.findByIdAndUpdate(id, data, { new: true }),
    deleteById: (id) => TableModel.findByIdAndDelete(id),
    updateStatus: (id, status) => TableModel.findByIdAndUpdate(id, { status }, { new: true }),
    findByTableNo: (tableNo) => TableModel.findOne({ tableNo }),
  });
}

module.exports = createTableRepositoryMongo;
