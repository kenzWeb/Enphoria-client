import react from '@vitejs/plugin-react'
import path from 'path'
import {defineConfig, loadEnv} from 'vite'

export default defineConfig(({mode}) => {
	const env = loadEnv(mode, process.cwd(), '')

	const cherryPickedKeys = ['APP_ENV', 'APP_URL', 'APP_DOMAIN', 'SERVER_URL']

	const processEnv: Record<string, string> = {}
	cherryPickedKeys.forEach((key) => {
		processEnv[key] = env[key]
	})

	return {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
		define: {
			'process.env': processEnv,
		},
		plugins: [react()],
	}
})
