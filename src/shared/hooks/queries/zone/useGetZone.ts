import {zoneService} from '@/shared/services/zone.service'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'
import {useParams} from 'react-router-dom'

export const useGetZone = () => {
	const params = useParams<{storeId: string}>()

	const {data: zone, isLoading} = useQuery({
		queryKey: ['get categories for dashboard'],
		queryFn: () => zoneService.getById(params.storeId!),
	})

	return useMemo(
		() => ({
			zone,
			isLoading,
		}),
		[zone, isLoading],
	)
}

export const useGetAllZone = () => {
	const {data: zone, isLoading} = useQuery({
		queryKey: ['get all zones'],
		queryFn: zoneService.getAll,
	})

	return useMemo(
		() => ({
			zone,
			isLoading,
		}),
		[zone, isLoading],
	)
}
