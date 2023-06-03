const Router = require('koa-router');
const characters = require('./routes/characters.js');
const users = require('./routes/users.js');
const boards = require('./routes/boards.js');


const router = new Router();

router.use('/characters', characters.routes());
router.use('/users', users.routes());
router.use('/boards', boards.routes());

module.exports = router;
 