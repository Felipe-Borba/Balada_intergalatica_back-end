import Alien from "./models/alien.js";
import Costumer from "./models/customer.js";
import Party from "./models/party.js";

export default async function createTables() {
  await Alien.sync({ alter: true });
  await Party.sync({ alter: true });
  await Costumer.sync({ alter: true });
}
