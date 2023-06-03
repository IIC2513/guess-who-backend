const Router = require('koa-router');

const router = new Router();

router.get("board.getBoardCharacters","/boardData",async(ctx)=>{
    try{
        // Para esta cápsula, simplemente elegiremos el unico tablero que hay,
        // ya que es el que creamos con seeds.
        // En la realidad, se debería identificar el tablero por el id del
        // Jugador y del juego.
        const boards = await ctx.orm.Board.findAll({
            attributes: ['id'],
            include: [
                { model: ctx.orm.Character, attributes: ['id', 'name', 'oculto', 'image'] },
                { model: ctx.orm.Player, attributes: ['name'] },
            ],
        });
        ctx.body = boards;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

module.exports = router;
