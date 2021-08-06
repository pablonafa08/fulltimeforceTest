const env = process.env.NODE_ENV || 'development'

export const Config = {
  env,
  app: 'fulltimeforceTest',
  apiUrl: process.env.REACT_APP_API_URL,
}
