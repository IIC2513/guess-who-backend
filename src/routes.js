const Router = require('koa-router');
const characters = require('./routes/characters.js');

const router = new Router();

router.use('/characters', characters.routes());

module.exports = router;
