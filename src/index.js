import Nightclub from "./DataBase/models/customer.js";
import createTables from "./DataBase/create.table.js";

const int = async () => {
  await createTables();

  test();
};
int();

async function test() {
  const res = await dbTest({
    alienId: 1,
    partyId: 2,
    checkIn: "2021-01-09 12:00:00 +0000",
  });
  console.log(res.dataValues);
}

async function dbTest(data) {
  try {
    return await Nightclub.create(data);
  } catch (error) {
    throw error;
  }
}
