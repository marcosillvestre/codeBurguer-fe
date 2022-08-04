/* eslint-disable prettier/prettier */
import axios from 'axios'

export const apiCodeB = axios.create({
  baseURL: 'http://localhost:3001'
})

export default apiCodeB
