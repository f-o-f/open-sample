import * as Express from 'express';
import noImpl from '../../nolmpl';

const router = Express.Router();

// ログイン認証画面取得
router.get('/login', noImpl);

// ログイン認証処理
router.post('/login', noImpl);

// ログアウト処理
router.delete('/logout', noImpl);

// article 自体の READ, UPDATE, DELETE は /user/:user/article で行うようにする。

export default router;