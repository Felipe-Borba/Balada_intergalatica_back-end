import express from "express";
import controller from "../Controller/register.js";

const Router = express.Router();

Router.post("/", controller.CheckIn);
Router.get("/", controller.getRegister);
Router.delete("/:id", controller.CheckOut);

export default Router;
