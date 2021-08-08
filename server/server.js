const express = require('express');
const app = express();

const cors = require("cors");

app.use(cors());

const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");

MongoClient.connect("mongodb://localhost:27017")
    .then((client) => {
        const db = client.db("project");
        const placeholdernameCollection = db.collection("placeholdername");
        const placeholdernameRouter = createRouter(placeholdernameCollection);
        app.use("/api/placeholdername", placeholdernameRouter);
    })
    .catch(console.err);

app.listen(5000, function(){
    console.log(`Server is active on port ${ this.address().port }`);
});