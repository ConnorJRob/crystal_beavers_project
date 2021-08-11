const express = require('express');
const app = express();

const cors = require("cors");

app.use(cors());

const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");

MongoClient.connect("mongodb://localhost:27017")
    .then((client) => {
        const db = client.db("project");
        const lessonCollection = db.collection("lessons");
        const lessonRouter = createRouter(lessonCollection);
        app.use("/api/lessons", lessonRouter);

        // // code for if we were also setting up a users collection
        // const userCollection = db.collection("users");
        // const userRouter = createRouter(userCollection);
        // app.use("/api/users", userRouter);
    })
    .catch(console.err); // if for any reason the api cannot be connected to, the console will display the error details (hence why it's a catch)

app.listen(5000, function(){
    console.log(`Server is active on port ${ this.address().port }`);
});