import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";


const express = require('express');
const app = express();
const cheerio = require('cheerio');
const request = require('request-promise');


//Rutas
import authRoutes from "./routes/auth";
import usuarioRoutes from "./routes/usuario";

//web scrapping



//automatizacion web scrapping




//variables .env
dotenv.config();

//middlewares
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//api headers
app.use(cors());


//routes
app.use(require('./routes/index'));

//rutas api
app.use("/grupo-x/auth", authRoutes);
app.use("grupo-x/usuario", usuarioRoutes);

// web scraping
async function Scrapping(){
    const $ = await request({
        uri: 'https://climatologia.meteochile.gob.cl/application/diario/boletinClimatologicoDiario/actual',
        transform: body => cheerio.load(body)
    });
    
    const prueba = $(".table.table-bordered").find('tr').map((i,ele) =>({
        estacion: $(ele).find('td:nth-of-type(1)').text().trim(),
        valorTmin: $(ele).find('td:nth-of-type(2)').text().trim(),
        horaTmin: $(ele).find('td:nth-of-type(3)').text().trim(),
        valorTmax: $(ele).find(`td:nth-of-type(4)`).text().trim(),
        horaTmax: $(ele).find(`td:nth-of-type(5)`).text().trim(),
        'diacompleto': $(ele).find(`td:nth-of-type(6)`).text().trim(),
        alafecha: $(ele).find(`td:nth-of-type(7)`).text().trim(),
        añopasado: $(ele).find(`td:nth-of-type(8)`).text().trim(),
        normalfecha: $(ele).find(`td:nth-of-type(9)`).text().trim(),
        defsup: $(ele).find(`td:nth-of-type(10)`).text().trim(),
        normalanual: $(ele).find(`td:nth-of-type(11)`).text().trim(),
    })).get();
    console.log(prueba)
    return(prueba);
    
    /*const websiteTitle = $('title');
    console.log(websiteTitle.html());

    const websiteHeading = $('h1');
    console.log(websiteHeading.text().trim());

    const quote = $('.quote').find('a');
    console.log(quote.html());

    const third_quote = $('.quote').next().next();
    console.log(third_quote.html());

    const containerClass = $('.row .col-md-8').children();
    console.log(containerClass.html());

    const quote_text = $('.quote span.text').each((i, el) => {
        //console.log(i, $(el).text());
        const quotes_text = $(el).text();
        const quote = quotes_text.replace('“','').replace('”','');
        console.log(i, quote);

        
    $('.quote').each((i, el) =>{
        const text = $(el).find('span.text').text().replace('“','').replace('”','');
        const author = $(el).find('span small.author').text();
        const tags = [];
        $(el).find('.tags a.tag').each((i, el) => tags.push($(el).text()));
        console.log(tags.join(','));
    })}*/


}Scrapping();

const PORT = process.env.PORT || 29102;

app.listen(PORT,() => {
    try {
        console.log(`PORT ${PORT}`);
    } catch (err){
        console.log(err);
    }
})

