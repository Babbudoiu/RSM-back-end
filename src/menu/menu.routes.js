const { Router } = require("express");
const menuRouter = Router();
const { createItem, listMenu, findItem, deleteItem, updateItem } = require('./menu.controllers');

menuRouter.post('/menu', createItem);
menuRouter.get('/menu', listMenu);
menuRouter.get('/menu/:name', findItem);
menuRouter.delete('/menu/:name', deleteItem);
menuRouter.put('/menu', updateItem);

module.exports = menuRouter;