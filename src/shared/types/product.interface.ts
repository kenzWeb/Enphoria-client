export interface IProductFilters {
	categoryId?: string
	category?: string
	styleId?: string
	page?: number | string
	perPage?: number | string
	style?: string
	gender?: EnumGender
	minPrice?: number
	maxPrice?: number
	colors?: string[] | string
	sizes?: string[] | string
	sort?: EnumProductSort
	searchTerm?: string
}

export interface IProduct {
	id?: string
	name: string
	description: string
	price: number
	images: string[]
	brand: string
	gender: EnumGender
	type?: string
	category?: {
		id?: string
		name?: string
	}
	dressStyle: {
		id?: string
		name: string
	}
	productColors?: {
		color?: {
			id?: string
			name?: string
			value?: string
		}
	}[]
	productSizes?: {
		size?: {
			id?: string
			name?: string
		}
	}[]
}

export interface IProductInput
	extends Omit<
		IProduct,
		'id' | 'category' | 'dressStyle' | 'productColors' | 'productSizes'
	> {
	categoryId: string
	styleId: string
	colors?: {id: string}[]
	sizes?: {id: string}[]
}

export interface IPaginationResponse<T> {
	products: T[]
	length: number
}

export enum EnumGender {
	MALE,
	FEMALE,
}

export enum EnumProductSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest',
}
