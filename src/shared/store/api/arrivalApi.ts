import {IArrival} from '../../interface/types'
import {api} from './api'

export const arrivalApi = api.injectEndpoints({
	endpoints: (build) => ({
		getArrivals: build.query<IArrival[], void>({
			query: () => ({
				url: '/arrival',
			}),
		}),
	}),
})

export const {useGetArrivalsQuery} = arrivalApi
