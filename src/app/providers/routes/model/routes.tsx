import {AccountLayout, MainLayout} from '@/app/providers/layouts'
import {AuthRoute} from '@/app/providers/routes'
import {
	AuthPage,
	CartPage,
	CheckoutPage,
	HomePage,
	OrdersPage,
	ProductPage,
	ProfilePage,
	ShopPage,
	ThanksPage,
	WishlistPage,
} from '@/pages'
import {PUBLIC_URL} from '@/shared/config/url.config'

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
				path: PUBLIC_URL.favorites(),
				element: <CartPage />,
			},
			{
				path: PUBLIC_URL.shop(),
				element: <ShopPage />,
			},
			{
				path: PUBLIC_URL.shop(':id'),
				element: <ProductPage />,
			},
			{
				path: PUBLIC_URL.account('checkout'),
				element: <CheckoutPage />,
			},
			{
				path: PUBLIC_URL.thanks(),
				element: <ThanksPage />,
			},
			{
				path: PUBLIC_URL.account(),
				element: <AccountLayout />,
				children: [
					{
						path: PUBLIC_URL.account('profile'),
						element: <ProfilePage />,
					},
					{
						path: PUBLIC_URL.account('orders'),
						element: <OrdersPage />,
					},
					{
						path: PUBLIC_URL.account('wishlist'),
						element: <WishlistPage />,
					},
				],
			},
		],
	},
	{
		element: <AuthRoute />,
		children: [
			{
				path: PUBLIC_URL.auth(),
				element: <AuthPage />,
			},
		],
	},
])
