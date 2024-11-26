import {store} from '@/app/store/store'
import {Favorites} from '@/pages/Favorites'
import {Home} from '@/pages/Home'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React, {useState} from 'react'
import {Toaster} from 'react-hot-toast'
import {Provider} from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Auth from '../pages/Auth/Auth'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/auth',
		element: <Auth />,
	},
	{
		path: '/favorites',
		element: <Favorites />,
	},
	{
		path: '*',
		element: <h2>Not found</h2>,
	},
])

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
