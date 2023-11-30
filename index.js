//import http from http
import http from 'http';

// create a server object using http module
//req, res are the parameters that give access to the request and response objects
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Welcome to my server! YAY!\n');
    res.end(('Hello Friends!\n'));
    });
    
const PORT = 3000;

//start the server
server.listen(PORT, () => {
    console.log('Server running on port ${PORT}')
})