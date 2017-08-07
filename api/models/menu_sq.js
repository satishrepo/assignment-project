'use strict';

module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('menu', {
      menu_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        // defaultValue: DataTypes.UUIDV4,
        // allowNull: false
      },
      menu: {
        type: DataTypes.STRING      
      },
      restaurant_id: {
        type: DataTypes.INTEGER,
        required: true
      },
      
  })
  return Menu;
};
