import fastify, { FastifyInstance } from "fastify";

const app: FastifyInstance = fastify({ logger: true })

app.listen({
    port: 5000,
},
() => console.log ('Servidor rodando na porta 5000.'),
)