'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    tableName: 'students'
  });
  Student.associate = function(models) {
    Student.hasMany(models.Hobby);
  };
  return Student;
};
