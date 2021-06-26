import Alien from "./models/alien.js";
import Register from "./models/register.js";
import Party from "./models/party.js";
import Backlog from "./models/backlog.js";

export default async function createTables() {
  await Alien.sync({ alter: true });
  await Party.sync({ alter: true });
  await Register.sync({ alter: true });
  await Backlog.sync({ alter: true });
}
