var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("WorkFlowManagement");
  dbo.createCollection("Users", function(err, res) {
    if (err) throw err;
    console.log("Collection Users created!");
    db.close();
  });
  dbo.createCollection("Roles", function(err, res) {
    if (err) throw err;
    console.log("Collection Role created!");
    db.close();
  });
  dbo.createCollection("Rules", function(err, res) {
    if (err) throw err;
    console.log("Collection Rules created!");
    db.close();
  });
});