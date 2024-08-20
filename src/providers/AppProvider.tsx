import {store} from '@/app/store/store'
import {Favorites} from '@/pages/Favorites'
import {Home} from '@/pages/Home'
import React from 'react'
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
	return (
		<>
			<React.StrictMode>
				<Provider store={store}>
					<RouterProvider router={router}></RouterProvider>
				</Provider>
			</React.StrictMode>
		</>
	)
}
