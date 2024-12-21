import {productService} from '@/shared/services/products.service'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'

export const useGetAllProducts = () => {
	const {data: products, isLoading} = useQuery({
		queryKey: ['get all products'],
		queryFn: () => productService.getAll(),
	})

	return useMemo(
		() => ({
			products,
			isLoading,
		}),
		[products, isLoading],
	)
}
