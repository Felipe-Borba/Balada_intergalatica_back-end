import Sequelize from "sequelize";
import Connection from "../connection.js";
import Alien from "./alien.js";
import Party from "./party.js";

const Costumer = Connection.define(
  "costumers",
  {
    costumerId: {
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
      allowNull: true,
    },
  },
  { underscored: true }
);

Costumer.belongsTo(Alien, { foreignKey: "alienId" });
Costumer.belongsTo(Party, { foreignKey: "partyId" });

export default Costumer;
