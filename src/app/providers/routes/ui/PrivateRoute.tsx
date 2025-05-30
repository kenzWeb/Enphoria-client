import {PUBLIC_URL} from '@/shared/config/url.config'
import {useAuth} from '@/shared/hooks/api/useAuth'
import {Loader} from '@/shared/ui/Other'
import {Navigate, Outlet} from 'react-router-dom'

export const PrivateRoute = () => {
	const {isAuth, isCheckingAuth} = useAuth()

	if (isCheckingAuth) {
		return (
			<div className='w-full h-full flex items-center justify-center'>
				<Loader />
			</div>
		)
	}

	return isAuth ? <Outlet /> : <Navigate to={PUBLIC_URL.auth()} replace />
}
