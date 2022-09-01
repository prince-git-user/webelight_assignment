const express = require("express");
const cors=require("cors")
const mongoose = require("mongoose");
const port=process.env.PORT || 8000;
const connect=require("./configs/db");

const brush=require("./models/brush.models.js");
const makeup=require("./models/makeup.models.js");
const skincare=require("./models/skincare.models.js");
const Trending=require("./models/Trending.models.js");
const cart=require("./models/cart.models.js")


const brushcontroller=require("./controllers/brush.controller.js")
const makeupcontroller=require("./controllers/makeup.controllers.js")
const skincarecontroller = require("./controllers/skincare.controllers.js");
const Trendingcontroller = require("./controllers/Trending.controllers.js");
const Cartcontroller = require("./controllers/cart.controllers.js");




const app = express();

app.use(express.json());
app.use(cors());

app.use("/brushes",brushcontroller);
app.use("/makeups",makeupcontroller);
app.use("/skincares", skincarecontroller);
app.use("/trendings", Trendingcontroller);
app.use("/carts", Cartcontroller);



module.exports = app;






app.listen(port,async()=>{
    try{
        await connect();
    }
    catch(err){
        console.log(err)
    }

    console.log(`listening on port ${port}`)
   
})