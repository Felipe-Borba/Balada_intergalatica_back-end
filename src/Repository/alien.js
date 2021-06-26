import Alien from "../DataBase/models/alien.js";

async function insertAlien(alien) {
  return await Alien.create(alien);
}

async function getAlien() {
  return await Alien.findAll();
}

async function getAlien(id) {
  return await Alien.findByPk(id);
}

async function updateAlien(alien) {
  await Alien.update(alien, {
    where: {
      alienId: alien.alienId,
    },
  });

  return await getAlien(alien.alienId);
}

async function deleteAlien(id) {
  await Alien.destroy({
    where: {
      alienId: id,
    },
  });

  return `alien id=${id} deleted`;
}

export default {
  insertAlien,
  getAlien,
  updateAlien,
  deleteAlien,
};
