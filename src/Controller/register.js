import service from "../Service/register.js";

async function CheckIn(req, res, next) {
  try {
    let data = req.body;

    if (!data.alien_id || !data.festa_id || !data.objetos) {
      throw new Error("campos: objetos, alien_id e festa_id são obrigatórios");
    }

    data = {
      alienId: data.alien_id,
      partyId: data.festa_id,
      checkIn: new Date(),
      objects: data.objetos,
    };

    res.send(await service.checkIn(data));
  } catch (error) {
    next(error);
  }
}

async function CheckOut(req, res, next) {
  try {
    const alienId = req.params.id;

    res.send(await service.checkOut(alienId));
  } catch (error) {
    next(error);
  }
}

export default {
  CheckIn,
  CheckOut,
};
