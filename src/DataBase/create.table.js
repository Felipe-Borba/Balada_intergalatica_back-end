import Alien from './models/alien.js'

export default async function createTables() {
   await Alien.sync({ alter : true });

}
