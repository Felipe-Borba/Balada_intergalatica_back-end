import express from "express";
import Controller from "../Controller/alien.js";

const AlienRouter = express.Router();

AlienRouter.post("/", Controller.createAlien);
AlienRouter.get("/", Controller.getAlien);
AlienRouter.get("/:id", Controller.getAlienById);
AlienRouter.put("/", Controller.updateAlien);
AlienRouter.delete("/:id", Controller.deleteAlien);

export default AlienRouter;
