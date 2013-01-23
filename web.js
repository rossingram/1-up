var express = require('express');

var app = express();

app.get('/', function(request, response) {
  response.render("index.ejs", {layout:false});
});
app.use('/static', express.static(__dirname + '/static')); 
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
