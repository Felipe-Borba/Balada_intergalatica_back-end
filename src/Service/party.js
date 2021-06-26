import PartyRepository from "../Repository/party.js";

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
  //TODO only if there is no costumer with this party id
  return await PartyRepository.deleteParty(id);
}

export default {
  createParty,
  getParty,
  getPartyById,
  updateParty,
  deleteParty,
};
