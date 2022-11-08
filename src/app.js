const express = require('express');
const initModels = require('./models/initModels');

//importamos la instancia de la database.js 

const db = require('./utils/database');
require('dotenv').config();

const userRoutes = require('./Routes/users.route');  //importo las rutas del usuario
const tasksRoutes = require('./Routes/tasks.routes');

db.authenticate() //devuelve una promesa
.then(() => console.log("Autenticacion exitosa"))
.catch((error) => console.log(error));


db.sync({force: false})
.then(()=> console.log("base de datos sincronizada"))
.catch((error) => console.log(error));

initModels();
const app = express();
app.get('/', (req, res) => {
    res.status(200).json("todo bien");
});

app.use(express.json());
app.use('/api/v1', userRoutes);
app.use('/api/v1', tasksRoutes);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log('servidor corriendo' + PORT);
}); 