import express from 'express';
import http from 'http';

const app = express();

app.get('/random/:min/:max',(req,res)=>{
    
    let max = parseInt(req.params.max);
    let min = parseInt(req.params.min);

    if( isNaN(max) || isNaN(min) ){
        res.status(400);
        res.json({error:'provide number'});
        return;
    }
    let result = Math.round(Math.random()*(max-min)+min);
    res.json({result});

});

http.createServer(app).listen(3000,()=>{
    console.log('server started on port 3000');
});