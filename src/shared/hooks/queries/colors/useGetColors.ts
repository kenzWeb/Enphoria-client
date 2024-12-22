import {colorService} from '@/shared/services/color.service'
import {IColor} from '@/shared/types/color.interface'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'

export const useGetColors = () => {
	const {data: colors, isLoading} = useQuery<IColor[]>({
		queryKey: ['get colors'],
		queryFn: () => colorService.getAll(),
	})

	return useMemo(
		() => ({
			colors: colors || [],
			isLoading,
		}),
		[colors, isLoading],
	)
}
