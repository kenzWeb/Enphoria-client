import {shippingAddressService} from '@/shared/services/shipping-address'
import {IShippingAddress} from '@/shared/types/shipping-address.interface'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'

export const useGetShipping = () => {
	const {data: shipping, isLoading} = useQuery<IShippingAddress[]>({
		queryKey: ['get shipping for dashboard'],
		queryFn: () => shippingAddressService.getShippingAddress(),
	})

	return useMemo(
		() => ({
			shipping,
			isLoading,
		}),
		[shipping, isLoading],
	)
}
