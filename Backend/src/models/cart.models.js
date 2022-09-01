const mongoose = require("mongoose");

// makeup SCHEMA
// Step 1 :- creating the schema
const CartSchema = new mongoose.Schema(
    {
        imgSrc : { type: String, required:true } ,
        Name : {type: String, required:true },
        ratingNum: { type: Number, required: false, } ,
        price: { type: Number, required: true },
        amount: { type: Number, required: false }
     
    },
    {
      versionKey: false,
      timestamps: true, // createdAt, updatedAt
    }
  );
  
  // Step 2 : creating the model
  const Cart = mongoose.model("cart",CartSchema); // user => users

  module.exports=Cart;
