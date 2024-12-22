import {authService} from '@/shared/services/auth/auth.service'
import {Loader} from '@/shared/ui/Other'
import {useEffect, useState} from 'react'
import {Navigate, Outlet} from 'react-router-dom'

export const PrivateRoute = () => {
	const [auth, setAuth] = useState<boolean | null>(null)

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

	return auth ? <Outlet /> : <Navigate to={'/auth'} replace />
}
