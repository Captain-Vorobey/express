const express = require("express");

const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

const host = `127.0.0.1`;
const port = 3000;

app.get("/", function(request, response){
     
    response.send("<h1>Главная страница</h1>");
});
app.get("/about", function(request, response){
     
    response.send("<h1>О сайте</h1>");
});
app.get("/contact", function(request, response){
     
    response.send("<h1>Контакты</h1>");
});

app.get('/dima', urlencodedParser, function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.post('/dima', urlencodedParser, function(request, response) {
  if (!request.body) return response.sendStatus(400);
  console.log(request.body)
  response.send(`${request.body.userName} - ${request.body.userAge}`)
});

app.listen(port, host, () => {
    console.log(`Server ${host} on port ${port}`);
});