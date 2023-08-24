import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function criarSintomas(app: FastifyInstance) {
  app.post('/criar-sintomas', async (req, res) => {
    const sintomaSchema = z.object({
      description: z.string(),
    })

    const { description } = sintomaSchema.parse(req.body)

    const existingSintoma = await prisma.preHospitalMethod.findFirst({
      where: {
        description,
      },
    })

    if (existingSintoma) {
      return res.send({
        msg: '🔴 Sintoma com a mesma descrição já existe.',
      })
    }

    const newSintoma = await prisma.preHospitalMethod.create({
      data: {
        description,
        ReportOwnerId: 1,
      },
    })
    return res.send({
      msg: '🟢 Sintoma aplicado com sucesso.',
      symptons: newSintoma,
    })
  })
}
