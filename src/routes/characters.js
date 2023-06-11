const Router = require('koa-router');

const router = new Router();

router.post("character.toggleCharacter", "/toggle", async(ctx) => {
    try{
        // En el body de la request viene el id del personaje
        // Con esto podemos modificar la base de datos para cambiar el status 
        // "oculto" del personaje seleccionado.
        const { characterId } = ctx.request.body; // Extraigo los datos del body de la request
        console.log(characterId);
        const character = await ctx.orm.Character.findOne({where:{id: characterId}});
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
