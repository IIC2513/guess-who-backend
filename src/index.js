import Koa from "koa";
import KoaLogger from "koa-logger";
import { koaBody } from "koa-body";
import router from "./routes.js";


// Crear instancia de Koa
const app = new Koa();

// Middlewares proporcionados por Koa
app.use(KoaLogger());
app.use(koaBody());

// koa router
app.use(router.routes());

// Middleware personalizado. Encargado de dar respuesta "Hola Mundo!"
app.use((ctx, next) => {
  ctx.body = "Hola Mundo! Saludos desde IIC2513";
});

// Hacer que el servidor escuche en el puerto 3000
app.listen(3000, () => {
  console.log("Iniciando app. Escuchando en el puerto 3000")
});
