import AlienRepository from "../Repository/alien.js";
import RegisterRepository from "../Repository/register.js";
import BacklogRepository from "../Repository/backlog.js";

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

async function deleteAlien(id) {
  const register = await RegisterRepository.getRegisterByAlienId(id);
  if (register.length > 0) {
    throw new Error("Esse alien está dentro de uma festa");
  }

  const backlog = await BacklogRepository.getBacklogByAlienId(id);
  if (backlog.length > 0) {
    throw new Error(
      "Esse alien tem backlog registrado, e por isso não é possivel excluir"
    );
  }

  return await AlienRepository.deleteAlien(id);
}

export default {
  createAlien,
  getAlien,
  getAlienById,
  updateAlien,
  deleteAlien,
};
