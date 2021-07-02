import app from "./app.js";
import env from "dotenv";

import createTables from "./DataBase/create.table.js";

env.config();

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  await createTables();
  console.log(`api started on http://localhost:${PORT}`);
});
