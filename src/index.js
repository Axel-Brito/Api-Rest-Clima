import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
//Rutas
import authRoutes from "./routes/auth";
import usuarioRoutes from "./routes/usuario";

//Scrapping
import scrapping from "./controllers/scrapping";

//variables .env
dotenv.config();

//const express = require('express');
const app = express();




//middlewares
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//api headers
app.use(cors());

//rutas api
app.use("/grupo-g/auth", authRoutes);
app.use("/grupo-g/usuario", usuarioRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    try {
        console.log(`PORT ${PORT}`);
    } catch (err){
        console.log(err);
    }
})

