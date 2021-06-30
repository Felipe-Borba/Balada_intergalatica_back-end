import service from "../Service/alien.js";

async function createAlien(req, res, next) {
  try {
    let alien = req.body;

    if (!alien.nome || !alien.dataDeNascimento) {
      throw new Error("campos: nome e dataDeNascimento são obrigatórios");
    }
    alien = {
      name: alien.nome,
      earthBirthday: alien.dataDeNascimento,
      banned: false,
    };

    res.send(await service.createAlien(alien));
  } catch (error) {
    next(error);
  }
}

async function getAlien(req, res, next) {
  try {
    const aliens = await service.getAlien();
    aliens.sort((a, b) => a.alienId - b.alienId);
    res.send(aliens);
  } catch (error) {
    next(error);
  }
}

async function getAlienById(req, res, next) {
  try {
    const id = req.params.id;
    res.send(await service.getAlienById(id));
  } catch (error) {
    next(error);
  }
}

async function updateAlien(req, res, next) {
  try {
    let alien = req.body;

    if (!alien.nome || !alien.dataDeNascimento) {
      throw new Error("campos: id, nome e dataDeNascimento são obrigatórios");
    }
    alien = {
      alienId: alien.id,
      name: alien.nome,
      earthBirthday: alien.dataDeNascimento,
      banned: alien.banido,
    };

    res.send(await service.updateAlien(alien));
  } catch (error) {
    next(error);
  }
}

async function deleteAlien(req, res, next) {
  try {
    const id = req.params.id;

    res.send(await service.deleteAlien(id));
  } catch (error) {
    next(error);
  }
}

export default {
  createAlien,
  getAlien,
  getAlienById,
  updateAlien,
  deleteAlien,
};
