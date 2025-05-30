import {
	IUser,
	IUserChangePassword,
	IUserUpdate,
} from '@/shared/types/user.interface'
import {axiosWithAuth} from '../api/api.interceptors'
import {API_URL} from '../config/api.config'

class UserService {
	async getProfile() {
		const {data} = await axiosWithAuth<IUser>({
			url: API_URL.users('profile'),
			method: 'GET',
		})

		return data
	}

	async toggleFavorite(productId: string) {
		return axiosWithAuth<IUser>({
			url: API_URL.users(`profile/favorites/${productId}`),
			method: 'PATCH',
		})
	}

	async updateProfile(data: Partial<IUserUpdate>) {
		return axiosWithAuth<IUser>({
			url: API_URL.users('profile'),
			method: 'PATCH',
			data,
		})
	}

	async changePassword(data: {oldPassword: string; newPassword: string}) {
		return axiosWithAuth<IUserChangePassword>({
			url: API_URL.users('profile/password'),
			method: 'PATCH',
			data,
		})
	}
}

export const userService = new UserService()
