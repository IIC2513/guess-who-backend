const Router = require('koa-router');

const router = new Router();

router.put("character.toggleCharacter", "/toggle/:character_id", async(ctx) => {
    try{
        // De la request viene el id del personaje. 
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
