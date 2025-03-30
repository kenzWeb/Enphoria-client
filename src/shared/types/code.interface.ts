import {UseFormReturn} from 'react-hook-form'
import {IApiError} from './api.error'

export interface ICodeForm {
	code: string
}

export interface ICodeResponse extends ICodeForm {
	id: string
	value: number
	createdAt: string
	updatedAt: string
}

export interface UseCodeFormReturn {
	form: UseFormReturn<ICodeForm>
	onSubmit: (values: ICodeForm) => void
	isPending: boolean
	data: ICodeForm | null
	error: IApiError | null
	isSuccess: boolean
}

export interface CodeStore extends ICodeResponse {
	setCode: (codeData: ICodeResponse) => void
	reset: () => void
}