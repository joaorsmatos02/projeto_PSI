const Hero = require("../models/hero");
const { body, validationResult } = require("express-validator");

exports.heroes_get = function (req, res, next) {
    Hero.find().exec(
        function(err, list_heroes) {
            if (err) {
                return next(err);
            }
            res.set('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(list_heroes));
        }
    )
};

exports.hero_id_get = function (req, res, next) {
    Hero.findById(req.params.id).exec(
        function(err, hero) {
           if (err) {
               return next(err);
           }
           res.set('Content-Type', 'application/json');
           res.status(200).send(JSON.stringify(hero));
        }
   )
};

exports.hero_post = [
    body("name", "Hero name required").trim().isLength({ min: 3 }).escape(),
    (req, res, next) => {
        try {
            const errors = validationResult(req);
            var hero;
            if(errors.isEmpty()) {
                hero = new Hero({ name: req.body.name, pet: req.body.pet });
                hero.save((err) => {
                    if (err) {
                      return next(err);
                    }
                });
            }
            res.set('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(hero));
        } catch (err) {
            return { error: err.message };
        }
    },
];

exports.hero_id_put = [
    body("name", "Hero name required").trim().isLength({ min: 3 }).escape(),
    async (req, res, next) => {
        try {
            const errors = validationResult(req);
            var x = false;
            Hero.find().exec(
                function(err, list) {
                    list.forEach (
                        function(h) {
                            if(h.pet.name === req.body.pet.name) {
                                x = true;
                            }
                        }
                    );
                }
            );
            setTimeout(function () {
                if(!x) {
                    var updatedHero;
                    if(errors.isEmpty()) {
                        updatedHero = Hero.findById(req.params.id).exec(
                            function(err, hero) {
                                if (err) {
                                    return next(err);
                                }
                                hero.name = req.body.name;
                                hero.pet = req.body.pet;
                                hero.save((err) => {
                                    if (err) {
                                        return next(err);
                                    }
                                });
                                console.log("aqui");
                            }
                        );
                        res.set('Content-Type', 'application/json');
                        res.status(200).send(JSON.stringify(updatedHero));
                    }
                } else {
                    res.send("pet ja esta associdado");
                }
            }, 500);
        } catch (err) {
            return {error: err.message};
        }
    },
];

exports.hero_id_delete = function (req, res, next) {
    Hero.findById(req.params.id).exec(function(err, hero) {
        if (err || hero == null) {
            return next(err);
        }
        hero.delete();
        res.send("");
    });
};