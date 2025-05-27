var express=require("express");
var server=express();

var bodyParser = require('body-parser');
server.use(express.static(__dirname+"/public"));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get ("/score",function(req,res){
    console.log(req.query);
    res.send("req /md");
});

server.post ("/postscore",(req,res)=>{
    console.log(req.body);
    
});
server.listen(80);