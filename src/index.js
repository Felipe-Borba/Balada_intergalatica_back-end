import express from "express";
import cors from "cors";

import createTables from "./DataBase/create.table.js";
import AlienRouter from "./Router/alien.js";
import PartyRouter from "./Router/party.js";
import CustomerRouter from "./Router/customer.js";

const app = express();
app.use(express.json());
app.use(cors);

app.use("/alien", AlienRouter);
app.use("/party", PartyRouter);
app.use("/costumer", CustomerRouter);

app.use((err, req, res, _) => {
  console.log(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

const PORT = 8080;
app.listen(PORT, () => {
  await createTables();
  console.log(`api started on http://localhost:${PORT}`);
});
