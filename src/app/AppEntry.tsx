import {Favorites} from '@/pages/Favorites'
import {Home} from '@/pages/Home'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Auth from '../pages/Auth/Auth'
import {store} from './store/store'
import './styles/base.scss'

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

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}></RouterProvider>
		</Provider>
	</React.StrictMode>,
)
