'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Coms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName:{
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue:''
      },
      coms: {
        allowNull:false,
        type: Sequelize.STRING
      },
      PostId: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Coms',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Coms');
  }
};