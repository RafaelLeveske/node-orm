'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('Techs', {
      id: {
        type: Sequelize.INTEGER,
        primarKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  
},

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('Techs');
    
  }
};
