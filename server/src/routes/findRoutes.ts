import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function findRoutes(app: FastifyInstance) {
  // Rota para pegar todos os usuários
  app.get('/api/users', async (req, res) => {
    const allUsers = await prisma.user.findMany()
    return res.send({
      msg: `🟢 Usuários localizado com sucesso.`,
      allUsers,
    })
  })
}

export async function findOneRoutes(app: FastifyInstance) {
  // Rota para pegar um usuário específico pelo ID
  app.get('/api/users/:id', async (req, res) => {
    const { id } = req.params as { id: string }

    // Busca o usuário pelo id
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    })

    // Se não existir usuário retorna um erro
    if (!user) {
      return res.status(404).send({ message: `User with ID ${id} not found.` })
    }

    return res.send({ msg: `🟢 Usuário ${id} localizado com sucesso.`, user })
  })
}