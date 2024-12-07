export const API_URL = {
	root: (url = '') => `${url ? url : ''}`,

	auth: (url = '') => API_URL.root(`/auth/${url}`),
	users: (url = '') => API_URL.root(`/users/${url}`),
	produts: (url = '') => API_URL.root(`/produts/${url}`),
	categories: (url = '') => API_URL.root(`/categories/${url}`),
	colors: (url = '') => API_URL.root(`/colors/${url}`),
	files: (url = '') => API_URL.root(`/files/${url}`),
	dressStyles: (url = '') => API_URL.root(`/dressStyles/${url}`),
	sizes: (url = '') => API_URL.root(`/sizes/${url}`),
	orders: (url = '') => API_URL.root(`/orders/${url}`),
}