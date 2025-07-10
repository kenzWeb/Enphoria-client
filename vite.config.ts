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

		build: {
			rollupOptions: {
				output: {
					manualChunks: {
						// React ecosystem
						'react-vendor': ['react', 'react-dom', 'react-router-dom'],

						// UI libraries
						'ui-vendor': [
							'motion',
							'@radix-ui/react-accordion',
							'@radix-ui/react-checkbox',
							'@radix-ui/react-dialog',
							'@radix-ui/react-label',
							'@radix-ui/react-select',
							'@radix-ui/react-separator',
							'@radix-ui/react-slider',
							'@radix-ui/react-slot',
							'@radix-ui/react-tabs',
							'@radix-ui/react-toggle',
							'@radix-ui/react-toggle-group',
							'@radix-ui/react-tooltip',
						],

						// Form libraries
						'form-vendor': ['react-hook-form', '@hookform/resolvers'],

						// Data fetching
						'query-vendor': ['@tanstack/react-query'],

						// State management
						'state-vendor': ['zustand'],

						// HTTP client
						'http-vendor': ['axios'],

						// Utilities
						'utils-vendor': [
							'clsx',
							'class-variance-authority',
							'react-hot-toast',
						],
					},
				},
			},
			chunkSizeWarningLimit: 1000,
		},

		css: {
			preprocessorOptions: {
				less: {
					math: 'parens-division',
				},
				scss: {
					api: 'modern-compiler',
				},
			},
		},
	}
})
