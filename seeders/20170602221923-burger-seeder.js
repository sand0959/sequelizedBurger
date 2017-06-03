'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('burgers', [],
      {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('burgers', null, {truncate : true});
  }
};
