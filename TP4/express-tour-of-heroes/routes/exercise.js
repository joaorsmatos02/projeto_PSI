const express = require("express");
const router = express.Router();

const pet_controller = require("../controllers/petController");
const hero_controller = require("../controllers/heroController");

const Hero = require("../models/hero");
const { Pet } = require("../models/pet");

// hero

router.get("/heroes", hero_controller.heroes_get);

router.get("/hero/:id", hero_controller.hero_id_get);

router.post("/hero", hero_controller.hero_post);

router.put("/hero/:id", hero_controller.hero_id_put);

router.delete("/hero/:id", hero_controller.hero_id_delete);

// pets

router.get("/pets", pet_controller.pets_get);

router.get("/pet/:id", pet_controller.pet_id_get);

// init
router.get("/init", function(req, res, next) {
    Hero.find().exec(
        function(err, list_heroes) {
            if(err) {
                return next(err);
            }
            list_heroes.forEach(
                function(hero) {
                    hero.delete();
                }
            )
        }
    )
    Pet.find().exec(
        function(err, list_pets) {
            if(err) {
                return next(err);
            }
            list_pets.forEach(
                function(pet) {
                    pet.delete();
                }
            )
        }
    )
    const pet1 = new Pet({name: "Peixe"});
    const pet2 = new Pet({name: "Morcego"});
    const pet3 = new Pet({name: "Tarantula"});
    pet1.save();
    pet2.save();
    pet3.save();
    const hero1 = new Hero({name: "Aqua Man", pet: pet1});
    const hero2 = new Hero({name: "Batman", pet: pet2});
    const hero3 = new Hero({name: "Homem Aranha", pet: pet3});
    hero1.save();
    hero2.save();
    hero3.save();
    res.send("");
});

module.exports = router;