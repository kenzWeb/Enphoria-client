import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React, {useState} from 'react'
import {Toaster} from 'react-hot-toast'
import {RouterProvider} from 'react-router-dom'
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
		<>
			<React.StrictMode>
				<QueryClientProvider client={client}>
					<Toaster />
					<RouterProvider router={router}></RouterProvider>
				</QueryClientProvider>
			</React.StrictMode>
		</>
	)
}
