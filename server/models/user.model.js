const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "First name is required"],
		minlength: [3, "First name must be at least 6 characters long"]
	},
	img: {
		type:String,
		required: [true, "Img URL is required"],
		minlength: [10, "Img URL must be at least 10 characters long"]
	},
	position: {
		type:String,
		required: [true, "Position is required"],
		minlength: [3, "Position must be at least 6 characters long"]
	},
	treasure: {
		type:Number,
		required: [true, "Treasure amount is required"],
		minlength: [1, "Treasure must be at least 1 characters long"]
	},
	phrase: {
		type:String,
		required: [true, "Phrase is required"],
		minlength: [5, "Phrase must be at least 6 characters long"]
	},
	peg: {
		type:String,
		required: [true, "Y/N is required"],
		minlength: [1, "Must require an answer"]
	},
	eye: {
		type:String,
		required: [true, "Y/N is required"],
		minlength: [1, "Must require an answer"]
	},
	hook: {
		type:String,
		required: [true, "Y/N is required"],
		minlength: [1, "Must require an answer"]
	},
});

const User = mongoose.model("User", UserSchema);

module.exports = User;