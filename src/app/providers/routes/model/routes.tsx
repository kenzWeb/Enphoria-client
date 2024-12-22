import {MainLayout} from '@/app/providers/layouts'
import {AuthRoute} from '@/app/providers/routes'
import {AuthPage, FavoritesPage, HomePage, ShopPage} from '@/pages'

import {createBrowserRouter} from 'react-router-dom'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: '/favorites',
				element: <FavoritesPage />,
			},
			{
				path: '/shop',
				element: <ShopPage />,
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
])
