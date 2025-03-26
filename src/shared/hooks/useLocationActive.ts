import {useLocation} from 'react-router-dom'

export const useLocationActive = (to: string) => {
	const location = useLocation()

	const isActive =
		location.pathname + location.search === to ||
		(to === '/' && location.pathname === '/' && !location.search)

	return isActive
}
