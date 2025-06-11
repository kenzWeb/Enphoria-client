import {
	IOrder,
	IPaymentResponse,
	TypePaymentData,
} from '@/shared/types/order.interface'
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

	async getMyOrders() {
		return axiosWithAuth<IOrder[]>({
			url: API_URL.orders('my-orders'),
			method: 'GET',
		})
	}
}

export const orderService = new OrderService()
