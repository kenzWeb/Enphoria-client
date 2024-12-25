import {sizeService} from '@/shared/services/size.service'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'

export const useGetSizes = () => {
	const {data: sizes, isLoading} = useQuery({
		queryKey: ['get all sizes'],
		queryFn: () => sizeService.getAll(),
	})

	return useMemo(
		() => ({
			sizes: sizes || [],
			isLoading,
		}),
		[sizes, isLoading],
	)
}
