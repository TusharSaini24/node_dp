// console.log("uploading on git hub");

const http = require('http');
const chalk = require('chalk');

const server = http.createServer((req,res )=>{ 
    console.log("server create ");
    res.write('<h1> hello world</h1>');
    console.log(chalk.blue('Hello world!'));
    res.end();
})

server.listen('7000');
