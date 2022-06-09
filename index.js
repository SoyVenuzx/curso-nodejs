const express = require("express");
const req = require("express/lib/request");
const app = express();

const estudiantes = require('./stu.json');

//! Configuration
app.set("port", "8080");

//? Rutas
app.get('/estudiantes', (req, res) => {
  res.json(estudiantes);
});

app.get('/:id', (req, res) => {
  var id = req.params.id;
  var datos = [];

  for (var i = 0; i < estudiantes.length; ++i) {
    if (estudiantes[i].noCarnet === id) {
      datos.push(estudiantes[i]);
    }
  }

  res.json(datos);
});

app.post('/', (req, res) => {
  var estudiante = req.body;
  estudiantes.push(estudiante);
  res.send('Datos Guardados');
});

//! Servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});
