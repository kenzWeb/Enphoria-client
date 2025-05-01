import {axiosWithAuth} from '../api/api.interceptors'
import {API_URL} from '../config/api.config'
import {IBillingForm} from '../types/billing.interface'

class BillingService {
	async checkBilling(data: IBillingForm, isSave?: boolean) {
		const {data: billing} = await axiosWithAuth({
			url: API_URL.billing('check'),
			method: 'POST',
			params: {
				isSave,
			},
			data,
		})

		return billing
	}
}

export const billingService = new BillingService()
