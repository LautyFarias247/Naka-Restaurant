const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    username: {
      type: String,
			required: true
    },
		given_name:{
			type: String
		},
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      default: null,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: "address" }],
    cart: {
      type: Array,
      default: [],
    },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "order" }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//model
module.exports = mongoose.model("user", UserSchema);
