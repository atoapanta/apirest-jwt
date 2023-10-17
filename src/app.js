import express from "express";
// import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routesAPI from "./routes/api";
import routes from "./routes/";
import connection from "./db/connection";
import "./models";

const corsOptions = {
  origin: "http://localhost:3000",
};

const app = express();

//MIDDLEWARES
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ROUTES
app.use("/api/v1", routesAPI);
app.use(routes);

//CONECTION SEQUELIZE
// connection.sync({ force: true }).then(() => {
//   // console.log("DROP AND RESYNC DB");
// });

// PATH ASSETS
// app.use(express.static(path.join(__dirname, "public")));

export default app;
