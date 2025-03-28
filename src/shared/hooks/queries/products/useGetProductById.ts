import {productService} from '@/shared/services/products.service'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'

export const useGetProductById = (id: string) => {
	const {data: product, isLoading} = useQuery({
		queryKey: ['get product by id', id],
		queryFn: () => productService.getById(id),
	})

	return useMemo(
		() => ({
			product,
			isLoading,
		}),
		[product, isLoading],
	)
}
