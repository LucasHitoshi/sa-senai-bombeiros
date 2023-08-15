import { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'
import { loginSchema } from '../../schemas/userSchemas'

export async function userLoginRoutes(
  app: FastifyInstance,
  opts: any,
  done: Function,
) {
  app.post('/api/users/login', async (req, res) => {
    // Faz uma requisição do body para pegar o email e a senha
    const { email, password } = loginSchema.parse(req.body)

    // Validações de email e senha
    if (!email || !password) {
      return res.status(422).send({ msg: '🟡 Credenciais inválidas' })
    }

    // Buscar o usuário no banco de dados e se não existir retornar um erro
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) {
      return res.status(401).send({ msg: '🔴 Credenciais inválidas' })
    }

    // Comparar a senha fornecida pelo usuário com a senha criptografada armazenada
    const passwordMatches = await app.bcrypt.compare(password, user.password)

    if (!passwordMatches) {
      return res.status(401).send({ msg: '🔴 Credenciais inválidas' })
    }

    // Realizar o JWT Token
    const token = app.jwt.sign(
      {
        userId: user.id,
        name: user.name,
        email: user.email,
      },
      {
        expiresIn: '120 days',
      },
    )

    return res.send({
      token,
      user: { id: user.id, email: user.email },
      login: { msg: '🟢 Usuário logado com sucesso.' },
    })
  })

  done()
}
