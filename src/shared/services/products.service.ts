/* eslint-disable no-mixed-spaces-and-tabs */
import {
	IProduct,
	IProductFilters,
	IProductInput,
} from '@/shared/types/product.interface'
import {axiosClassic, axiosWithAuth} from '../api/api.interceptors'
import {API_URL} from '../config/api.config'
import {IPaginationProducts} from '../types/filter.interface'

class ProductService {
	async getAll(params = {}) {
		const {data} = await axiosClassic<IPaginationProducts>({
			url: API_URL.products(),
			method: 'GET',
			params: params,
		})

		return data || []
	}

	async getById(id: string) {
		const {data} = await axiosClassic<IProduct>({
			url: API_URL.products(`by-id/${id}`),
			method: 'GET',
		})

		return data
	}

	async getByType(type: string) {
		const {data} = await axiosClassic<IProduct[]>({
			url: API_URL.products(`by-type/${type}`),
			method: 'GET',
		})

		return data
	}

	async getByCategoryId(categoryId: string) {
		const {data} = await axiosClassic<IProduct[]>({
			url: API_URL.products(`by-categoryId/${categoryId}`),
			method: 'GET',
		})

		return data
	}

	async getByCategory(category: string) {
		const {data} = await axiosClassic<IProduct>({
			url: API_URL.products(`by-category/${category}`),
		})

		return data
	}

	async getByStyle(style: string) {
		const {data} = await axiosClassic<IProduct>({
			url: API_URL.products(`by-style/${style}`),
		})

		return data
	}

	async getByStyleId(styleId: string) {
		const {data} = await axiosClassic<IProduct>({
			url: API_URL.products(`by-style/${styleId}`),
		})

		return data
	}

	async getByFilters(queryData = {} as IProductFilters) {
		const {data} = await axiosClassic<IProduct[]>({
			url: API_URL.products('filtered'),
			method: 'GET',
			params: queryData,
		})
		return data
	}

	async getMostPopular() {
		const {data} = await axiosClassic<IProduct[]>({
			url: API_URL.products(`most-popular`),
			method: 'GET',
		})

		return data
	}

	async getSimilar(id: string) {
		const {data} = await axiosClassic<IProduct[]>({
			url: API_URL.products(`similar/${id}`),
			method: 'GET',
		})

		return data
	}

	async getByGender(name: string) {
		const {data} = await axiosClassic<IProduct[]>({
			url: API_URL.products(`by-gender/${name}`),
		})

		return data
	}

	async create(data: IProductInput, storeId: string) {
		const {data: createdProduct} = await axiosWithAuth<IProduct[]>({
			url: API_URL.products(`${storeId}`),
			method: 'POST',
			data,
		})

		return createdProduct
	}

	async update(id: string, data: IProductInput) {
		const {data: updatedProduct} = await axiosWithAuth<IProduct>({
			url: API_URL.products(`${id}`),
			method: 'PUT',
			data,
		})

		return updatedProduct
	}

	async delete(id: string) {
		const {data: deletedProduct} = await axiosWithAuth<IProduct>({
			url: API_URL.products(`${id}`),
			method: 'DELETE',
		})

		return deletedProduct
	}
}

export const productService = new ProductService()
