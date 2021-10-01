// console.log("uploading on git hub");

const http = require('http');
const chalk = require('chalk');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req,res )=>{ 
    console.log("server create ");
    // res.write('<h1> hello world</h1>');
    // const htmlfile = fs.readFileSync('index.html');
    // res.write(htmlfile.toString());
        fs.readFile('index.html',(err,data)=>{
        res.write(data.toString());
        res.end();
    })
    console.log(chalk.blue('Hello world!'));
})

server.listen(7000);
