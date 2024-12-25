import {EnumGender, EnumProductSort} from '../types/product.interface'

export const InitialQueryParams = {
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
}
