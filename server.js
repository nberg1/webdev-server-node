import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from './controllers/tuits-controller.js';
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/webdev';
mongoose.connect(CONNECTION_STRING).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
const app = express();
helloController(app);
app.use(cors());
app.use(express.json());
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);