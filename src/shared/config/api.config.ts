export const API_URL = {
	root: (url = '') => `${url ? url : ''}`,

	auth: (url = '') => API_URL.root(`/auth/${url}`),
	users: (url = '') => API_URL.root(`/users/${url}`),
	products: (url = '') => API_URL.root(`/products/${url}`),
	arrival: (url = '') => API_URL.root(`/arrivals/${url}`),
	zone: (url = '') => API_URL.root(`/zones/${url}`),
	categories: (url = '') => API_URL.root(`/categories/${url}`),
	colors: (url = '') => API_URL.root(`/colors/${url}`),
	files: (url = '') => API_URL.root(`/files/${url}`),
	dressStyles: (url = '') => API_URL.root(`/dressStyles/${url}`),
	sizes: (url = '') => API_URL.root(`/sizes/${url}`),
	orders: (url = '') => API_URL.root(`/orders/${url}`),
	codes: (url = '') => API_URL.root(`/codes/${url}`),
	billing: (url = '') => API_URL.root(`/billing/${url}`),
	shipping: (url = '') => API_URL.root(`/shipping-addresses/${url}`),
}
