var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit:'1gb',extended:false}));
var parent = {id:'',pw:''};
app.post('/login',(req,res)=>{
  if(parent.id===req.body.id&&parent.pw===req.body.pw){
    console.log(parent.id+"! Long time no see");
    res.send(parent.id+"반가워요!");
  }
});
app.post('/regi',(req,res)=>{
  parent.id=req.body.id;
  parent  .pw=req.body.pw;
  console.log(parent.id+":신규 유저");
  console.log(parent.pw+":비이이번");
});
app.listen(3000,function(){
  console.log("server porting on 3000");
});
module.exports=router;
