var express = require('express');
var app = express();
app.listen(8000);
app.use('/static', express.static('public'));

app.get('/', function(req, res){
	res.sendfile('public/index.html');
});
