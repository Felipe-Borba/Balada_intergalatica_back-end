import Backlog from "../DataBase/models/backlog.js";
import Alien from "../DataBase/models/alien.js";
import Party from "../DataBase/models/party.js";

async function insertBacklog(backlog) {
  return await Backlog.create(backlog);
}

async function getBacklog() {
  return await Backlog.findAll({
    include: [
      {
        model: Alien,
      },
      {
        model: Party,
      },
    ],
  });
}

async function getBacklogById(id) {
  return await Backlog.findByPk(id);
}

async function updateBacklog(backlog) {
  await Backlog.update(backlog, {
    where: {
      backlogId: backlog.backlogId,
    },
  });

  return await getBacklogById(backlog.backlogId);
}

async function deleteBacklog(backlogId) {
  await Backlog.destroy({
    where: {
      backlogId,
    },
  });

  return `backlog id=${backlogId} deleted`;
}

async function getBacklogByAlienId(alienId) {
  return await Backlog.findAll({
    where: {
      alienId,
    },
    include: [
      {
        model: Alien,
      },
    ],
  });
}

async function getBacklogByPartyId(partyId) {
  return await Backlog.findAll({
    where: {
      partyId,
    },
    include: [
      {
        model: Party,
      },
    ],
  });
}

export default {
  insertBacklog,
  getBacklog,
  getBacklogById,
  updateBacklog,
  deleteBacklog,
  getBacklogByAlienId,
  getBacklogByPartyId,
};
