const express = require('express');
const route = express.Router();
const Controller = require('../controller/contoller');

route.get("/",Controller.getIndex);
route.post("/",Controller.insertDocoment);
route.get('/get-all-data',Controller.readAllData);
route.get("/update/:id",Controller.getUpdate);
route.post("/update/:id",Controller.updateData);
route.post('/delete',Controller.deleteData);
module.exports = route;