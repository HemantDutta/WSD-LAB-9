const express = require('express');
const fs = require('fs');
const app = express();

const port = 3000;

app.listen(port, ()=>{
    console.log('Server is listening on port '+port);
});

app.use(express.static(__dirname + "/"));

app.get("/", (req,res)=>{
   res.sendFile(__dirname + "/index.html");
});

