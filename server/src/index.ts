import * as expressListEndpoints from "express-list-endpoints";
//import * as Express from 'express';
import goods from './route/goods';
import test from './route/test';
import login from './route/login';

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
