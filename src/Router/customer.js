import express from "express";

const CustomerRouter = express.Router();

CustomerRouter.post("/");
CustomerRouter.get("/");
CustomerRouter.get("/:id");
CustomerRouter.put("/");
CustomerRouter.delete("/:id");

export default CustomerRouter;
