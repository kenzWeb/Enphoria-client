import {IBase} from '@/entitles/zone/models/types'
import {api} from './api'

export const categoryApi = api.injectEndpoints({
	endpoints: (build) => ({
		getManCategory: build.query<IBase[], void>({
			query: () => ({
				url: '/base/?gender=Man',
			}),
		}),
		getWomanCategory: build.query<IBase[], void>({
			query: () => ({
				url: '/base/?gender=Woman',
			}),
		}),
	}),
})

export const {useGetManCategoryQuery, useGetWomanCategoryQuery} = categoryApi
