var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: false
}))

app.all('/test', function(req, res) {
	console.log(req.body)
	req = JSON.parse(req.body.body)
	console.log(req, "req", req.id)
	if(req.id == 1) {
		res.send({
			code: "000000",
			data: "success:shl"
		})
	} else {
		res.send({
			code: "999999",
			data: "fail"
		})
	}
});
var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});