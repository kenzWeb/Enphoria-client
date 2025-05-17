import {IPaymentResponse, TypePaymentData} from '@/shared/types/order.interface'
import {axiosWithAuth} from '../api/api.interceptors'
import {API_URL} from '../config/api.config'

class OrderService {
	async create(data: TypePaymentData) {
		return axiosWithAuth<IPaymentResponse>({
			url: API_URL.orders('create'),
			method: 'POST',
			data,
		})
	}
}

export const orderService = new OrderService()
