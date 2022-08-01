import * as Express from 'express';
// import noImpl from '../../nolmpl';

const router = Express.Router();

var strage = {
    id: 0,
    message: 'デフォルトメッセージ'
};

const strages = [strage];

let goodsList = [
    { name: '商品a', goods_id: '0000', size: 1, amount: 1, note: '説明' },
    { name: '商品b', goods_id: '0001', size: 1, amount: 1, note: '説明' }
]


// 商品情報の登録
router.post('/', (req, res) => {
    console.log(req.body);
    goodsList.push(req.body);
    res.end();
});

router.get('/', (req, res) => {
    res.send(JSON.stringify(goodsList));
});

// // 商品情報の取得
router.get('/:id', (req, res) => {
    for (let i = 0; i < goodsList.length; i++) {
        if (goodsList[i].goods_id == req.params.id) {
            res.send(JSON.stringify(goodsList[i]));
        }
    }
});

// // 商品情報の更新
router.put('/:id', (req, res) => {
    console.log(req.params.id);
    for (let i = 0; i < goodsList.length; i++) {
        if (goodsList[i].goods_id == req.params.id) {
            goodsList[i] = req.body;
        }
    }
    res.end();
});

// // 商品情報の検索
router.post('/search', (req, res) => {
    res.send(JSON.stringify(goodsList));
});

export default router;