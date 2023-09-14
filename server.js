const http = require('http');
const server = http.createServer((req, res)=>{
    res.end('<h1>My name is Pamualdeep Kaur Mander and my student number is 160357216<h1/>');
});
const port = 5000;
server.listen(5000);
console.log('server is working ${`port`}')