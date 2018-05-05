// file name :app.js
// create by guofw 2018-5-4
var express             = require('express');
var app                 = express();
var bodyParse           = require('body-parser')
var path = require('path');
app.use(bodyParse.urlencoded({extended:false})) ;

app.use(express.static(path.join(__dirname, 'public')));

// 处理根目录的get请求
app.get('/',function(req,res){
    res.sendfile('public/main.html') ;
    console.log('main page is required ');
}) ;

// 处理/login的get请求
app.get('/add', function (req,res) {
    res.sendfile('public/add.html') ;
    console.log('add page is required ') ;
}) ;

// 处理/Server的post请求
app.post('/buildserver',function(req,res){
    console.log(req.body);
    servername=req.body.servername ;
    //这里写逻辑处理代码
    console.log(servername) ;
    res.json({"status":"success"});
});

// 监听3000端口
var server=app.listen(3000) ;