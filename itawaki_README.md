# open-sample

オープン系システム開発の基礎部分に触れるためのサンプル

## Goal

- Web サービス（Web server、Web client）の基礎を理解する
- オープン系言語の基礎を理解する

## Overview

<img src="./img/architecture.jpg" width="80%">

シンプルな商品管理システムを構築する  
大まかな構成は以下の通り

- 必須機能は商品の登録、更新、参照、検索
- 言語は`nodejs`で作成する
- 画面は[SPA](https://digitalidentity.co.jp/blog/creative/about-single-page-application.html)で作成する
- 画面系のフレームワークには[Angular](https://qiita.com/NS19960207/items/961ddfa32bd1faa43b80)を使用する
- Web サーバーのフレームワークには[Express](https://techacademy.jp/magazine/16119#sec1)を使用する
- Database には NoSQL の[MongoDB](https://qiita.com/Brutus/items/8a67a4db0fdc5a33d549)を使用する
- 資産の管理には[git](https://qiita.com/gold-kou/items/7f6a3b46e2781b0dd4a0)を使用する
- 言語にはJavaScriptの進化版である[TypeScript](https://www.sejuku.net/blog/93230)を使用する  



## Preparation

### Install(2h)

以下をインストールする

- [vscode](https://code.visualstudio.com/)
  - コードエディタ、日本語化もできる
- [nvm,node,npm](https://dev.classmethod.jp/articles/how-to-install-node-using-nvm/#toc-linux)
  - node は v10.13.0 をインストールする
- [git](https://git-scm.com/)
  - 分散型バージョン管理システム
- [MongoDB(Windowsの場合)](https://it-blue-collar-dairy.com/mongodb-install/)
- [MongoDB(Macの場合)](https://reffect.co.jp/windows/mac-mongodb-install)
  - ドキュメント型の NoSQL


### Training

nodejs や MongoDB の学習

[node.js 超入門 ①node.js で web サーバを作ってみる](https://qiita.com/ritukiii/items/7f28554369d63eb373c3)  
[node.js 超入門 ②web サーバを作る(ルーティングもやってみる)](https://qiita.com/ritukiii/items/8173ff98f31c2f76b39a)  
[node.js 超入門 ③ 簡単な web アプリケーションを作ってみる](https://qiita.com/ritukiii/items/5deba734249bf3543b85)  
[node.js 超入門 ④mongodb を使ってみる](https://qiita.com/ritukiii/items/e6ac9077533bdcdd1a5a)  
[Node.jsからMongoDBへ接続/操作する方法](https://garafu.blogspot.com/2017/01/intro-nodejs-mongodb.html#insert)

Angularの学習

[Angular入門 - とほほのWWW入門](https://www.tohoho-web.com/ex/angular.html)  
[Angular入門 未経験から1ヶ月でサービス作れるようにする](https://qiita.com/seteen/items/43908e33e08a39612a07)

Server資産,API,Model定義の方法,DB接続の学習

[[Node.js] Express を TypeScript で書く - 環境整備まで](https://qiita.com/kuroneko8960/items/74347b6a58020f33b18d)  
[[Node.js] Express を TypeScript で書く - ルーティング編](https://qiita.com/kuroneko8960/items/1e6dcd0d897b42567319)  
[[Node.js] Express を TypeScript で書く - MongoDB 接続編](https://qiita.com/kuroneko8960/items/fa8665017d98774d3c06)  
[[Node.js] Express を TypeScript で書く - MongoDB CRUD 編](https://qiita.com/kuroneko8960/items/438936767a0fed68afe4) 
[MongoDB+Express+AngularJS+Node.jsでシンプルなCRUDアプリ作成](https://qiita.com/naga3/items/e63144e17cb1ab9e03e9)  
[[Angular] HTTPクライアント(RESTクライアント)を実装する](https://qiita.com/ksh-fthr/items/840ae54472892a87f48d)

**NOTE**

バージョンにより様々な仕様変更があるので、注意すること

**仕様変更例(エラー時等に参照)**


- [Expressでbody-parserがいらない理由](https://qiita.com/hirochan/items/e63d74cb70f0b97889fc)  
- [AngularにおけるstrictPropertyInitializationのベストプラクティス](https://lacolaco.hatenablog.com/entry/2018/06/27/125101)
	- Angularの初期化漏れによるエラーの対策


## Design

設計書として以下を作成する

- 画面一覧
- 画面遷移図
- API 一覧
- Model 定義

今回はサンプルであるため設計書は以下の通りとする

### 画面一覧

| Name          | URI            | Note         |
| ------------- | -------------- | ------------ |
| login         | /login         | 認証画面     |
| menu          | /goods         | トップ画面   |
| goods_create  | /goods/create  | 商品登録画面 |
| goods_update  | /goods/update  | 商品更新画面 |
| goods_details | /goods/details | 商品詳細画面 |
| goods_list    | /goods/list    | 商品一覧画面 |

**NOTE**  
画面の URI は[ルーティング](https://www.slideshare.net/ushiboy/spa-76170499)に使用する

### 画面遷移図

<img src="./img/screen_transition_diagram.jpg" width="80%">

### API 一覧

| URI           | Method | Note         |
| ------------- | ------ | ------------ |
| /login        | GET    | 認証画面取得 |
| /login        | POST   | 認証         |
| /goods        | POST   | 商品情報登録 |
| /goods/:id    | PUT    | 商品情報更新 |
| /goods/:id    | GET    | 商品情報取得 |
| /goods/search | POST   | 商品情報検索 |

**NOTE**  
API については[RESTful API](https://qiita.com/NagaokaKenichi/items/0647c30ef596cedf4bf2)に準拠する
認証については[Oauth2.0](https://murashun.jp/blog/20150920-01.html)に準拠する  
[Oauth2.0の解説動画](https://www.youtube.com/watch?v=e9s12_G4YE4)

### Model 定義

```typescript
type user = {
  name: string;
  id: number;
  password: string;
};

type goods = {
  name: string;
  goods_id: string;
  size: number;
  amount: number;
  note: string;
};
```

## Development

任意のディレクトリにこの repository をフォークして、ローカル branch を作成する。必要に応じてマージする。

```bash
git clone https://github.com/f-o-f/open-sample.git
cd open-sample
git checkout -b sample
```

**NOTE**  
[gitでのフォークやコミット、マージの方法](https://qiita.com/sky0621/items/8b6e88f4327b42ade5d7)  
ファイル変更時にコマンドを`git add .`とすることで、変更のあったファイルをすべてコミット対象にすることができる

尚、開発はフェーズを分けて実施すること

- フェーズ１
  - 画面から商品の登録と商品の参照を商品番号(goods_id)のアドレス直打ちで実施できる
- フェーズ２
  - 画面から商品の検索が行え、商品の一覧から商品の参照が実施できる
- フェーズ３
  - 商品情報の更新が実施できる
- フェーズ４
  - Web サーバーの利用にアクセストークンの認証を追加する
  - トークン認証用の[ミドルウェア](https://expressjs.com/ja/guide/using-middleware.html)を作成すること
  - 参考：[【Node.js】express で OAuth2 プロバイダーを作ろう](https://qiita.com/seapolis/items/5f866e58784baf54f54c)

**NOTE** nodejs はノンブロッキング I/O と呼ばれる特性があるため注意すること

- [ノンブロッキング I/O](https://techacademy.jp/magazine/16410)とは

開発手順は後述の通り

### Client(画面資産)

#### Client init

`client`フォルダには画面資産のプロジェクトを作成する  
プロジェクト作成のコマンドは以下で実施すること

```bash
ng new client
```

#### Client edit

公式サイトを参考に画面一覧、画面遷移図から画面資産を作成する  
画面レイアウトのフレームワークとして[Flex-Layout と Angular Material](https://dev.classmethod.jp/server-side/serverless/flex-layout-angular-material-goodbye-css/)を使用すること

**NOTE** http リクエストについては[公式 HP](https://angular.jp/guide/http)がわかりやすいため参考とすること

```typescript
// ディレクトリ構造サンプル（詳細はAngularのドキュメント参照）
└─client
   ├─e2e // テストコード
   └─src
       ├─app // Component や Service
       ├─assets // 画像やアイコン
       └─environments // 環境変数
```

#### Client build

server に画面資材を配置する際は`ng build`で資材をバンドルする  
バンドル先を`server`フォルダ内に変更しておくことで、資材を移動する手間を省くことができる

**Example** バンドル先の指定：`angular.json`の`outputPath`を`../server/front`に変更する

参考

[Node.js+ExpressでAngular用のコンテンツをサーブする](https://www.miraclelinux.com/tech-blog/skinen)


### Server

#### Server init

`server`フォルダには Web サーバーのプロジェクトを作成する  

静的ファイル（画面資産等）の提供については以下を参考に実施する

[Express での静的ファイルの提供](https://expressjs.com/ja/starter/static-files.html)

#### Server edit

API 一覧、Model 定義から Web サーバーを作成する

**NOTE** MongoDB の Nodejs パッケージのバージョンによっては仕様が異なるため、以下を参考にすること

[Node.js の MongoClient の仕様が変わってた](https://qiita.com/mimizq/items/76d3a948acb33881c8db)

```typescript
// ディレクトリ構造サンプル
└─server
    ├─dist // server 資産のビルド先
    ├─front // client 資産のビルド先
    └─src
       │ index.ts // main
       │
       ├─middleware // express のミドルウェアを格納
       └─router // express のルーターを格納
```
#### Server bundle

サーバのバンドルには[webpack](https://knowledge.sakura.ad.jp/21623/)を使用する  
**Example**  バンドルした後に、package.jsonの

```typescript
// package.json
(略)
"scripts": {
    "start": "node dist/server.js"
  },
(略)
```
の`"start":`以下の部分にバンドルしたファイルのパスを置き、コマンドで`$npm start`と入力することでファイルを実行することができる  