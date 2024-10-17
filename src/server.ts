import fastify, { FastifyInstance } from "fastify";
import { userRoutes } from "./routes/user.routes";

const app: FastifyInstance = fastify({ logger: true })

app.register(userRoutes, {
    prefix: '/users'
})

app.listen({
    port: 5000,
},
() => console.log ('Servidor rodando na porta 5000.'),
)