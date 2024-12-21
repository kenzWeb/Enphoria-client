import {arrivalService} from '@/shared/services/arrival.service'
import {useQuery} from '@tanstack/react-query'
import {useMemo} from 'react'
import {useParams} from 'react-router-dom'

export const useGetArrival = () => {
	const params = useParams<{storeId: string}>()

	const {data: arrival, isLoading} = useQuery({
		queryKey: ['get categories for dashboard'],
		queryFn: () => arrivalService.getById(params.storeId!),
	})

	return useMemo(
		() => ({
			arrival,
			isLoading,
		}),
		[arrival, isLoading],
	)
}

export const useGetAllArrival = () => {
	const {data: arrival, isLoading} = useQuery({
		queryKey: ['get all arrivals'],
		queryFn: arrivalService.getAll,
	})

	return useMemo(
		() => ({
			arrival,
			isLoading,
		}),
		[arrival, isLoading],
	)
}
