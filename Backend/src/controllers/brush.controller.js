const express = require("express");
const app=express();

const Brush=require("../models/brush.models")


// USERS CRUD
app.get("", async (req, res) => {
    try {
      const brush = await Brush.find().lean().exec();
  
      return res.status(200).send({ brush: brush }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message:err.message });
    }
  });
  
  module.exports=app;