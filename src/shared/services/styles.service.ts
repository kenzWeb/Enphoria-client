import {axiosClassic, axiosWithAuth} from '../api/api.interceptors'
import {API_URL} from '../config/api.config'
import {IStyles, IStylesInput} from '../types/styles.interface'

class StylesService {
	async getAll() {
		const {data} = await axiosClassic<IStyles>({
			url: API_URL.dressStyles(),
			method: 'GET',
		})

		return data
	}

	async getById(id: string) {
		const {data} = await axiosClassic<IStyles>({
			url: API_URL.dressStyles(`/by-id/${id}`),
			method: 'GET',
		})

		return data
	}

	async create(data: IStylesInput, storeId: string) {
		const {data: createdStyles} = await axiosWithAuth<IStyles>({
			url: API_URL.dressStyles(`/${storeId}`),
			method: 'POST',
			data,
		})

		return createdStyles
	}

	async update(id: string, data: IStylesInput) {
		const {data: updatedStyles} = await axiosWithAuth<IStyles>({
			url: API_URL.dressStyles(`/${id}`),
			method: 'PUT',
			data,
		})

		return updatedStyles
	}

	async delete(id: string) {
		const {data: deletedStyles} = await axiosWithAuth<IStyles>({
			url: API_URL.dressStyles(`/${id}`),
			method: 'DELETE',
		})

		return deletedStyles
	}
}

export const stylesService = new StylesService()
