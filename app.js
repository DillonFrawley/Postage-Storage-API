
const express = require('express');
const mongoose = require("mongoose");
let path = require("path");
const cors = require("cors")

const sender = require("./routers/sender");
const parcel = require("./routers/parcel");

let app = express();
const PORT_NUMBER = 8080;
app.use(cors());

app.listen(PORT_NUMBER, () => {
  console.log(`Listening on port ${PORT_NUMBER}`);
});

app.use(express.json())

let url = "mongodb://localhost:27017/labweek7app";

let print = console.log;

mongoose.connect(url, function (err) {
  if (err) print("unable to connect to Mongoose");
  else print("connect to DB successfully");
});

app.get('/sender/:name', sender.getAllByName);
app.get('/sender/', sender.getAllSenders);
app.post('/sender', sender.createSender);
app.delete('/sender', sender.deleteSender);
app.put('/sender', sender.updateSender);
app.put('/sender/parcel', sender.addParcel);


app.get('/parcel/address', parcel.getAllByAddress);
app.get('/parcel', parcel.getAllParcels);
app.put('/parcel', parcel.updateAddress);