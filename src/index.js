import Alien from "./DataBase/models/alien.js";
import Party from "./DataBase/models/party.js";
import createTables from "./DataBase/create.table.js";

createTables();

test();

async function test() {
  const res = await dbTest({
    name: "felipe",
    restrictedItems: ["banana", "bone"],
  });
  console.log(res.dataValues);
}

async function dbTest(data) {
  try {
    return await Party.create(data);
  } catch (error) {
    throw error;
  }
}
