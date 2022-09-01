const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
       "mongodb+srv://Rohantiwari123:rohantiwari123@cluster0.ngszg.mongodb.net/sugarcosmetics"
    );
  };

  module.exports=connect;