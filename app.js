var sys = require('util');
var url = require('url');
var qs  = require("querystring");
var HashMap = require('hashmap');
var http = require('http');
var querystring = require('querystring');
var express = require('express');
var bodyParser = require('body-parser');

var map    = new HashMap();
var app    = express();
var cache  = 'false';
var best   = 'empty';
var IniDif = 'empty';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/IniDif', function(req, res){
  res.send(IniDif);
});
app.get('/BEST',function(req,res,next){
  var response = best;
      res.send(response);
  });
app.get('/CACHE',function(req,res,next){
  var response = cache;
      res.send(cache);
  });

app.get('/FA/:id?',function(req,res,next){
  //console.log(req.params.id);
  var response = "null";
      if(req.params.id){
        response=map.get(req.params.id);
      }
      else{
        response = "NO_PARAMS"
      }
      res.send(response);
  });

app.get('/GET_MAP',function(req,res,next){
	var fs = require('fs')
	var logger = fs.createWriteStream('MAP.TXT', {
	  flags: 'a' // 'a' means appending (old data will be preserved)
	});

	map.forEach(function(value, key) {
		logger.write(key + " : " + value);
	});
	logger.end() // close string
	res.download('MAP.TXT');
	fs.unlinkSync('MAP.TXT');
  });


app.post('/FA', function(req, res){
  map.set(req.body.NAME+'-'+req.body.IND,req.body.FA);
  //console.log(req.body.NAME+'___'+req.body.IND);
  //console.log(map.get(req.body.NAME+'-'+req.body.IND));
  res.send(req.body);
});
app.post('/BEST', function(req, res){
  best = req.body.BEST;
  res.send(req.body);
});
app.post('/CACHE', function(req, res){
  cache = req.body.CACHE;
  res.send(req.body);
});
app.post('/EXIT', function(req, res){
  process.exit();
});
app.get('/EXIT',function(req,res,next){
map    = new HashMap();
  var response = cache;
      res.send(cache);
  });
app.post('/IniDif', function(req, res){
  IniDif = req.body.IniDif;
  res.send(req.body);
});


app.listen(3000);
