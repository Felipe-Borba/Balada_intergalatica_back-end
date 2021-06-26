import service from "../Service/register.js";

async function CheckIn(req, res, next) {
  try {
    let data = req.body;

    if (!data.alien_id || !data.festa_id) {
      throw new Error("campos: alien_id e festa_id são obrigatórios");
    }

    data = {
      alienId: data.alien_id,
      partyId: data.festa_id,
      checkIn: new Date(),
    };

    res.send(await service.checkIn(data));
  } catch (error) {
    next(error);
  }
}

async function CheckOut(req, res, next) {
  try {
    //TODO implementation
    const alienId = req.params.id;

    res.send("to be implemented");
  } catch (error) {
    next(error);
  }
}

export default {
  CheckIn,
  CheckOut,
};
