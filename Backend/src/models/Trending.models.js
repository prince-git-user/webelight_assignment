const mongoose = require("mongoose");

// makeup SCHEMA
// Step 1 :- creating the schema
const TrendingSchema = new mongoose.Schema(
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
  const Trending = mongoose.model("Trending",TrendingSchema); // user => users

  module.exports=Trending;
