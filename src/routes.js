const Router = require('koa-router');
const characters = require('./routes/characters.js');
const users = require('./routes/users.js');
const boards = require('./routes/boards.js');
const authRoutes = require('./routes/authentication.js')
const dotenv = require('dotenv');
const jwtMiddleware = require('koa-jwt')
const scopeProtectedRoutes = require('./routes/scopeExample.js')

dotenv.config();

const router = new Router();

router.use('/characters', characters.routes());
router.use('/boards', boards.routes());
router.use(authRoutes.routes());


// Desde esta línea, todas las rutas requieriran un JWT. Esto no aplica para
// las líneas anteriores
router.use(jwtMiddleware( { secret: process.env.JWT_SECRET } ))

router.use('/users', users.routes());

router.use('/scope-example', scopeProtectedRoutes.routes())

module.exports = router;
