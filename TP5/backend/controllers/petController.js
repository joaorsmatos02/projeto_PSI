const { Pet } = require("../models/pet");

exports.pets_get = function (req, res, next) {
    Pet.find().exec(
         function(err, list_pets) {
            if (err) {
                return next(err);
            }
            res.set('Content-Type', 'application/json');
            res.status(200).send(JSON.stringify(list_pets));
         }
    )
};

exports.pet_id_get = function (req, res, next) {
    Pet.findById(req.params.id).exec(
        function(err, pet) {
           if (err) {
               return next(err);
           }
           res.set('Content-Type', 'application/json');
           res.status(200).send(JSON.stringify(pet));
        }
   )
};