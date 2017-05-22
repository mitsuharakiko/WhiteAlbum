var express = require('express');

var app = express();

app.set('port', process.env.PORT || 8888);

// 404 
app.use(function (req, res) {
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

// 500
app.use(function (req, res) {
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'), function () {
	console.log('Express started on http://localhost:' + app.get('port') + ';\n Press Control + C to termine.');
});
