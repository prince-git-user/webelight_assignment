const mongoose = require("mongoose");

// makeup SCHEMA
// Step 1 :- creating the schema
const makeupSchema = new mongoose.Schema(
    {
        imgSrc : { type: String, required:true } ,
        Name : {type: String, required:true },
        ratingNum: { type: Number, required: true } ,
        price: { type: Number, required: true },
        amount: { type: Number, required: true }
     
    },
    {
      versionKey: false,
      timestamps: true, // createdAt, updatedAt
    }
  );
  
  // Step 2 : creating the model
  const makeup = mongoose.model("makeup",makeupSchema); // user => users

  module.exports=makeup;
