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
	})

	return {user, isLoading, isFetching, isPending}
}
