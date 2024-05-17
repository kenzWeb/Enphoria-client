import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Auth from '../pages/Auth/Auth'
import App from './App'
import './styles/base.scss'

const router = createBrowserRouter([
	{
		path: '/auth',
		element: <Auth />,
	},
	{
		path: '/',
		element: <App />,
	},
	{
		path: '*',
		element: <h2>Not found</h2>,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
