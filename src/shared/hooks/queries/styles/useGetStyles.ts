import {stylesService} from '@/shared/services/styles.service'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'

export const useGetStyles = () => {
	const {data: styles, isLoading} = useQuery({
		queryKey: ['get all styles'],
		queryFn: () => stylesService.getAll(),
	})

	return useMemo(
		() => ({
			styles: styles || [],
			isLoading,
		}),
		[styles, isLoading],
	)
}
