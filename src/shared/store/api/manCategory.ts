import {IBase} from '@/entitles/zone/models/types'
import {api} from './api'

export const categoryApi = api.injectEndpoints({
	endpoints: (build) => ({
		getCategory: build.query<IBase[], void>({
			query: () => ({
				url: '/base/?gender=Man',
			}),
		}),
	}),
})

export const {useGetCategoryQuery} = categoryApi
