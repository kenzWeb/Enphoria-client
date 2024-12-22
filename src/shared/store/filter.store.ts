import {create} from 'zustand'
import {IFilters} from '../types/filters.types'
import {EnumGender, EnumProductSort} from '../types/product.interface'

const initialQueryParams: Pick<IFilters, 'queryParams'> = {
	queryParams: {
		categoryId: '',
		category: '',
		styleId: '',
		style: '',
		page: 1,
		perPage: 9,
		gender: EnumGender.MALE,
		minPrice: 0,
		maxPrice: 0,
		colors: [],
		sizes: [],
		sort: EnumProductSort.NEWEST,
	},
}

export const useFilterStore = create<IFilters>((set) => ({
	...initialQueryParams,
	isFilterUpdated: false,
	updateQueryParam: ({key, value}) =>
		set((state) => ({
			queryParams: {
				...state.queryParams,
				[key]: value,
			},
			isFilterUpdated: true,
		})),

	reset: () =>
		set(() => ({
			...initialQueryParams,
			isFilterUpdated: true,
		})),
}))