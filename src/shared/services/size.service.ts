import {ISize, ISizeInput} from '@/shared/types/size.interface'
import {axiosClassic, axiosWithAuth} from '../api/api.interceptors'
import {API_URL} from '../config/api.config'

class SizeService {
	async getAll() {
		const {data: allSizes} = await axiosClassic<ISize>({
			url: API_URL.sizes(),
			method: 'GET',
		})

		return allSizes
	}

	async getById(id: string) {
		const {data} = await axiosWithAuth<ISize>({
			url: API_URL.sizes(`/by-id/${id}`),
			method: 'GET',
		})

		return data
	}

	async create(data: ISizeInput) {
		const {data: createdSize} = await axiosWithAuth<ISize>({
			url: API_URL.sizes(),
			method: 'POST',
			data,
		})

		return createdSize
	}

	async update(id: string, data: ISizeInput) {
		const {data: updatedSize} = await axiosWithAuth<ISize>({
			url: API_URL.sizes(`/${id}`),
			method: 'PUT',
			data,
		})

		return updatedSize
	}

	async delete(id: string) {
		const {data: deletedSize} = await axiosWithAuth<ISize>({
			url: API_URL.sizes(`/${id}`),
			method: 'DELETE',
		})

		return deletedSize
	}
}

export const sizeService = new SizeService()
