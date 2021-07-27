import * as expressListEndpoints from "express-list-endpoints";
import * as Express from 'express';
import * as BodyParser from 'body-parser';
import goods from './models/route/goods';
import test from './models/route/test';

const app = Express();

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

var port = 3000; 

app.use('/goods', goods);

app.use('/test', test);

app.use(Express.static('./front'));
  
//サーバ起動
app.listen(3000, () => {
  console.log('Listen started at port 3000.');
  console.log(expressListEndpoints(app));
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found API.' });
});

export default app;
