import jwt from '@fastify/jwt'
import fastify from 'fastify'
import cors from '@fastify/cors'
import bcrypt from 'fastify-bcrypt' // Importe o plugin aqui

// Users
import { userRegisterRoutes } from './src/routes/users/registerRoutes'
import { userLoginRoutes } from './src/routes/users/loginRoutes'
import { userUpdateRoutes } from './src/routes/users/updateRoutes'
import { userDeleteRoutes } from './src/routes/users/deleteRoutes'
import {
  userFindOneRoutes,
  userFindRoutes,
} from './src/routes/users/findRoutes'

// Teste
import { criarSintomas } from './src/testes/criarSintomas'
import { criarSintomas2 } from './src/testes/criarSintoma2'
import { criarGlasgow } from './src/testes/criarGlasgow'
import { criarAnamneses } from './src/testes/criarAnamnesis'

// Reports
import { registerReportRoutes } from './src/routes/reports/registerReports'
import { reportsUpdateRoutes } from './src/routes/reports/updateReports'
import { reportsDeleteRoutes } from './src/routes/reports/deleteReports'
import {
  reportsFindRoutes,
  reportFindOneRoutes,
} from './src/routes/reports/findReports'

// Symptoms
import { registerSymptomsRoutes } from './src/routes/reports/Symptoms/registerSymptoms'
import { symptomsDeleteRoutes } from './src/routes/reports/Symptoms/deleteSymptoms'
import {
  symptomsFindRoutes,
  symptomsFindOneRoutes,
} from './src/routes/reports/Symptoms/findSymptoms'
import { updateSymptomsRoutes } from './src/routes/reports/Symptoms/updateSymptoms'

// Anamnesis
import { registerAnamneseRoutes } from './src/routes/reports/Anamnesis/registerAnamesis'
import { anamneseUpdateRoutes } from './src/routes/reports/Anamnesis/updateAnamesis'

// Pre Hospitalar methods
import { registerPreHospitalarMethodsRoutes } from './src/routes/reports/PreHospitalarMethod/registerPreHosMethod'
import { updatePreHospitalarMethodsRoutes } from './src/routes/reports/PreHospitalarMethod/updatePreHosMethod'
import {
  preHospitalarMethodsFindOneRoutes,
  preHospitalarMethodsFindRoutes,
} from './src/routes/reports/PreHospitalarMethod/findPreHosMethod'
import { preHospitalarMethodsDeleteRoutes } from './src/routes/reports/PreHospitalarMethod/deletePreHosMethod'
import {
  anamnesisFindOneRoutes,
  anamnesisFindRoutes,
} from './src/routes/reports/Anamnesis/findAnamesis'
import { anamneseDeleteRoutes } from './src/routes/reports/Anamnesis/deleteAnamesis'

// Glasgow
import { registerGlasgowRoutes } from './src/routes/reports/Glasglow/registerGlasglow'
import { updateGlasgowRoutes } from './src/routes/reports/Glasglow/updateGlasglow'
import {
  glasgowFindOneRoutes,
  glasgowFindRoutes,
} from './src/routes/reports/Glasglow/findGlasglow'
import { glasgowDeleteRoutes } from './src/routes/reports/Glasglow/deleteGlasglow'

// Gestacional Anamnesis
import { registerGestacionalAnamnesisRoutes } from './src/routes/reports/GestationalAnamnesis/registerGesAnamnesis'
import { updateGestacionalAnamnesisRoutes } from './src/routes/reports/GestationalAnamnesis/updateGesAnamnesis'
import {
  gestacionalAnamnesisFindOneRoutes,
  gestacionalAnamnesisFindRoutes,
} from './src/routes/reports/GestationalAnamnesis/findGesAnamnesis'
import { gestacionalAnamnesisDeleteRoutes } from './src/routes/reports/GestationalAnamnesis/deleteGesAnamnesis'

const app = fastify() // Dar para a const app todas as informações do Fastify

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'bombeiro',
})

app.register(bcrypt)

// USER
app.register(userRegisterRoutes)
app.register(userLoginRoutes)
app.register(userUpdateRoutes)
app.register(userDeleteRoutes)
app.register(userFindOneRoutes)
app.register(userFindRoutes)

// TESTE
app.register(criarSintomas)
app.register(criarSintomas2)
app.register(criarGlasgow)
app.register(criarAnamneses)

// REPORTS
app.register(reportsFindRoutes)
app.register(reportFindOneRoutes)
app.register(registerReportRoutes)
app.register(reportsUpdateRoutes)
app.register(reportsDeleteRoutes)

// SYMPTOMS
app.register(registerSymptomsRoutes)
app.register(symptomsDeleteRoutes)
app.register(symptomsFindRoutes)
app.register(symptomsFindOneRoutes)
app.register(updateSymptomsRoutes)

// ANAMNESIS
app.register(registerAnamneseRoutes)
app.register(anamneseUpdateRoutes)
app.register(anamnesisFindRoutes)
app.register(anamnesisFindOneRoutes)
app.register(anamneseDeleteRoutes)

// PRE HOSPITLAR METHODS
app.register(registerPreHospitalarMethodsRoutes)
app.register(updatePreHospitalarMethodsRoutes)
app.register(preHospitalarMethodsFindRoutes)
app.register(preHospitalarMethodsFindOneRoutes)
app.register(preHospitalarMethodsDeleteRoutes)

// GLASGOW
app.register(registerGlasgowRoutes)
app.register(updateGlasgowRoutes)
app.register(glasgowFindRoutes)
app.register(glasgowFindOneRoutes)
app.register(glasgowDeleteRoutes)

// GESTACIONAL ANAMNESIS
app.register(registerGestacionalAnamnesisRoutes)
app.register(updateGestacionalAnamnesisRoutes)
app.register(gestacionalAnamnesisFindRoutes)
app.register(gestacionalAnamnesisFindOneRoutes)
app.register(gestacionalAnamnesisDeleteRoutes)

app
  .listen({
    port: 3333, // Porta para rodar na Aplicação WEB
    host: '0.0.0.0', // Porta para rodar na Aplicação APPs
  })
  .then(() => {
    console.log('🔥🚒 HTTP server running on port http://localhost:3333') // Ao rodar o server aparecer a seguinte mensagem
  })
