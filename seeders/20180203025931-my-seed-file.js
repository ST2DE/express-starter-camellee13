'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Tasks', [{
        title: '測試 A',
//        date: '2018/05/22',
        createdAt : new Date(),
        updatedAt : new Date(),
      }, {
        title: '測試 B',
//        date: '2018/05/21',
        createdAt : new Date(),
        updatedAt : new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
