const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://neerajbhardwaj:bhVclqug9hjhfd7r@cluster0.x0abg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
