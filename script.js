require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/my-mern", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// const connection = mongoose.connection;

// connection.on("connected", () => {
//   console.log("Mongoose successfully connected.");
// });

// connection.on("error", (err) => {
//   console.log("Mongoose connection error: ", err);
// });

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});


// getTime() returned the number of miliseconds since the Unix Epoch (Jan 1, 1970 00:00:00 GMT)
const premiereDate = new Date("June 22, 21 22:00:00 EST").getTime()

console.log(premiereDate)

let countdown = function(){
    // rightNow will be the current date and time
    let rightNow = new Date
    // inBetween is the amount of time between the premiere and the current time
    let inBetween = premiereDate - rightNow;

    // variables of the out of miliseconds, seconds, etc. in the sec, min, hour, and day
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const days = hour * 24

    // math.floor rounds down to the nearest integer
    // we then do math
    const secs = Math.floor((inBetween % minute) / second)
    const mins = Math.floor((inBetween % hour) / minute)
    const hrs = Math.floor((inBetween % days) / hour)
    const dys = Math.floor(inBetween / days)

    // console.log(dys, hrs, mins, secs)

    // grab the ID from the html and input the countdown through the text
    document.getElementById("day").innerText = dys
    document.getElementById("hr").innerText = hrs
    document.getElementById("min").innerText = mins
    document.getElementById("sec").innerText = secs
}
setInterval(function(){
    countdown();
},1000)