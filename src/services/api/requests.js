import { api } from './config'

export const LOGIN = data => api.post('/login', data)
export const REGISTER = data => api.post('/user', data)
