// ...

import { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'

export async function refreshRoutes(app: FastifyInstance) {
  app.post('/api/users/refresh-token', async (req, res) => {
    const { refreshToken } = req.body as { refreshToken: string }

    try {
      const decoded = app.jwt.verify(refreshToken) as { userId: string }
      const user = await prisma.user.findUnique({
        where: {
          id: Number(decoded.userId),
        },
      })

      if (!user) {
        return res.status(401).send({ msg: '🔴 Token de atualização inválido' })
      }

      const newAccessToken = app.jwt.sign(
        {
          userId: user.id,
          name: user.name,
          email: user.email,
        },
        {
          expiresIn: '2m',
        },
      )

      return res.send({
        token: newAccessToken,
      })
    } catch (error) {
      console.error('Erro ao renovar o token:', error)
      return res.status(401).send({ msg: '🔴 Token de atualização inválido' })
    }
  })
}
