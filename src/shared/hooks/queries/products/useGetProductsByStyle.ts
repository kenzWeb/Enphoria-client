import {productService} from '@/shared/services/products.service'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'

export const useGetProductsByStyle = (name: string) => {
	const {data: style, isLoading} = useQuery({
		queryKey: ['get by style'],
		queryFn: () => productService.getByStyle(name),
	})

	return useMemo(() => {
		return {
			style,
			isLoading,
		}
	}, [style, isLoading])
}

export const useGetProductsByStyleId = (id: string) => {
	const {data: style, isLoading} = useQuery({
		queryKey: ['get by styleId'],
		queryFn: () => productService.getByStyleId(id),
	})

	return useMemo(() => {
		return {
			style,
			isLoading,
		}
	}, [style, isLoading])
}
