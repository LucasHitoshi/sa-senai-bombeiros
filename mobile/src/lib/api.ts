import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://10.3.77.141:3333', // A rede do senai é mó bloqueada
  // IP DO LUCIANO: 10.3.77.141
  // IP DO BRUNOW 10.3.77.215
})
