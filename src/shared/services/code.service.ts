import {ICategory} from '@/shared/types/category.interface'
import {axiosWithAuth} from '../api/api.interceptors'
import {API_URL} from '../config/api.config'

class CodeService {
	async checkout(code: string) {
		const {data} = await axiosWithAuth<ICategory>({
			url: API_URL.codes(`by-code/${code}`),
			method: 'GET',
		})

		return data
	}
}

export const codeService = new CodeService()
