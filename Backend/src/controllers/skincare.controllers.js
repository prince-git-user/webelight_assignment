const express = require("express");
const app=express();

const Skincare=require("../models/skincare.models")


// USERS CRUD
app.get("", async (req, res) => {
    try {
      const skincare = await Skincare.find().lean().exec();
  
      return res.status(200).send({ skincare: skincare }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });
  
  app.post("", async (req, res) => {
    try {
      const skincare = await skincare.create(req.body);
  
      return res.status(201).send(skincare);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  // body => req.body
  // url => req.params
  // query string => req.query
  
  app.get("/:id", async (req, res) => {
    try {
      const skincare = await skincare.findById(req.params.id).lean().exec();
      // db.users.findOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(skincare);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.patch("/:id", async (req, res) => {
    try {
      const skincare = await skincare.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(skincare);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.delete("/:id", async (req, res) => {
    try {
      const skincare = await skincare.findByIdAndDelete(req.params.id).lean().exec();
      // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(skincare);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports=app;