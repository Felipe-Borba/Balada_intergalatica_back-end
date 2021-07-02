import express from "express";
import cors from "cors";

import AlienRouter from "./Router/alien.js";
import PartyRouter from "./Router/party.js";
import RegisterRouter from "./Router/register.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/alien", AlienRouter);
app.use("/party", PartyRouter);
app.use("/register", RegisterRouter);

app.use((err, req, res, _) => {
  console.log(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

export default app;
