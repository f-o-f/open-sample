import * as Express from 'express';
import * as BodyParser from 'body-parser';
import expressListEndpoints from 'express-list-endpoints';
import goods from './src/routes/goods';
import auth from './src/routes/login';
// import user from './src/routes/user';

const app = Express();

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

app.use('/goods', goods);
app.use('/auth', login);

app.listen(3000, () => {
    console.log('Listen started at port 3000.');
    console.log(expressListEndpoints(app));
});

// const mongoose = require('mongoose');
// const Goods = require('./src/model/goods');

// // DB接続
// mongoose.connect('mongodb://localhost:27017/opendb');

// // 商品情報登録
// app.post('/goods', (req, res) => {
//   const goods = new Goods(req.body);
//   goods.save((err, addedGoods) => {
//     if (err)
//       return res.status(400).json({
//         errorMessage: 'failed to add the goods.'
//       });
//     res.send(addedGoods);
//   });
// });

// // 商品情報取得（全件）
// app.get('/goods/search', (req, res) => {
//   Goods.find({}, (err, goods) => {
//     res.send(goods);
//   });
// });

// // ユーザ情報取得（ID指定）
// app.get('/goods/:id', (req, res) => {
//   const params = req.params.id;
//   Goods.find({id: params}, (err, goods) => {
//     res.send(goods);
//   });
// });

// // // ユーザ情報削除（全件）
// // app.delete('/users', (req, res) => {
// //   User.remove({}, err => {
// //     res.send(true);
// //   });
// // });

// // // ユーザ情報削除（ID指定）
// // app.delete('/users/:id', (req, res) => {
// //   const params = req.params.id;
// //   User.remove({id: params}, (err, deletedUser) => {
// //     res.send(deletedUser);
// //   });
// // });

// // ポート3001番でlisten
// app.listen(3000, () => {
//   console.log(`Server up on 3000`);
// });

export default app;