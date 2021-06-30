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

async function deleteBacklog(id) {
  await Backlog.destroy({
    where: {
      backlogId: id,
    },
  });

  return `backlog id=${id} deleted`;
}

export default {
  insertBacklog,
  getBacklog,
  getBacklogById,
  updateBacklog,
  deleteBacklog,
};
