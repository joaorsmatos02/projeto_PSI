const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true},
  email: { type: String, required: true},
  password: { type: String, required: true},
  gameList: [{ type: Schema.Types.ObjectId, ref: 'Game' }]
});

UserSchema.virtual("url").get(function () {
    return `/user/${this._id}`;
  });

// Export model
module.exports = mongoose.model("User", UserSchema);