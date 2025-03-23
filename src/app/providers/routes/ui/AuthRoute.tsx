import {useProfile} from '@/shared/hooks/api/useProfile'
import {Loader} from '@/shared/ui/Other'
import {Navigate, Outlet} from 'react-router-dom'

export const AuthRoute = () => {
	const {user} = useProfile()

	if (user === null) {
		return <Loader />
	}

	return user ? <Navigate to={'/'} replace /> : <Outlet />
}
