function createTableRepository(impl) {
  return Object.freeze({
    findAll: () => impl.findAll(),
    findById: (id) => impl.findById(id),
    add: (tableData) => impl.add(tableData),
    updateById: (id, data) => impl.updateById(id, data),
    deleteById: (id) => impl.deleteById(id),
    updateStatus: (id, status) => impl.updateStatus(id, status),
    findByTableNo: (tableNo) => impl.findByTableNo(tableNo),
  });
}

module.exports = createTableRepository;
