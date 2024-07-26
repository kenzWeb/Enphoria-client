import {IBase} from '@/shared/types/types'
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
		getLimelightCategory: build.query<IBase[], void>({
			query: () => ({
				url: '/base/?table=limelight',
			}),
		}),
	}),
})

export const {
	useGetManCategoryQuery,
	useGetWomanCategoryQuery,
	useGetLimelightCategoryQuery,
} = categoryApi
