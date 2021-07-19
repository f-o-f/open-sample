var express    = require('express');
var app        = express();
var path       = require('path');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ExpressAPI');
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//var port = process.env.PORT || 3000; // port番号を指定
var port = 3000; 

var router = require('./models/route/index.ts');
app.use('', router);

app.use(express.static(path.join(__dirname, '../front/')));
  
//サーバ起動
app.listen(port);
console.log('listen on port ' + port);


/*
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