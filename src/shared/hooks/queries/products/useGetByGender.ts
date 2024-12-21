import {productService} from '@/shared/services/products.service'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'

export const useGetByGender = (name: string) => {
	const {data: products, isLoading} = useQuery({
		queryKey: ['get products by gender', name],
		queryFn: () => productService.getByGender(name),
	})

	return useMemo(() => ({products, isLoading}), [products, isLoading])
}
