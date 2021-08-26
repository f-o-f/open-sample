import * as expressListEndpoints from "express-list-endpoints";
import goods from './route/goods';
import test from './route/test';
import login from './route/login';
import mongodbClient from "./common/mongodbClient";
import { userModel } from "./models/userModel";


const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

// クッキー設定
app.use(cookieParser());

// Angular と POST データを受け取るための設定を行う
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// セッション設定
app.use(session({
    secret: 'SessionKey',      // クッキーの暗号化に使用するキー
    resave: false,             // セッションチェックする領域にリクエストするたびにセッションを作り直してしまうので false
    saveUninitialized: false,  // 未認証時のセッションを保存しないようにする
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,  // クッキーの有効期限をミリ秒指定 (1週間)
      secure: false                     // HTTP 利用時は false にする
    }
}));

// Passport の初期設定
app.use(passport.initialize());
app.use(passport.session());

// CORS を許可する
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');  // 開発環境で CORS を許可するために入れておいた
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// 認証ロジック
passport.use('local', new LocalStrategy({
    usernameField: 'id',  // POST の body から参照するフィールド名を指定する
    passwordField: 'password',  // POST の body から参照するフィールド名を指定する
    session: true,              // セッションを有効にする
    passReqToCallback: true     // 次のコールバック関数の第1引数に request を渡す
}, (_req, id, password, done) => {

    mongodbClient((err, client, db) => {
      if (err) {
          client.close();
      }
      console.log(id,password);
      const collection = db.collection<userModel>('users');
      collection.findOne({ id: Number(id) ,password: password}, (err, result) => {
        if (err) {
          client.close();
        }

        client.close();
        console.log(result);

        if (result != null) {
          const userInfo = result;
            // 認証成功・第2引数で渡す内容がシリアライズされる
            console.log('認証処理:成功');
            return done(null, userInfo);
          }
        else{
          console.error('認証処理 : 失敗');
          return done(null, false);
        }
      });
    });
    
}));
  
// シリアライズ処理
passport.serializeUser((userInfo, done) => {
    done(null, userInfo);
});
    
// デシリアライズ処理
passport.deserializeUser((userInfo, done) => {
    done(null, userInfo);
});

var port = 3000; 

app.use('/goods', goods);

app.use('/login', login);

app.use('/test', test);

app.use(express.static('./front'));
  
//サーバ起動
app.listen(3000, () => {
  console.log('Listen started at port 3000.');
  console.log(expressListEndpoints(app));
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found API.' });
});

export default app;
