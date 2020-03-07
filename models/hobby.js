'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hobby = sequelize.define('Hobby', {
    title: DataTypes.STRING
  }, {
    tableName: 'hobbies'
  });
  Hobby.associate = function(models) {
    Hobby.belongsTo(models.Student, {foreignKey: 'StudentId'})
  };
  return Hobby;
};