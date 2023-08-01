import Express from "express";
import cors from "cors";
// import routes from "./Routes/Routes.js";

const app = Express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// app.use("/api", routes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
