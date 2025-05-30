import {shippingAddressService} from '@/shared/services/shipping-address'
import {IShippingAddress} from '@/shared/types/shipping-address.interface'
import {useMutation, useQueryClient} from '@tanstack/react-query'

export const useCreateShipping = () => {
	const queryClient = useQueryClient()

	const createShippingMutation = useMutation({
		mutationFn: (
			data: Omit<IShippingAddress, 'id' | 'createdAt' | 'updatedAt'>,
		) => shippingAddressService.createShippingAddress(data as IShippingAddress),
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['shipping']})
		},
		onError: (error) => {
			console.error('Error creating shipping address:', error)
		},
	})

	return {
		createShipping: createShippingMutation.mutate,
		isCreating: createShippingMutation.isPending,
		error: createShippingMutation.error,
		isSuccess: createShippingMutation.isSuccess,
	}
}
