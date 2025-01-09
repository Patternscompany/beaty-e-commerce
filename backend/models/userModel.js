
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name:{type:String, required: true},
//     email:{type:String,required: true,unique: true},
//     password:{type:String, required: true},
//     cartdata: {type:Object, default: {} }
// }, {minimize: false})

// const UserModel = mongoose.models.user || mongoose.model('user',userSchema);

// export default UserModel




// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     cartData: {type:Object, default: {} }
// },{minimize: false});

// const userModel = mongoose.model("User", userSchema);

// export default userModel;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cartData: { type: Object, default: {} }
}, { minimize: false });

const userModel = mongoose.model("User", userSchema);

export default userModel;
