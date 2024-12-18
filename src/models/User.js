import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  // fullName:{
  //   type: String,
  //   required: true,
  // },
  // phone:{
  //   type:Number,
  //   require: true,
  // },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type: String,
    default:"USER",
  },
  // idCode:{
  //   type:Number,
  //   required:false,
  // },
  // job:{
  //   type:String,
  //   required:false,
  // },
  // age:{
  //   type:Number,
  //   required:false
  // },
  // province:{
  //   type: String,
  //   required:false,
  // },
  // city:{
  //   type:String,
  //   required: false,
  // },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const User = models.User || model("User" , userSchema);

export default User;
