import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";


//const express = require('express');
const app = express();

//Rutas
import authRoutes from "./routes/auth";
import usuarioRoutes from "./routes/usuario";

//Scrapping
import scrapping from "./controllers/scrapping";


//variables .env
dotenv.config();

//middlewares
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//api headers
app.use(cors());


//routes
//app.use(require('./routes/index'));

//rutas api
app.use("/grupo-x/auth", authRoutes);
app.use("grupo-x/usuario", usuarioRoutes);


const PORT = process.env.PORT || 29102;

app.listen(PORT,() => {
    try {
        console.log(`PORT ${PORT}`);
    } catch (err){
        console.log(err);
    }
})

