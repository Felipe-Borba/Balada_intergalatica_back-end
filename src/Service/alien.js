import AlienRepository from "../Repository/alien.js";

async function createAlien(alien) {
  return await AlienRepository.insertAlien(alien);
}

async function getAlien() {
  return await AlienRepository.getAlien();
}

async function getAlienById(id) {
  return await AlienRepository.getAlienById(id);
}

async function updateAlien(alien) {
  return await AlienRepository.updateAlien(alien);
}

//TODO only if there is no costumer with this party id
async function deleteAlien(id) {
  return await AlienRepository.deleteAlien(id);
}

export default {
  createAlien,
  getAlien,
  getAlienById,
  updateAlien,
  deleteAlien,
};
