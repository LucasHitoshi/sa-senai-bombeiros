import jwt from '@fastify/jwt'
import fastify from 'fastify'
import cors from '@fastify/cors'
import { registerRoutes } from './src/routes/registerRoutes'
import { loginRoutes } from './src/routes/loginRoutes'
import { updateRoutes } from './src/routes/updateRoutes'
import { deleteRoutes } from './src/routes/deleteRoutes'
import { findOneRoutes, findRoutes } from './src/routes/findRoutes'
import bcrypt from 'fastify-bcrypt' // Importe o plugin aqui

const app = fastify() // Dar para a const app todas as informações do Fastify

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'bombeiros',
})

app.register(bcrypt)

app.register(registerRoutes)
app.register(loginRoutes)
app.register(updateRoutes)
app.register(deleteRoutes)
app.register(findRoutes)
app.register(findOneRoutes)

app
  .listen({
    port: 3333, // Porta para rodar na Aplicação WEB
    host: '0.0.0.0', // Porta para rodar na Aplicação APPs
  })
  .then(() => {
    console.log('🔥🚒 HTTP server running on port http://localhost:3333') // Ao rodar o server aparecer a seguinte mensagem
  })
