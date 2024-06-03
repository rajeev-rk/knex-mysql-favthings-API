const knex = require('../db/db');

module.exports.addPerson = async (req, res) => {
    let add = {};
    add.firstName = req.body.firstName;
    add.middleName = req.body.middleName;
    add.lastName = req.body.lastName;
    add.email = req.body.email;
    add.address = req.body.address;

    try {
        await knex("tbl_person").insert(add);
        res.json({ status: "success", message: "Person added successfully" });
    } catch (err) {
        res.json({ status: "error", message: err.message });
    }
};


module.exports.updatePerson = async (req, res) => {
    const personId = req.params.personId;
    let update = {};
    update.firstName = req.body.firstName;
    update.middleName = req.body.middleName;
    update.lastName = req.body.lastName;
    update.email = req.body.email;
    update.address = req.body.address;

    try {
        await knex("tbl_person")
            .where({ personId })
            .update(update);
        res.json({ status: "success", message: "Person updated successfully" });
    } catch (err) {
        res.json({ status: "error", message: err.message });
    }
};


module.exports.getPerson = async (req, res) => {
    const personId = req.params.personId;

    try {
        const person = await knex("tbl_person")
            .where({ personId })
            .first();
        if (person) {
            res.json({ status: "success", data: person });
        } else {
            res.json({ status: "error", message: "Person not found" });
        }
    } catch (err) {
        res.json({ status: "error", message: err.message });
    }
};


module.exports.addPersonFavourite = async (req, res) => {
    let favourite = {};
    favourite.game = req.body.game;
    favourite.book = req.body.book;
    favourite.movie = req.body.movie;
    favourite.series = req.body.series;
    favourite.anime = req.body.anime;
    favourite.personId = req.body.personId;

    try {
        await knex("tbl_favourite").insert(favourite);
        res.json({ status: "success", message: "Favourite added successfully" });
    } catch (err) {
        res.json({ status: "error", message: err.message });
    }
};


module.exports.getPersonWithFavourite = async (req, res) => {
    const personId = req.params.personId;

    try {
        const person = await knex("tbl_person")
            .where({ personId })
            .first();
        if (person) {
            const favourites = await knex("tbl_favourite")
                .where({ personId });
            person.favourites = favourites;
            res.json({ status: "success", data: person });
        } else {
            res.json({ status: "error", message: "Person not found" });
        }
    } catch (err) {
        res.json({ status: "error", message: err.message });
    }
};