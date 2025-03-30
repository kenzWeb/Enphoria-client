import {axiosWithAuth} from '../api/api.interceptors'
import {API_URL} from '../config/api.config'
import {ICodeForm} from '../types/code.interface'

class CodeService {
	async checkout(code: string) {
		const {data} = await axiosWithAuth<ICodeForm>({
			url: API_URL.codes(`by-code/${code}`),
			method: 'GET',
		})

		return data
	}
}

export const codeService = new CodeService()
