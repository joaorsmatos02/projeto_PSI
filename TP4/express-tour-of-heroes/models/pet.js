const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PetSchema = new Schema({
  name: { type: Schema.Types.String, required: true, minLength:3, maxLength: 100 },
});

PetSchema.virtual("url").get(function () {
  return `/catalog/pet/${this._id}`;
});

// Export model
module.exports.Pet = mongoose.model("Pet", PetSchema);
module.exports.PetSchema = PetSchema
