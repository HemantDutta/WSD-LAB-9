const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

//To grab information that is posted, we need to use the following statement
app.use(bodyParser.urlencoded({extended: true}));

//to use res.render, we need to install and import ejs module
app.engine('html', require('ejs').renderFile);

const port = 3000;

app.listen(port, ()=>{
    console.log('Server is listening on port '+port);
});

app.use(express.static(__dirname + "/"));

app.get("/", (req,res)=>{
   res.sendFile(__dirname + "/index.html");
});

app.get("/read", (req,res)=>{
   res.sendFile(__dirname + "/read.html");
});

app.post("/readFile", (req,res)=>{
    //Body parser is needed for using req.body
    let fileName = req.body.fileName;

    //Reading file
    let data = fs.readFileSync(fileName+".json", 'utf-8');
    console.log(data);
    res.render(__dirname + "/fileDisplay.html", {fileData: data, fileName: fileName});
});

