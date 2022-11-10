const db = require('../utils/database');
const initModels = require('../models/initModels');
const Users = require('../models/users.models');
const Address = require("../models/adresses.models");
const Tasks = require("../models/tasks.models");
const Categories = require("../models/categories.models");
const TaskCategories = require("../models/taskcategories.models");
//necesitamos los modelos donde vamos a plantar informacion 

const Users = require('../models/users.models');
const Address = require('../models/adresses.models');
const Tasks = require('../models/tasks.models');
const Categories = require('../models/categories.models');

initModels();

const users = [
    {username: "Jose Rosado", email: "jrosado@gmail.com", password: "1234"},
    {username: "Dani Rodriguez", email: "drodriguez@gmail.com", password: "5678"},
    {username: "Kiara Urbaez", email: "kurbaez@gmail.com", password: "5678"},

];

const addresses = [
    {street: "Buena Vista", number: 157, userId: 1},
    {street: "Benito Juarez", number: 57, userId: 2},
    {street: "Carlos tineo", number: 27, userId: 3},

];

const tasks = [
    {
        title: "Crear seeders",
        description: "Terminar el archivo para los seeders",
        userId: 1,
    },
    {
        title: "Pasear perro",
        description: "Darle la vuelta",
        userId: 2,
    },

    {
        title: "Tomar dos litros de agua",
        userId: 3,
    },

]

const categories = [
    {name: "personal"},
    {name: "escuela"},
    {name: "salud"},
    {name: "trabajo"},
    {name: "hogar"},
    {name: "deporte"},
    {name: "ocio"},
    {name: "financiero"},
];

const tc = [
    { taskId: 1, categoryId: 1 },
    { taskId: 1, categoryId: 2 },
    { taskId: 1, categoryId: 4 },
    { taskId: 2, categoryId: 1 },
    { taskId: 2, categoryId: 3 },
    { taskId: 2, categoryId: 6 },
    { taskId: 2, categoryId: 7 },
    { taskId: 3, categoryId: 1 },
    { taskId: 3, categoryId: 3 },
  ];
db.sync({ force: false })
  .then(async () => {
    console.log("Iniciando plantación");
    users.forEach((user) => Users.create(user));
  
    setTimeout(() => {
        addresses.forEach((address) => Address.create(address));
      }, 100);
      setTimeout(() => {
        categories.forEach((category) => Categories.create(category));
      }, 200);
      setTimeout(() => {
        tasks.forEach((task) => Tasks.create(task));
      }, 300);
      setTimeout(() => {
        tc.forEach((t) => TaskCategories.create(t));
      }, 400);
    });