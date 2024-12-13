import {IProductInput} from '@/shared/types/product.interface'
import {axiosClassic, axiosWithAuth} from '../api/api.interceptors'
import {API_URL} from '../config/api.config'
import {IZone} from '../types/zone.interface'

class ZoneService {
	async getAll() {
		const {data} = await axiosClassic<IZone[]>({
			url: API_URL.zone(),
			method: 'GET',
		})

		return data
	}

	async getById(id: string) {
		const {data} = await axiosClassic<IZone>({
			url: API_URL.zone(`by-id/${id}`),
			method: 'GET',
		})

		return data
	}

	async create(data: IProductInput, storeId: string) {
		const {data: createdZone} = await axiosWithAuth<IZone[]>({
			url: API_URL.zone(`${storeId}`),
			method: 'POST',
			data,
		})

		return createdZone
	}

	async update(id: string, data: IProductInput) {
		const {data: updatedZone} = await axiosWithAuth<IZone>({
			url: API_URL.zone(`${id}`),
			method: 'PUT',
			data,
		})

		return updatedZone
	}

	async delete(id: string) {
		const {data: deletedZone} = await axiosWithAuth<IZone>({
			url: API_URL.zone(`${id}`),
			method: 'DELETE',
		})

		return deletedZone
	}
}

export const zoneService = new ZoneService()
