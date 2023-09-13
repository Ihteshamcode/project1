const http = require('http');
const server = http.createServer((req, res)=>{
    res.end('my name is pamualdeep Kaur Mander and my student number is 160357216');
});
const port = 5000;
server.listen(5000);
console.log('server is working ${5000}')