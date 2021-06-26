import Alien from "./models/alien.js";
import Party from "./models/party.js";

export default async function createTables() {
  let res = await Alien.sync({ alter: true });
  res = await Party.sync({ alter: true });
}
