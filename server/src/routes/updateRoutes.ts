import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { updateSchema } from '../schemas/userSchemas'

export async function updateRoutes(app: FastifyInstance) {
  app.put('/api/users/update/:id', async (req, res) => {
    const { id } = req.params as { id: string } // Buscar o id do usuário

    // Faz uma requisição do body para pegar o email senha e nome
    const { email, password, name } = updateSchema.parse(req.body)

    // Validação dos dados recebidos
    if (!email && !password && !name) {
      return res
        .status(400)
        .send({ message: '🔴 Nenhuma informação foi fornecida' })
    }

    // Buscar usuário pelo ID se não existir retorna um erro
    const existingUser = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    })

    if (!existingUser) {
      return res.status(404).send({
        message: `🔴 Não foi possível realizar a pesquisa pelo ${id}. Usuário não encontrado.`,
      })
    }

    // Informações para serem atualizadas
    const updatedUserData: {
      email?: string
      password?: string
      name?: string
    } = {}

    // Se tiver um email, atualizar o email
    if (email) {
      updatedUserData.email = email
    }

    // Se tiver uma senha, atualizar a senha
    if (password) {
      // Criptografar a nova senha antes de atualizar
      const hashedPassword = await app.bcrypt.hash(password)
      updatedUserData.password = hashedPassword
    }

    // Se tiver um nome, atualizar o nome
    if (name) {
      updatedUserData.name = name
    }

    // Atualizar o usuário buscando pelo ID
    const updatedUser = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: updatedUserData,
    })

    return res.send({ msg: '🟢 Usuário atualizado com sucesso.', updatedUser })
  })
}
