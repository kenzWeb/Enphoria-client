import {store} from '@/app/store/store'
import {AuthPage} from '@/pages/Auth/AuthPage'
import {Favorites} from '@/pages/Favorites'
import {Home} from '@/pages/Home'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React, {useState} from 'react'
import {Toaster} from 'react-hot-toast'
import {Provider} from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {AuthRoute} from './AuthRoute'
import {PrivateRoute} from './PrivateRoute'

const router = createBrowserRouter(
	[
		{
			element: <PrivateRoute />,
			children: [
				{
					path: '/',
					element: <Home />,
				},

				{
					path: '/favorites',
					element: <Favorites />,
				},
			],
		},

		{
			element: <AuthRoute />,
			children: [
				{
					path: '/auth',
					element: <AuthPage />,
				},
			],
		},

		{
			path: '*',
			element: <h2>Not found</h2>,
		},
	],
	{
		future: {
			v7_relativeSplatPath: true,
		},
	},
)

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
					<Provider store={store}>
						<Toaster />
						<RouterProvider router={router}></RouterProvider>
					</Provider>
				</QueryClientProvider>
			</React.StrictMode>
		</>
	)
}
