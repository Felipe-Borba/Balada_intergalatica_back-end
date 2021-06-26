import Sequelize from "sequelize";
import Connection from "../connection.js";

const Party = Connection.define(
  "parties",
  {
    partyId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    restrictedItems: {
      type: Sequelize.JSON,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default Party;
