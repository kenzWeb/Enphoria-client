import { PUBLIC_URL } from '@/shared/config/url.config'
import {useProfile} from '@/shared/hooks/api/useProfile'
import {Loader} from '@/shared/ui/Other'
import {Navigate, Outlet} from 'react-router-dom'

export const PrivateRoute = () => {
	const {user} = useProfile()

	if (user === null) {
		return <Loader />
	}

	return user ? <Outlet /> : <Navigate to={PUBLIC_URL.auth()} replace />
}
