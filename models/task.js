'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
//        date: DataTypes.STRING,
        title: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Task;
};