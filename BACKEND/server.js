const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser");
const cors = require("cors");
const dotenv =require ("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8077;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", require("./routes/authRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));

const URL = process.env.MONGODB_URL;


mongoose.connect(URL, {
    useNewUrlParser: true
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("MongoDB Connection Error:", error));


const connection = mongoose.connection;
connection.once("open",() => {
    console.log("MongoDB connect succesfully!!!!");
})

app.listen(PORT, () =>{
    console.log('Server is up and running on port number: ${PORT}')
})