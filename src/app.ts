import "dotenv/config";
import express, { Application, Request, Response } from "express";
import "reflect-metadata";
import { router } from "./router/router";
import bodyParser from "body-parser";
import "./dbConn";
import cors from "cors";

export const app: Application = express();

const host = '0.0.0.0';
const port = parseInt(<string>process.env.PORT) || 3000;

app.listen(port,()=>{
    console.log("server started")
});


app.get('/', (req: Request, res: Response) => {
    res.send("Server Started");
});

const corsOpts = {
    origin: '*',
  };
  
  app.use(cors(corsOpts));
  

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api", router);
