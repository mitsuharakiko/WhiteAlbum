var express = require('express');
var path = require('path');
var app = express();

// 使用handlebars
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 8888);

// 加载静态资源
app.use(express.static(path.resolve(__dirname , './public')));

app.get('/', function(req, res){
	res.render('home');
});

app.get('/about', function (req, res) {
	res.render('about');
});

// 404 
app.use(function (req, res, next) {
	res.status(404);
	res.render('404');
});

// 500
app.use(function (err, req, res, next) {
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function () {
	console.log('Express started on http://localhost:' + app.get('port') + ';\n Press Control + C to termine.');
});
