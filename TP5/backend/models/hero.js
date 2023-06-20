const mongoose = require("mongoose");
const {PetSchema} = require("./pet")

const Schema = mongoose.Schema;

const HeroSchema = new Schema({
  name: { type: Schema.Types.String, required: true, minLength:3, maxLength: 100 },
  pet: PetSchema
});

HeroSchema.virtual("url").get(function () {
  return `/hero/${this._id}`;
});

// Export model
module.exports = mongoose.model("Hero", HeroSchema);
