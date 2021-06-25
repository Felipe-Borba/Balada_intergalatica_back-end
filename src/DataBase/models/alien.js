import Sequelize from 'sequelize';
import Connection from '../connection.js';

const Alien = Connection.define(
  "aliens",
  {
    alienId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    earthBirthday: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default Alien;