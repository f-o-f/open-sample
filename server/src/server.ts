import * as Express from 'express';
import * as BodyParser from 'body-parser';

import goods from './router/goods';
//import dev from './router/dev';
const app = Express();
app.listen(3000);
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");     // セキュリティリスク有り
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(Express.static('./front'));
app.use('/goods', goods);


/* app.post('/goods/search', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    return res.send('Hello Nyanko.');
}); */ 
//app.use('/dev', dev);
//app.listen(3000);

app.use((req, res) => {
    res.status(404).json({ message: 'Not Found API.' });
});
export default app;