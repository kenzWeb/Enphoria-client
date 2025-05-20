export const PUBLIC_URL = {
	root: (url = '') => `${url ? url : ''}`,

	home: () => PUBLIC_URL.root('/'),
	thanks: () => PUBLIC_URL.root('/thanks'),
	auth: (url = '') => PUBLIC_URL.root(`/auth/${url}`),
	favorites: (url = '') => PUBLIC_URL.root(`/favorites/${url}`),

	shop: (id = '') => PUBLIC_URL.root(`/shop/${id}`),
	product: (id = '') => PUBLIC_URL.root(`product/${id}`),
	category: (id = '') => PUBLIC_URL.root(`category/${id}`),

	cart: (url = '') => PUBLIC_URL.root(`/cart/${url}`),
	account: (url = '') => PUBLIC_URL.root(`/account/${url}`),
}

export const DASHBOARD_URL = {
	root: (url = '') => `/dashboard${url ? url : ''}`,

	home: () => DASHBOARD_URL.root('/'),
	favorites: () => DASHBOARD_URL.root('/favorites'),
	explorer: (query = '') => PUBLIC_URL.root(`/explorer ${query}`),
}
