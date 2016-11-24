const PORT = 3009;

const express = require('express');
const app = express();


app.get("/", function(req,res){
res.send('hello Word')
  console.log('HELLO WORD')
});



app.listen(PORT, function(){

});
