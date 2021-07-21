import expressListEndpoints from "express-list-endpoints";

var express    = require('express');
var app        = express();
var path       = require('path');
var bodyParser = require('body-parser');
//var expressListEndpoints = require('express-list-endpoints');
/*
var mongoose   = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ExpressAPI');
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});
*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//var port = process.env.PORT || 3000; // port番号を指定
var port = 3000; 

var goods_router = require('./models/route/goods.ts');
app.use('/goods', goods_router);


var test = require('./models/route/index.ts');
app.use('/test', test);

//app.use(express.static(path.join(__dirname, '../front/')));
app.use(express.static('./front'));
  
//サーバ起動
app.listen(3000, () => {
  console.log('Listen started at port 3000.');
  console.log(expressListEndpoints(app));
});

/*

let goodsList = [
  {name:"OOTP",goods_id:"1",size:100,amount:20,note:"baseball simulation game"},
  {name:"OOTP2",goods_id:"2",size:100,amount:20,note:"baseball simulation game"},
  {name:"OOTP3",goods_id:"1",size:100,amount:20,note:"baseball simulation game"},
];

router.post('/',function(req,res){
    goodsList.push(req.body);
    res.end();
});

router.get('/:id', function(req, res) {
    for (let i = 0; i < goodsList.length; i++) {
      if (goodsList[i].goods_id == req.params.id) {
        res.send(JSON.stringify(goodsList[i]));
      }
    }
});

router.put('/:id', function(req, res) {
    for (let i = 0; i < goodsList.length; i++) {
      if (goodsList[i].goods_id == req.params.id) {
        goodsList[i] = req.body;
      }
    }
    res.end();
});

router.post('/search', function(req, res) {
    res.send(JSON.stringify(goodsList));
});
*/
