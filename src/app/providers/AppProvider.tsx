import {Loader} from '@/shared/ui/Other'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React, {useState} from 'react'
import {Toaster} from 'react-hot-toast'
import {RouterProvider} from 'react-router-dom'
import {AuthInitializer} from './auth'
import {router} from './routes/model/routes'

export const AppProvider: React.FC = () => {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
				},
			},
		}),
	)

	return (
		<React.StrictMode>
			<QueryClientProvider client={client}>
				<AuthInitializer>
					<Toaster />
					<RouterProvider router={router} fallbackElement={<Loader />} />
				</AuthInitializer>
			</QueryClientProvider>
		</React.StrictMode>
	)
}
