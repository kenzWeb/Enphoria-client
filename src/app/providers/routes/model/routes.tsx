import {MainLayout} from '@/app/providers/layouts'
import {AuthRoute} from '@/app/providers/routes'
import {
	AuthPage,
	CartPage,
	CheckoutPage,
	HomePage,
	ProductPage,
	ShopPage,
} from '@/pages'

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
				element: <CartPage />,
			},
			{
				path: '/shop',
				element: <ShopPage />,
			},
			{
				path: '/shop/:id',
				element: <ProductPage />,
			},
			{
				path: '/account/checkout',
				element: <CheckoutPage />,
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
