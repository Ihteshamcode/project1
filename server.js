// WEB322 - Assigment 1
// i declare that this assigment is my own work in accordance with seneca Acadmey policy
// No part of the assigment has been copied manually or eloctranically from any other source
// (including websites) or distributed to other students.

// Name:   Pamualdeep Kaur Mander   Student ID:  160357216 Date:  14 sept / 2023

// Online cyclic url : https://tricky-battledress-calf.cyclic.app

const http = require("http");
const server = http.createServer((req, res) => {
  res.end(
    "My name is Pamualdeep Kaur Mander and my student number is 160357216"
  );
});
const port = 5000;
server.listen(5000);
