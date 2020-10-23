const express = require('express');
const app = express();
const db = require('./db');
const cors = require("cors");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
// import route
const bizRoute = require("./routes/bizRoute");

// router middleware
app.use("/",bizRoute);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log('server is listening on port 8000'))