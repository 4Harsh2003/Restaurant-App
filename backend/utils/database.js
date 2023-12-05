const mongoose = require("mongoose");
mongoose.set("strictQuery", false);


const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("Database is successfully connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;