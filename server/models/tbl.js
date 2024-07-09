const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  carousel_img_1: String,
  carousel_des_1: String

});

const UserModel = mongoose.model("carousel", UserSchema);
module.exports = UserModel;
