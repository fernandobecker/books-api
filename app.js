const express = require('express')

const app = express();
const port = 3000;

app.use(express.json);

const books = [
    {title: "Java", id: "1"},
    {title: "Ruby", id: "2"},
    {title: "C++", id: "3"}
];

app.get("/", (req, resp) => {
    resp.send("Welcome to Books API");
});

app.get("/api/books", (req, resp) => {
    resp.send(books);
});

app.listen(port, function(){
    console.log("info",'Server is running at port : ' + port);
});