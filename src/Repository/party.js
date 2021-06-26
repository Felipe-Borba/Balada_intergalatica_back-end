import Party from "../DataBase/models/party.js";

async function insertParty(party) {
  return await Party.create(party);
}

async function getParty() {
  return await Party.findAll();
}

async function getParty(id) {
  return await Party.findByPk(id);
}

async function updateParty(party) {
  await Party.update(party, {
    where: {
      partyId: party.partyId,
    },
  });

  return await getParty(party.partyId);
}

async function deleteParty(id) {
  await Party.destroy({
    where: {
      partyId: id,
    },
  });

  return `party id=${id} deleted`;
}

export default {
  insertParty,
  getParty,
  updateParty,
  deleteParty,
};
