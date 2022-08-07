const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

/**
 * Sends back a random quote from the array of quote data
 */
app.get('/api/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    console.log(randomQuote);
    res.send({quote: randomQuote});
});

/**
 * Returns all quotes from the data if the request has no query patterns
 */
app.get('/api/quotes', (req, res, next) => {
    if(req.query.person) {
        let tempQuotes = [];
        for(q of quotes) {
            console.log('Looping through quotes', q.person);
            if(q.person === req.query.person) {
                tempQuotes.push(q);
            }
        }
        console.log(tempQuotes);
        res.send({quotes: tempQuotes});
    } else {
        res.send({
            quotes: quotes
        });
    }
});

/**
 * Creates a new quote from a given query string with parameters quote and person
 */
app.post('/api/quotes', (req, res, next) => {
    if(req.query.quote && req.query.person) {
        const quoteObject = {quote: req.query.quote, person: req.query.person};
        quotes.push(quoteObject);
        res.status(201).send({quote: quoteObject});
    } else {
        res.status(400).send();
    }
})

//Start server on PORT
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});