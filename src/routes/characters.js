import Router from "koa-router";

const router = new Router();

const characters = [
    {
        name: "Homer Simpson",
        description: "Homer Jay Simpson is a fictional character and the main protagonist of the American animated sitcom The Simpsons. He is voiced by Dan Castellaneta and first appeared on television, along with the rest of his family, in The Tracey Ullman Show short 'Good Night' on April 19, 1987.",
        image: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
    },
    {
        name: "Marge Simpson",
        description: "Marjorie Jacqueline Simpson is a fictional character in the American animated sitcom The Simpsons and part of the eponymous family. She is voiced by Julie Kavner and first appeared on television in The Tracey Ullman Show short 'Good Night' on April 19, 1987.",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png"
    },
    {
        name: "Bart Simpson",
        description: "Bartholomew JoJo Simpson is a fictional character in the American animated television series The Simpsons and part of the Simpson family. He is voiced by Nancy Cartwright and first appeared on television in The Tracey Ullman Show short 'Good Night' on April 19, 1987.",
        image: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
    }
]

router.get("personajes.show", "/show", async (ctx) => {
    ctx.body = characters;
})

export default router;
