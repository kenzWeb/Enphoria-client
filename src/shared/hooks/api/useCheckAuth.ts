import {authService} from '@/shared/services/auth/auth.service'
import {ICheckAuth} from '@/shared/types/auth.interface'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'

export const useCheckAuth = () => {
	const {
		data: auth,
		isLoading,
		isPending,
		isFetching,
	} = useQuery<ICheckAuth>({
		queryKey: ['check auth'],
		queryFn: async () => {
			const response = await authService.checkRefreshToken()
			return response.data
		},
	})

	return useMemo(
		() => ({
			auth: auth || false,
			isLoading,
			isPending,
			isFetching,
		}),
		[auth, isLoading, isPending, isFetching],
	)
}
