export const ENV = process.env.APP_ENV || 'development'
export const APP_URL = process.env.APP_URL || 'http://localhost:5173'
export const APP_DOMAIN = process.env.APP_DOMAIN || 'localhost'
export const SERVER_URL = process.env.SERVER_URL || 'http://localhost:5001'

export const ENABLE_PWA = process.env.ENABLE_PWA === 'true'
export const ENABLE_SERVICE_WORKER =
	process.env.ENABLE_SERVICE_WORKER === 'true'

export const isDevelopment = ENV === 'development'
export const isProduction = ENV === 'production'
export const isStaging = ENV === 'staging'
