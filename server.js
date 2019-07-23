const app = require("express")();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.get("/", function(req, res) {
  res.send("Hello World");
});

app.post("/gg", function(req, res) {
  console.log(req.body);
  res.send("Hello World");
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
