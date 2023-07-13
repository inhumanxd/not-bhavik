import express, { Application } from "express";
import dotenv from "dotenv";

import { router as routes } from "./routes";
import { errorHandler } from "./helpers";

dotenv.config();

const app: Application = express();

//set view engine to ejs
app.set("view engine", "ejs");
app.set("views", "src/views");

//set upp public directory to serve static files
app.use(express.static("src/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);
app.use(errorHandler); //Catch the handled error;

const PORT: number = Number(process.env.PORT) || 5000;

const run = async () => {
  app.listen(PORT, async () => {
    console.log(`🚀 Server is now running on http://localhost:${PORT}/`);
  });
};

run().catch((err: Error) => {
  console.error(err);
});

process.on("uncaughtException", (error, origin) => {
  console.info(origin);
  console.error(error);
  process.exit(1);
});
