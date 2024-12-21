import {productService} from '@/shared/services/products.service'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'

export const useGetProductByType = (name: string) => {
	const {data, isLoading} = useQuery({
		queryKey: ['get product by type'],
		queryFn: () => productService.getByType(name),
	})

	return useMemo(() => ({data, isLoading}), [data, isLoading])
}

export const useGetProductByTypeId = (id: string) => {
	const {data, isLoading} = useQuery({
		queryKey: ['get product by type id'],
		queryFn: () => productService.getByCategoryId(id),
	})

	return useMemo(() => ({data, isLoading}), [data, isLoading])
}
