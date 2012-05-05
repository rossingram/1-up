var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.render("index.ejs", {layout:false});
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});