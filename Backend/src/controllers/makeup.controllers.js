const express = require("express");
const app=express();

const Makeup=require("../models/makeup.models")


// USERS CRUD
app.get("", async (req, res) => {
    try {
      const makeup = await Makeup.find().lean().exec();
  
      return res.status(200).send({ makeup: makeup }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });
  
  module.exports=app;