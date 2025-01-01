import {userService} from '@/shared/services/user.service'
import {useQuery} from '@tanstack/react-query'

export function useProfile() {
	const {
		data: user,
		isLoading,
		isFetching,
		isPending,
	} = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
		staleTime: 10 * 60 * 1000,
		enabled: true,
	})

	return {user, isLoading, isFetching, isPending}
}
