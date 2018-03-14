import express from 'express';
import http from 'http';

const app = express();

app.use((req,res)=>{
    res.end('Hello World');
});

http.createServer(app);

app.listen(3000,()=>{
    console.log('server started on port 3000');
});