'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      username : 'John Doe',
      password : '1234',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      username : 'wahyu',
      password : 'wahyuhidayat',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      username : 'dodi',
      password : '4567',
      createdAt : new Date(),
      updatedAt : new Date()
    }
  ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
