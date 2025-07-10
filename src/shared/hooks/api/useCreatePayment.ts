import {orderService} from '@/shared/services/order.service'
import {useCartStore} from '@/shared/store/cart.store'
import {IApiError} from '@/shared/types/api.error'
import {useMutation} from '@tanstack/react-query'
import toast from 'react-hot-toast'
import {useOrderCalculation} from '../useOrderCalculation'

export const useCreatePayment = () => {
	const {cart} = useCartStore()
	const {grandTotal} = useOrderCalculation()

	const {mutate, isPending} = useMutation({
		mutationKey: ['create payment'],
		mutationFn: () =>
			orderService.create({
				items: cart.map((item) => ({
					productId: item.id,
					price: grandTotal,
					quantity: item.quantity,
				})),
			}),
		onSuccess({data}) {
			window.location.href = data.confirmation.confirmation_url
		},
		onError(error: IApiError) {
			if (error.response?.data?.message) {
				toast.error(error.response.data.message)
			} else {
				toast.error('Something went wrong')
			}
		},
	})

	return {mutate, isPending}
}
