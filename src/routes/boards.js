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

router.put("board.toggleCharacter", "/toggle/:board_id/:character_id", async(ctx) => {
    try{
        // De la request viene el id del personaje, el id del tablero. 
        // Con esto podemos modificar la base de datos para cambiar el status 
        // "oculto" del personaje seleccionado.
        const character = await ctx.orm.Character.findOne({where:{id:ctx.params.character_id}});
        const result = await character.update(
            { oculto: !character.oculto },
        )
        ctx.body = result;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

module.exports = router;
