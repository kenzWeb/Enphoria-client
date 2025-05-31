import {PUBLIC_URL} from '../config/url.config'

export const NAVIGATION_ITEMS = [
	{to: '/', label: 'Shop', icon: '🛍️'},
	{to: '/shop/?page=1&gender=male', label: 'Men', icon: '👨'},
	{to: '/shop/?page=1&gender=female', label: 'Women', icon: '👩'},
	{to: '/shop/?page=1&category=Tops', label: 'Tops', icon: '👕'},
	{to: '/shop/?page=1&category=Boxers', label: 'Boxers', icon: '🩲'},
] as const

export const QUICK_ACTIONS = [
	{icon: 'FiUser', label: 'Profile', to: PUBLIC_URL.account('profile')},
	{icon: 'FiHeart', label: 'Wishlist', to: PUBLIC_URL.account('wishlist')},
	{icon: 'FiShoppingBag', label: 'Cart', to: PUBLIC_URL.cart()},
] as const

export const MOBILE_BREAKPOINT = 920
export const TABLET_BREAKPOINT = 1100
export const LARGE_SCREEN_BREAKPOINT = 1400
