const model = require('../model/model');

class Controller {
    static getIndex = async (req, res) => {
        try {
            res.render('home', {
                title: "Home"
            });
        } catch (err) {
            return res.status(401).send(err);
        }
    }

    static insertDocoment = async (req, res) => {
        try {
            const { title, content } = req.body;
            const newData = new model({
                title: title,
                content: content
            });

            const saveData = await newData.save();
            return res.redirect("/");
            // return res.status(201).send({
            //     message : "new data inserted successfully",
            //     data : saveData
            // });
        } catch (err) {
            return res.status(401).send(err);
        }
    }

    static readAllData = async (req, res) => {
        try {
            const allData = await model.find();
            return res.status(201).render('list', {
                title: "Get all data",
                data: allData
            });
        } catch (err) {
            return res.status(401).send(err);
        }
    }

    static getUpdate = async (req, res) => {
        try {
            const _id = req.params.id;
            const data = await model.findOne({ _id });
            return res.status(201).render('update', {
                title: "Update Data",
                data: data
            });
        } catch (err) {
            return res.status(401).send(err);
        }
    }

    static updateData = async (req, res) => {
        try {
            const _id = req.params.id;
            const { title, content } = req.body;
            const updateData = await model.findByIdAndUpdate({ _id },
                {
                    $set: {
                        title: title,
                        content: content
                    }
                },
                { new: true }
            );
            return res.redirect("/get-all-data");
        } catch (err) {
            return res.status(401).send(err);
        }
    }

    static deleteData = async (req, res) => {
        try {
            const _id = req.body.studentId;
            const deleteData = await model.findByIdAndDelete(_id);
            return res.redirect("/get-all-data");
        } catch (err) {
            return res.status(401).send(err);
        }
    }
}

module.exports = Controller;