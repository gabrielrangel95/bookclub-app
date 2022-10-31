import { api } from './config'

export const LOGIN = data => api.post('/login', data)
export const REGISTER = data => api.post('/user', data)
export const FORGOT_PASSWORD = data => api.post('/forgot-password', data)
export const RESET_PASSWORD = data => api.post('/reset-password', data)
