import * as Express from 'express';
import * as BodyParser from 'body-parser';
import goods from './router/goods';
import user from './router/user';
import {OAuthServer} from 'express-oauth-server'

const cors = require('cors');
const app = Express();
/* const oauth = new OAuthServer({
  model: require(__dirname + '/../services/oauth'),
});
app.use(oauth); */
app.listen(3000);
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");     // セキュリティリスク有り
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(Express.static('./front'));
app.use(cors());
app.use('/goods', goods);
app.use('/user', user);
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found API.' });
});
export default app;