import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {saveTokenStorage} from '../services/auth/auth-token.service'

export const useToken = () => {
	const location = useLocation()

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search)
		const token = queryParams.get('accessToken')
		if (token) {
			saveTokenStorage(token)
		}
	}, [location])
}
