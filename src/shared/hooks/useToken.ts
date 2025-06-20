import {useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {saveTokenStorage} from '../services/auth/auth-token.service'
import {useAuthStore} from '../store/auth.store'

export const useToken = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const {setAuth} = useAuthStore()

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search)
		const token = queryParams.get('accessToken')

		if (token) {
			saveTokenStorage(token)

			setAuth(true)

			queryParams.delete('accessToken')
			const newUrl = `${location.pathname}${
				queryParams.toString() ? `?${queryParams.toString()}` : ''
			}`
			navigate(newUrl, {replace: true})
		}
	}, [location, navigate, setAuth])
}
