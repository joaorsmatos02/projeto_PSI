//challenge

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: Schema.Types.String, required: true, minLength:3, maxLength: 100 },
});

// Virtual for Genre's URL
GenreSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/Genre/${this._id}`;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);
