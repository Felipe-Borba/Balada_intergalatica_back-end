import PartyRepository from "../Repository/party.js";
import RegisterRepository from "../Repository/register.js";
import BacklogRepository from "../Repository/backlog.js";

async function createParty(party) {
  return await PartyRepository.insertParty(party);
}

async function getParty() {
  return await PartyRepository.getParty();
}

async function getPartyById(id) {
  return await PartyRepository.getPartyById(id);
}

async function updateParty(party) {
  return await PartyRepository.updateParty(party);
}

async function deleteParty(id) {
  const register = await RegisterRepository.getRegisterByPartyId(id);
  if (register.length > 0) {
    throw new Error("existe alien dentro dessa festa");
  }

  const backlog = await BacklogRepository.getBacklogByPartyId(id);
  if (backlog.length > 0) {
    throw new Error(
      "Essa balada tem backlog registrado, e por isso não é possivel excluir"
    );
  }

  return await PartyRepository.deleteParty(id);
}

export default {
  createParty,
  getParty,
  getPartyById,
  updateParty,
  deleteParty,
};
