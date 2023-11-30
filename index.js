
//import http from http
// import http from 'http';

// // create a server object using http module
// //req, res are the parameters that give access 
// // to the request and response objects
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Welcome to my server! YAY!\n');
//     res.end(('Hello Friends!\n'));
//     });
//   //the server object listens on port 3000  
// const PORT = 3000;

// //start the server
// //listen for activity on port 3000
// //callback runs when the server starts listening
// server.listen(PORT, () => {
//     console.log('Server running on port ${PORT}')
// })

//express.js demo
//import express module
import express from 'express';

//create an express application
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');  
})
//define a route handler for the /about page
//respond with a srtring "About us"

app.get('/about', (req, res) => {
    res.send('About us');
});

const PORT = 3000;
app.listen(PORT, () => {
   console.log('Server running on port ${PORT}');
});