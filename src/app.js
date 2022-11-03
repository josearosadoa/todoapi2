const express = require('express');
const initModels = require('./models/initModels');

//importamos la instancia de la database.js 

const db = require('./utils/database');

db.authenticate() //devuelve una promesa
.then(() => console.log("Autenticacion exitosa"))
.catch((error) => console.log(error));


db.sync()
.then(()=> console.log("base de datos sincronizada"))
.catch((error) => console.log(error));

initModels();
const app = express();
app.get('/', (req, res) => {
    res.status(200).json("todo bien");
});

const PORT = 8000;


app.listen(8000, () => {
    console.log('servidor corriendo');
});