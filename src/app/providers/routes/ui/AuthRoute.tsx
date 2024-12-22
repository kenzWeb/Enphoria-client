import {authService} from '@/shared/services/auth/auth.service'
import {Loader} from '@/shared/ui/Other'
import {useEffect, useState} from 'react'
import {Navigate, Outlet} from 'react-router-dom'

export const AuthRoute = () => {
	const [auth, setAuth] = useState<boolean | null>(false)

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const response = await authService.checkRefreshToken()
				setAuth(response.data.authenticated)
			} catch (error) {
				console.error('Error checking auth:', error)
				setAuth(false)
			}
		}

		checkAuth()
	}, [])

	if (auth === null) {
		return <Loader />
	}

	return auth ? <Navigate to={'/'} replace /> : <Outlet />
}
