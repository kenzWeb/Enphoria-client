import {orderService} from '@/shared/services/order.service'
import {useCartStore} from '@/shared/store/cart.store'
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
		onError(error) {
			if (error instanceof Error) {
				toast.error(error.message)
			} else {
				toast.error('Something went wrong')
			}
		},
	})

	return {mutate, isPending}
}
