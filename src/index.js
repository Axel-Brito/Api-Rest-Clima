const express = require('express');
const app = express();
const cheerio = require('cheerio');
const request = require('request-promise');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./routes/index'));

// web scraping
/*async function init(){
    const $ = await request({
        uri: 'http://quotes.toscrape.com/',
        transform: body => cheerio.load(body)
    });
    
    const websiteTitle = $('title');
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


init();

app.listen(3000);
console.log('Server on port 3000');