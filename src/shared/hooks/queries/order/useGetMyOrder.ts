import {orderService} from '@/shared/services/order.service'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'

export const useGetMyOrder = () => {
	const {data: response, isLoading} = useQuery({
		queryKey: ['get my orders'],
		queryFn: () => orderService.getMyOrders(),
	})

	return useMemo(
		() => ({
			orders: response?.data || [],
			isLoading,
		}),
		[response, isLoading],
	)
}
