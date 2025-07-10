'use strict';

/** @type {import('sequelize-cli').Migration} */
  export async function up(queryInterface, Sequelize) {

    await queryInterface.createTable('categories', { 
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

  }

  export async function down(queryInterface) {

    await queryInterface.dropTable('categories');

  }

