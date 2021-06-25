import Alien from './DataBase/models/alien.js'
import createTables from './DataBase/create.table.js';


createTables();

const res = dbTest({
  name: 'felipe',
  earthBirthday: "01/09/1995"
}).then((res)=>console.log("hello world:", res.dataValues));


async function dbTest(data) {
  try {
    return await Alien.create(data);
  } catch (error) {
    throw error;
  }
}
