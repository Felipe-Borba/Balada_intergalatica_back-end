import express from "express";
import controller from "../Controller/party.js";

const PartyRouter = express.Router();

PartyRouter.post("/", controller.createParty);
PartyRouter.get("/", controller.getParty);
PartyRouter.get("/:id", controller.getPartyById);
PartyRouter.put("/", controller.updateParty);
PartyRouter.delete("/:id", controller.deleteParty);

export default PartyRouter;
