'use strict'

module.exports = (sequelize, DataTypes) => {  
  const Submenu = sequelize.define('submenu', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      // defaultValue: DataTypes.UUIDV4,
      // allowNull: false
    },
    menu_id :{
      type:DataTypes.UUID
    },
    submenu_title: {
      type: DataTypes.STRING      
    },
    price: {
      type: DataTypes.FLOAT    
    },
    food_status: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING    
    },
    variant_title: {
      type: DataTypes.STRING    
    },
    currency: {
      type: DataTypes.STRING    
    },
    
  });
  return Submenu;
};