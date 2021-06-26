import Sequelize from "sequelize";
import Connection from "../connection.js";
import Alien from "./alien.js";
import Party from "./party.js";

const Backlog = Connection.define(
  "backlogs",
  {
    backlogId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    checkIn: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    checkOut: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  { underscored: true }
);

Backlog.belongsTo(Alien, { foreignKey: "alienId" });
Backlog.belongsTo(Party, { foreignKey: "partyId" });

export default Backlog;
