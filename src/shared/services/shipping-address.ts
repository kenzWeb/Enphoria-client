import {axiosWithAuth} from '../api/api.interceptors'
import {API_URL} from '../config/api.config'
import {IShippingAddress} from '../types/shipping-address.interface'

class ShippingAddress {
	async getShippingAddress() {
		const {data} = await axiosWithAuth({
			url: API_URL.shipping(),
			method: 'GET',
		})
		return data
	}

	async createShippingAddress(data: IShippingAddress) {
		const {data: response} = await axiosWithAuth({
			url: API_URL.shipping(),
			method: 'POST',
			data,
		})
		return response
	}

	async deleteShippingAddress(id: string) {
		const {data: response} = await axiosWithAuth({
			url: API_URL.shipping(`/${id}`),
			method: 'DELETE',
			data: {id},
		})
		return response
	}
}

export const shippingAddressService = new ShippingAddress()
