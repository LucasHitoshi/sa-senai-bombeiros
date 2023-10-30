import { FastifyInstance } from 'fastify'
import { registerPreHospitalarMethods } from '../../../schemas/preHospitalarMethodSchema'
import { prisma } from '../../../lib/prisma'

export async function registerPreHospitalarMethodsRoutes(app: FastifyInstance) {
  app.post('/api/preHospitalarMethods', async (req, res) => {
    const { preHospitalarMethodDescription = [''], ReportOwnerId } =
      registerPreHospitalarMethods.parse(req.body)

    const newPreHospitalarMethod = await prisma.preHospitalMethod.create({
      data: {
        preHospitalarMethodDescription: preHospitalarMethodDescription || [''],
        ReportOwnerId,
      },
    })

    return res.send({
      msg: '🟢 Método pré-hospitalar criado com sucesso.',
      preHospitalarMethod: newPreHospitalarMethod,
    })
  })
}
