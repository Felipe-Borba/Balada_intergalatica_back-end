import Sequelize from "sequelize";
import Connection from "../connection.js";
import Alien from "./alien.js";
import Party from "./party.js";

const Register = Connection.define(
  "registers",
  {
    registerId: {
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

Register.belongsTo(Alien, { foreignKey: "alienId" });
Register.belongsTo(Party, { foreignKey: "partyId" });

export default Register;
