import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.16.1.106:3333',
  // IP DO LUCIANO: 10.3.77.141
  // IP QUE TAVA ANTES: 10.3.78.11
})
