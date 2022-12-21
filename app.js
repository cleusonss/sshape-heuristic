require("dotenv").config();

const http = require("http");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const server = http.createServer(app);
const { log } = console;
/* Middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

/* Configuraão CORS */
/* Configura CORS */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type,Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, DELETE, GET"
    );
    return res.status(200).send({});
  }

  next();
});

/* Picker */
const Picker = require("./services/sshape");


/* Rotas */
const ProductRouter = require("./routes/ProductRouter");
const OrderRouter = require("./routes/OrderRouter");
const PickRouter = require("./routes/PickRouter");

app.post("/products", ProductRouter);
app.get("/picks/:cod", PickRouter);

app.get("/products", ProductRouter);


app.post("/orders", OrderRouter);
app.get("/orders/:cod", OrderRouter);


/* Rota não Encontrada */
app.use((req, res, next) => {
  const error = new Error("Endpoint not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({ status: "error", message: error.message });
});

// Server Listening
const port = process.env.PORT || 3000;
server.listen(port, () => {
  log("listening on port " + port);
});
