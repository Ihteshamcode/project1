const http = require('http');
const server = http.createServer((req, res)=>{
    res.end('My name is Pamualdeep Kaur Mander and my student number is 160357216');
});
const port = 5000;
server.listen(5000);