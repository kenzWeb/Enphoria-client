import {useAuth} from '@/shared/hooks/api/useAuth'
import {Loader} from '@/shared/ui/Other'
import {Navigate, Outlet} from 'react-router-dom'

export const AuthRoute = () => {
	const {isAuth, isCheckingAuth} = useAuth()

	if (isCheckingAuth) {
		return <Loader />
	}

	return isAuth ? <Navigate to={'/'} replace /> : <Outlet />
}
