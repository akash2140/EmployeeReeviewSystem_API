const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/employee-review",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection; 
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATABASE connection is Established");
});

module.exports = db;
