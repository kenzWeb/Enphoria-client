import {PUBLIC_URL} from '@/shared/config/url.config'

export const menuItems = [
	{
		id: 1,
		label: 'My orders',
		icon: '/img/icons/menu/myOrders.svg',
		route: PUBLIC_URL.account('orders'),
	},
	{
		id: 2,
		label: 'Wishlist',
		icon: '/img/icons/menu/wishlist.svg',
		route: PUBLIC_URL.account('wishlist'),
	},
	{
		id: 3,
		label: 'My info',
		icon: '/img/icons/menu/myInfo.svg',
		route: PUBLIC_URL.account('profile'),
	},
	{
		id: 4,
		label: 'Sign out',
		icon: '/img/icons/menu/signOut.svg',
		route: PUBLIC_URL.account('sign-out'),
	},
]
