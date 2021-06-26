import express from "express";

const PartyRouter = express.Router();

PartyRouter.post("/");
PartyRouter.get("/");
PartyRouter.get("/:id");
PartyRouter.put("/");
PartyRouter.delete("/:id");

export default PartyRouter;
