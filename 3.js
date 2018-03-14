import express from 'express';
import http from 'http';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';

const app = express();

app.set('views', path.resolve(__dirname,'views'));
app.set('view engine','ejs');

let entries =[];
app.locals.entries = entries;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/new-entry', (req,res)=>{
    res.render('new-entry');
});

app.post('/new-entry',(req,res)=>{
    if(!req.body.title || !req.body.body){
        res.status(400).send('entries must have title and body');
        return;
    }
    entries.push({
        title:req.body.title,
        content:req.body.body,
        published:new Date()
    });
    res.redirect('/');
});

app.use((req,res)=>{
    res.status(404).render('404');
});

http.createServer(app).listen(3000,()=>{
    console.log('server started on port 3000');
});
