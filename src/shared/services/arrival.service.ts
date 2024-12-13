import {IProductInput} from '@/shared/types/product.interface'
import {axiosClassic, axiosWithAuth} from '../api/api.interceptors'
import {API_URL} from '../config/api.config'
import {IArrival} from '../types/arrival.interface'

class ArrivalService {
	async getAll() {
		const {data} = await axiosClassic<IArrival[]>({
			url: API_URL.arrival(),
			method: 'GET',
		})

		return data
	}

	async getById(id: string) {
		const {data} = await axiosClassic<IArrival>({
			url: API_URL.arrival(`by-id/${id}`),
			method: 'GET',
		})

		return data
	}

	async create(data: IProductInput, storeId: string) {
		const {data: createdArrival} = await axiosWithAuth<IArrival[]>({
			url: API_URL.arrival(`${storeId}`),
			method: 'POST',
			data,
		})

		return createdArrival
	}

	async update(id: string, data: IProductInput) {
		const {data: updatedArrival} = await axiosWithAuth<IArrival>({
			url: API_URL.arrival(`${id}`),
			method: 'PUT',
			data,
		})

		return updatedArrival
	}

	async delete(id: string) {
		const {data: deletedArrival} = await axiosWithAuth<IArrival>({
			url: API_URL.arrival(`${id}`),
			method: 'DELETE',
		})

		return deletedArrival
	}
}

export const arrivalService = new ArrivalService()
