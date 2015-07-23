var express = require('express');
var router = express.Router();

//-----------------------------------------------------------------------

/* GET users listing. */
router.get("/", function(request, response) {
  //res.send("respond with a resource");

  var brand = request.query.brand;
  var model = request.query.model;
  var version = request.query.version;

  //response.send("form service.");  เปลี่ยนเป็น
  //response.sendfile("./public/html/form.html");

  //เช็ค undefine
  if(brand==undefined){
    response.sendfile("./public/html/form.html");
  }else {
    //var data = "Brand : "+brand+"<br />Model :"+model+"<br />Version :"+version;
    var data = setData(brand, model, version);
    response.send(data);
  }
});

//-----------------------------------------------------------------------
router.get("/:brand/:model/:version?",function(request, response){
  var brand = request.params.brand;
  var model = request.params.model;
  var version = request.params.version;
  var data = setData(brand, model, version);
  response.send(data);
});

router.get("/*",function(request, response){
  response.send("parameter เกิน");
});

function setData(brand, model, version){
  return "Brand : "+brand+"<br />Model :"+model+"<br />Version :"+version;
}
//-----------------------------------------------------------------------
module.exports = router;
