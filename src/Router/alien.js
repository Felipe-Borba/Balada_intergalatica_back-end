import express from "express";

const AlienRouter = express.Router();

AlienRouter.post("/");
AlienRouter.get("/");
AlienRouter.get("/:id");
AlienRouter.put("/");
AlienRouter.delete("/:id");

export default AlienRouter;
