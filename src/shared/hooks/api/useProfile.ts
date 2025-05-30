import {userService} from '@/shared/services/user.service'
import {useQuery} from '@tanstack/react-query'
import {useAuth} from './useAuth'

export function useProfile() {
	const {isAuth} = useAuth()

	const {
		data: user,
		isLoading,
		isFetching,
		isPending,
	} = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
		staleTime: 10 * 60 * 1000,
		enabled: isAuth,
	})

	return {user, isLoading, isFetching, isPending}
}
