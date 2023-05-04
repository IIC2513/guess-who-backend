import Router from "koa-router";
import characters from "./routes/characters.js";

const router = new Router();

router.use('/characters', characters.routes());

export default router;
