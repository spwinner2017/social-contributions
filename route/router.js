var express = require("express");
var router=express.Router();
 
 router.get('/listUsers',function(req,res){
    console.log(__dirname);
fs.readFile(__dirname+'/jsonfiles/'+'user.json','utf8',function(err,data){
    console.log(data);
    console.log('this is test data');
    res.end(data);
})
}); 
router.get('/testuser',function(req,res){
 res.end('this is test user');
});

module.export=router;


