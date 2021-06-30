import Register from "../DataBase/models/register.js";

async function insertRegister(register) {
  return await Register.create(register);
}

async function getRegister() {
  return await Register.findAll();
}

async function getRegisterById(id) {
  return await Register.findByPk(id);
}

async function getRegisterByAlienId(alienId) {
  return await Register.findAll({
    where: {
      alienId,
    },
  });
}

async function getRegisterByPartyId(partyId) {
  return await Register.findAll({
    where: {
      partyId,
    },
  });
}

async function updateRegister(register) {
  await Register.update(register, {
    where: {
      registerId: register.registerId,
    },
  });

  return await getRegisterById(register.registerId);
}

async function deleteRegister(id) {
  await Register.destroy({
    where: {
      alien_id: id,
    },
  });

  return `register id=${id} deleted`;
}

export default {
  insertRegister,
  getRegister,
  getRegisterById,
  getRegisterByAlienId,
  updateRegister,
  deleteRegister,
  getRegisterByPartyId,
};
