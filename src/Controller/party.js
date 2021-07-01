import service from "../Service/party.js";

async function createParty(req, res, next) {
  try {
    let party = req.body;

    if (!party.nome) {
      throw new Error("campo nome é obrigatório");
    }
    if (!party.itensProibidos) {
      party.itensProibidos = [];
    }

    party = {
      name: party.nome,
      restrictedItems: party.itensProibidos,
    };

    res.send(await service.createParty(party));
  } catch (error) {
    next(error);
  }
}

async function getParty(req, res, next) {
  try {
    res.send(await service.getParty());
  } catch (error) {
    next(error);
  }
}

async function getPartyById(req, res, next) {
  try {
    const id = req.params.id;
    res.send(await service.getPartyById(id));
  } catch (error) {
    next(error);
  }
}

async function updateParty(req, res, next) {
  try {
    let party = req.body;

    if (!party.nome || !party.id) {
      throw new Error("campo nome e id são obrigatórios");
    }
    if (!party.itensProibidos) {
      party.itensProibidos = [];
    }

    party = {
      partyId: party.id,
      name: party.nome,
      restrictedItems: party.itensProibidos,
    };

    res.send(await service.updateParty(party));
  } catch (error) {
    next(error);
  }
}

async function deleteParty(req, res, next) {
  try {
    const id = req.params.id;
    res.send(await service.deleteParty(id));
  } catch (error) {
    next(error);
  }
}

export default {
  createParty,
  getParty,
  getPartyById,
  updateParty,
  deleteParty,
};
