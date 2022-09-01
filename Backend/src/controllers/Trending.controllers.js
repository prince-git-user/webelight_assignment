const express = require("express");
const app=express();

const Trending=require("../models/Trending.models")


// USERS CRUD
app.get("", async (req, res) => {
    try {
      const trending = await Trending.find().lean().exec();
  
      return res.status(200).send({ trending: trending }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });
  
  app.post("", async (req, res) => {
    try {
      const trending = await trending.create(req.body);
  
      return res.status(201).send(trending);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  // body => req.body
  // url => req.params
  // query string => req.query
  
  app.get("/:id", async (req, res) => {
    try {
      const trending = await trending.findById(req.params.id).lean().exec();
      // db.users.findOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(trending);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.patch("/:id", async (req, res) => {
    try {
      const trending = await trending.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(trending);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  app.delete("/:id", async (req, res) => {
    try {
      const trending = await trending.findByIdAndDelete(req.params.id).lean().exec();
      // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(trending);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports=app;