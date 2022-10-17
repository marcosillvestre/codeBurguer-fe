/* eslint-disable prettier/prettier */
import axios from 'axios'

export const apiCodeB = axios.create({
  baseURL: 'http://localhost:3001'
})

apiCodeB.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeBurguer:userData')
  const token = userData && JSON.parse(userData).data.token
  config.headers.Authorization = `Bearer ${token}`
  return config
})


export default apiCodeB
