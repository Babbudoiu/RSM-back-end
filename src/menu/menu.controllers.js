const Menu = require("./menu.models");

exports.createItem = async (req, res) => {
    try {
        const item = new Menu(req.body);
        const savedItem = await item.save();
        res.status(200).send({menu: savedItem, message: "Menu item created in database"})
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.listMenu = async (req,res) => {
    try {
        const list = await Menu.find({});
        res.status(200).send(list);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.findItem = async (req, res) => {
    try {
        const name = req.params.name;
        const targetItem = await Menu.findOne({name: name});
        res.status(200).send({ name: targetItem, message: 'Item found' });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const name = req.params.name;
        const removeItem = await Menu.findOneAndDelete({name: name});
        res.status(200).send({ name: removeItem, message: 'Menu item deleted from database' });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateItem = async (req, res) => {
    try {
        const name = req.body.name;
        const price = req.body.price;
        const course = req.body.course;
       
        const modifyItem = await Menu.updateOne({name: name, price: price, course: course});
        res.status(200).send( {name: modifyItem, message: 'Item updated'});
    } catch (error) {
        res.status(500).send(error);
    }
};
