import {IZone} from '@/entitles/zone/models/types'
import {api} from './api'

export const zoneApi = api.injectEndpoints({
	endpoints: (build) => ({
		getZones: build.query<IZone[], void>({
			query: () => ({
				url: '/zone',
			}),
		}),
	}),
})

export const {useGetZonesQuery} = zoneApi
