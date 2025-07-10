import {userService} from '@/shared/services/user.service'
import {IApiError} from '@/shared/types/api.error'
import {IProduct} from '@/shared/types/product.interface'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useFavorite = (product: IProduct) => {
	const queryClient = useQueryClient()
	if (!product.id) throw new Error('Product ID is required')

	const {mutate, isPending} = useMutation({
		mutationKey: ['toggle favorite'],
		mutationFn: () => {
			if (!product.id) throw new Error('Product ID is required')
			return userService.toggleFavorite(product.id)
		},
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['profile'],
			})
			toast.success('Favorite updated successfully')
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
