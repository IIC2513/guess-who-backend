const Koa = require('koa');
const KoaLogger = require('koa-logger');
const { koaBody } = require('koa-body');
const router = require('./routes.js');
const orm = require('./models');

// Crear instancia de Koa
const app = new Koa();

// Exponer el orm a la app
app.context.orm = orm;

// Middlewares proporcionados por Koa
app.use(KoaLogger());
app.use(koaBody());

// koa router
app.use(router.routes());

// Middleware personalizado. Encargado de dar respuesta "Hola Mundo!"
app.use((ctx, next) => {
  ctx.body = "Hola Mundo! Saludos desde IIC2513";
});

module.exports = app;
