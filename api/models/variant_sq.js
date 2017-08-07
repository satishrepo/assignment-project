'use strict'

module.exports = (sequelize, DataTypes) => {  
  const Variants = sequelize.define('variant_data', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      // defaultValue: DataTypes.UUIDV4,
      // allowNull: false
    },
    submenu_id :{
      type:DataTypes.UUID
    },
    options: {
      type: DataTypes.STRING      
    },
    price: {
      type: DataTypes.FLOAT      
    },    
  });

  return Variants;
};