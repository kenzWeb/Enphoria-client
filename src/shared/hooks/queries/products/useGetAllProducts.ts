import {productService} from '@/shared/services/products.service'
import {IProductFilters} from '@/shared/types/product.interface'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'

export const useGetAllProducts = (filters?: IProductFilters) => {
	const queryData = useQuery({
		queryKey: ['products', filters],
		queryFn: () => productService.getAll(filters || { perPage: 9 }),
		enabled: true,
		staleTime: 5 * 60 * 1000,
	})

	return useMemo(
		() => ({
			products: queryData.data?.data || [],
			isLoading: queryData.isLoading,
		}),
		[queryData.data, queryData.isLoading],
	)
}
