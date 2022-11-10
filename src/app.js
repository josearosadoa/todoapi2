const express = require('express');
const initModels = require('./models/initModels');
const morgan = require('morgan');
const handlerError = require('./middlewares/error');

//importamos la instancia de la database.js 

const db = require('./utils/database');
require('dotenv').config();
const logs = require('./middlewares/requestLogs');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(logs);

app.use( (req, res, next) => {
    console.log("Antes de atender la peticion");
    next();
})

const userRoutes = require('./Routes/users.route');  //importo las rutas del usuario
const tasksRoutes = require('./Routes/tasks.routes');

db.authenticate() //devuelve una promesa
.then(() => console.log("Autenticacion exitosa"))
.catch((error) => console.log(error));


db.sync({force: false})
.then(()=> console.log("base de datos sincronizada"))
.catch((error) => console.log(error));

initModels();

app.get('/', (req, res, next) => {
    console.log("antes de responder en la raiz");
    next();
}, (req, res) => {
    res.status(200).json("todo bien");
});


app.use('/api/v1', userRoutes);
app.use('/api/v1', tasksRoutes);

const PORT = process.env.PORT || 3000;

app.use(handlerError); 

app.listen(PORT, () => {
    console.log('servidor corriendo' + PORT);
}); 