import {IProduct} from './product.interface'

export type FilterParamName = 'sizes' | 'colors'

export type FilterParamValue = string | string[] | undefined

export interface QueryParams {
	sizes?: FilterParamValue
	colors?: FilterParamValue
	page?: string
	perPage?: string
	[key: string]: FilterParamValue
}

export interface FilterItemProps<T> {
	item: T
	isSelected: boolean
	onToggle: (name: string) => void
}

export interface IPaginationProducts {
	length: number
	data: IProduct[]
}
