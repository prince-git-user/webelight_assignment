const mongoose = require("mongoose");

// USER SCHEMA
// Step 1 :- creating the schema
const brushSchema = new mongoose.Schema(
    {
        imgSrc : { type: String, required:true } ,
        Name : {type: String, required:true },
        ratingNum: { type: Number, required: true, } ,
        price: { type: Number, required: true },
        amount: { type: Number, required: true }
     
    },
    {
      versionKey: false,
      timestamps: true, // createdAt, updatedAt
    }
  );
  
  // Step 2 : creating the model
  const brush = mongoose.model("brush",brushSchema); // user => users

  module.exports=brush;


 
