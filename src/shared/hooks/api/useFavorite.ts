import {userService} from '@/shared/services/user.service'
import {IProduct} from '@/shared/types/product.interface'
import {useMutation, useQueryClient} from '@tanstack/react-query'

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
		},
	})

	return {mutate, isPending}
}
