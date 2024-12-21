import {categoryService} from '@/shared/services/category.service'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'
import {useParams} from 'react-router-dom'

export const useGetCategories = () => {
	const params = useParams<{storeId: string}>()

	const {data: categories, isLoading} = useQuery({
		queryKey: ['get categories for dashboard'],
		queryFn: () => categoryService.getById(params.storeId!),
	})

	return useMemo(
		() => ({
			categories,
			isLoading,
		}),
		[categories, isLoading],
	)
}
