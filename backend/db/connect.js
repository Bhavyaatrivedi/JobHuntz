const mongoose = require("mongoose");

//mongo db connections
const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log("Connected to DB");
    });
};

module.exports = connectDatabase;
