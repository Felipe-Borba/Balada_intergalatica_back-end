import express from "express";
import controller from "../Controller/customer.js";

const CustomerRouter = express.Router();

CustomerRouter.post("/", controller.createCustomer);
CustomerRouter.get("/", controller.getCustomer);
CustomerRouter.get("/:id", controller.getCustomerById);
CustomerRouter.put("/", controller.updateCustomer);
CustomerRouter.delete("/:id", controller.deleteCustomer);

export default CustomerRouter;
