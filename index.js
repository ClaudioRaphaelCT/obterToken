const { json } = require("express");
const express = require("express");
const app = express();

app.use(json());

app.post("/obterToken", (req, res) => {
  const erros = [];

  if (req.headers.user !== "Topaz") {
    erros.push({ status: "Header invalido" });
    res.status(401).send({ status: "Header invalido!" });
  }
  res.send({ type: "bear", key: "VG9wYXpUZXN0ZTIwMjM=" });
});

app.listen(3001, () => {
  console.log("Funcionando em http://localhost:3001");
});
