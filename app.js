const router2 = require("./list-view-router");
const listEditRouter = require("./list-edit-router");

const express = require("express");
const app = express();
const port = 3001;

const validadorRequest = (req, res, next) => {
    const metodosValidos = ["GET", "POST", "PUT"]; // Métodos HTTP válidos// utilizamos el método includes para verificar si el método de la solicitud está en la lista de métodos válidos. 
     //Si no lo está, se devuelve una respuesta de error con el código de estado 400.
  
    if (!metodosValidos.includes(req.method)) {
      return res.status(400).json({ error: "Método HTTP inválido" });
    }
  
    next();
  };
const emptyBody = (req, res, next) => {
  if (req.method === "POST" && Object.keys(req.body).length === 0) {
    res.status(404).send("El cuerpo de la solicitud no debe estar vacío");
  } else {
    next();
  }
};

const atributos = (req, res, next) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Faltan atributos para crear la tarea" });
  } else {
    next();
  }
};

const solicitudPut = (req, res, next) => {
  if (req.method === "PUT" && Object.keys(req.body).length === 0) {
    res.status(404).send("El cuerpo de la solicitud no debe estar vacío");
  } else {
    next();
  }
};

const infoValida = (req, res, next) => {
  const { title, description } = req.body;
  if (!title || !description) {
    res.status(400).json({ error: "Faltan atributos para crear la tarea" });
  }
  next();
};

app.use(express.json());

app.use(
  "/edit",
  emptyBody,
  solicitudPut,
  atributos,
  infoValida,
  validadorRequest,
  listEditRouter
);
app.use("/", router2);

app.listen(port, () => {
  console.log(`listening on port ${port} `);
});
