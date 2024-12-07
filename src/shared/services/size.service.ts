import {IColor, IColorInput} from '@/shared/types/color.interface'
import {axiosClassic, axiosWithAuth} from '../api/api.interceptors'
import {API_URL} from '../config/api.config'

class ColorService {
	async getAll() {
		const {data: allSizes} = await axiosClassic<IColor>({
			url: API_URL.sizes(),
			method: 'ET',
		})

		return allSizes
	}

	async getById(id: string) {
		const {data} = await axiosWithAuth<IColor>({
			url: API_URL.sizes(`/by-id/${id}`),
			method: 'GET',
		})

		return data
	}

	async create(data: IColorInput) {
		const {data: createdColor} = await axiosWithAuth<IColor>({
			url: API_URL.sizes(),
			method: 'POST',
			data,
		})

		return createdColor
	}

	async update(id: string, data: IColorInput) {
		const {data: updatedColor} = await axiosWithAuth<IColor>({
			url: API_URL.sizes(`/${id}`),
			method: 'PUT',
			data,
		})

		return updatedColor
	}

	async delete(id: string) {
		const {data: deletedColor} = await axiosWithAuth<IColor>({
			url: API_URL.sizes(`/${id}`),
			method: 'DELETE',
		})

		return deletedColor
	}
}

export const colorService = new ColorService()
