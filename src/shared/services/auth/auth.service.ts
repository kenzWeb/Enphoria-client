import {axiosClassic} from '@/shared/api/api.interceptors'
import {API_URL} from '@/shared/config/api.config'
import {IAuthForm, IAuthResponse, ICheckAuth} from '@/shared/types/auth.interface'
import {removeFromStorage, saveTokenStorage} from './auth-token.service'

class AuthService {
	async main(type: 'login' | 'register', data: IAuthForm) {
		const response = await axiosClassic<IAuthResponse>({
			url: API_URL.auth(`${type}`),
			method: 'POST',
			data,
		})

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	}

	async getNewTokens() {
		const response = await axiosClassic<IAuthResponse>({
			url: API_URL.auth('login/access-token'),
			method: 'POST',
		})

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	}

	async logout() {
		const response = await axiosClassic<IAuthResponse>({
			url: API_URL.auth('logout'),
		})

		if (response.data) removeFromStorage()

		return response
	}

	async checkRefreshToken() {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const response = await axiosClassic<ICheckAuth>({
			url: API_URL.auth('check'),
			method: 'GET',
		})

		return response
	}
}

export const authService = new AuthService()
