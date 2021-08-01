import "dotenv/config";
import express, { Application, Request, Response } from "express";
import "reflect-metadata";
import { router } from "./router/router";
import {urlencoded,json} from "body-parser";
import "./dbConn";
import cors from "cors";
import fileUpload from "express-fileupload";

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
  

app.use(urlencoded({ extended: true }))
app.use(json())
app.use(fileUpload());

app.use("/api", router);
