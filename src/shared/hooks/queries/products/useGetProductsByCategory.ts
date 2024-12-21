import {productService} from '@/shared/services/products.service'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'

export const useGetByCategory = (name: string) => {
	const {data: category, isLoading} = useQuery({
		queryKey: ['get by category'],
		queryFn: () => productService.getByCategory(name),
	})

	return useMemo(
		() => ({
			category,
			isLoading,
		}),
		[category, isLoading],
	)
}

export const useGetByCategoryId = (id: string) => {
	const {data: category, isLoading} = useQuery({
		queryKey: ['get by categoryId'],
		queryFn: () => productService.getByCategoryId(id),
	})

	return useMemo(() => {
		return {
			category,
			isLoading,
		}
	}, [category, isLoading])
}
