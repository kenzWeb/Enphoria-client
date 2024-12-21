import {productService} from '@/shared/services/products.service'
import {IProductFilters} from '@/shared/types/product.interface'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'

export const useGetFilteredProducts = (filters: IProductFilters) => {
	const queryData = useQuery({
		queryKey: ['products', filters],
		queryFn: () => productService.getByFilters(filters),
		enabled: !!filters,
		select: (data) => data,
	})

	return useMemo(
		() => ({
			products: queryData.data || [],
			isLoading: queryData.isLoading,
			refetch: queryData.refetch,
		}),
		[queryData.data, queryData.isLoading, queryData.refetch],
	)
}
