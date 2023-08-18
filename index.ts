import express from "express";
import { db } from "./src/infrastructure/db";
import taskRouter from "./src/application/routes/tasksRouter";
import soylaRouter from "./src/application/routes/soylaRouter";
import postRouter from "./src/application/routes/postRouter"
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false })); 

app.use(cors());

db();

app.use("/tasks", taskRouter);
app.use("/soyla", soylaRouter);
app.use("/", postRouter)

export default app;
