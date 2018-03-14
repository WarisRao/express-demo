import http from 'http';

function requestHandler(req,res){
    if(req.url==='/'){
        res.end('Home Page');
    }
    else if(req.url==='/about'){
        res.end('About Page');
    }
    else{
        res.end('Not Found');
    }
}

const server = http.createServer(requestHandler);

server.listen(3000,()=>{
    console.log('server started on port 3000');
});