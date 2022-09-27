# express.js-quotes-api

This project keeps an array of quote objects on the server and allows for a client on a browser to perform several array operations using HTTP requests which includes the following:
1. Retrieve all quotes in the array with a GET request
2. Retrieve all quotes by a given author with a GET request using a query string
3. Add a quote to the server array using a POST request

This project uses Node.js and Express.js in the back-end and JS, HTML, and CSS in the front-end. The front-end files are located in the public folder and the back-end
JavaScript files are data.js, server.js, and utils.js. 

To run this project on your own computer you can fork the project, set up a local development server, run `node server.js` in the terminal, 
and go to http://localhost:4001/ in your browser.
