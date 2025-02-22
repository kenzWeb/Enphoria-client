import {productService} from '@/shared/services/products.service'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'

export const useGetSimilarProducts = (id: string) => {
	const {data, isLoading} = useQuery({
		queryKey: ['get similar products'],
		queryFn: () => productService.getSimilar(id),
	})

	return useMemo(() => ({data, isLoading}), [data, isLoading])
}
