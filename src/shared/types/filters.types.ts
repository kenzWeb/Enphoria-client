import {IProductFilters} from './product.interface'

export interface IFilters {
	queryParams: IProductFilters
	isFilterUpdated: boolean
	updateQueryParam: (data: {
		key: keyof IProductFilters
		value: string | string[] | number
	}) => void
	reset: () => void
}
