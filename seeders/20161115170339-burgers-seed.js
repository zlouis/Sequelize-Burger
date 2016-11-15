'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Burgers', [
      { burger_name: 'Bachi Burger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
      { burger_name: 'Brindle Burger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
      { burger_name: 'Americana Burger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
      { burger_name: 'The Company Burger', devoured: 0, createdAt: new Date(), updatedAt: new Date() }
    ],  {});
  },

  down: function (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('Burgers', null, {truncate : true});
  }
};