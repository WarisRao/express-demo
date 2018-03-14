//require("babel-core").transform("code",babel-rc);
import express from 'express';
import http from 'http';
import path from 'path';
import logger from 'morgan';

const app = express();
const publicPath =path.join(__dirname,'public');

app.use(logger('short'));

app.use(express.static(publicPath));

app.use((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('unable to found you static file');
});

http.createServer(app).listen(3000,()=>{
    console.log('server started');
});