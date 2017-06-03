'use strict';

module.exports = function(sequelize, Datatypes) {
    var burgers = sequelize.define('burgers', {
        burger_name: Datatypes.STRING,
        devoured: Datatypes.BOOLEAN
    }, {
        classMethods: {
            associate: function(models) {

            }
        }

    });

    module.exports = burgers;
};
