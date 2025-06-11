import {orderService} from '@/shared/services/order.service'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'

export const useGetMyOrder = () => {
	const {data: orders, isLoading} = useQuery({
		queryKey: ['get my orders'],
		queryFn: () => orderService.getMyOrders(),
	})

	return useMemo(
		() => ({
			orders: orders || [],
			isLoading,
		}),
		[orders, isLoading],
	)
}
