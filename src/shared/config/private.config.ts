export const ENV = process.env.APP_ENV || 'development'
export const APP_URL = process.env.APP_URL || 'http://localhost:5173'
export const APP_DOMAIN = process.env.APP_DOMAIN || 'localhost'
export const SERVER_URL = process.env.SERVER_URL || 'http://localhost:5001'

export const isDevelopment = ENV === 'development'
export const isProduction = ENV === 'production'
export const isStaging = ENV === 'staging'
