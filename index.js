var koa = require("koa");
var route = require("koa-route");
var cors = require('koa-cors');
var app = koa();

app.use(cors());

var fs = require("fs");

//读取文件
var fileList = fs.readdirSync(__dirname + '/mock-data');

//根据文件生成restful api
fileList && fileList.forEach(function(item){
	var file = JSON.parse(fs.readFileSync(__dirname + '/mock-data/' + item));
	file && file.forEach(function(sitem){
		var _method = sitem.method,
				_url = sitem.url,
				_response = sitem.response;

		app.use(route[_method.toLowerCase()](_url, function* (){
			this.body = _response;
		}))
	})
})

app.listen(3000, function(){
	console.log("Koa is listening to http://localhost: 3000");
});
