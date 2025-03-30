import {codeService} from '@/shared/services/code.service'
import {useCodeStore} from '@/shared/store/code.store'
import {IApiError} from '@/shared/types/api.error'
import {
	ICodeForm,
	ICodeResponse,
	UseCodeFormReturn,
} from '@/shared/types/code.interface'
import {useMutation} from '@tanstack/react-query'
import {useForm} from 'react-hook-form'
import toast from 'react-hot-toast'

export const useCodeForm = (): UseCodeFormReturn => {
	const form = useForm<ICodeForm>({
		mode: 'onChange',
		defaultValues: {
			code: '',
		},
	})

	const {mutate, isPending, data, error, isSuccess} = useMutation<
		ICodeResponse,
		IApiError,
		ICodeForm
	>({
		mutationKey: ['code form'],
		mutationFn: (data: ICodeForm) => {
			return codeService.checkout(data.code) as Promise<ICodeResponse>
		},
		onSuccess(data) {
			form.reset()
			useCodeStore.getState().setCode(data)
			toast.success('Code applied successfully')
		},
		onError(error: IApiError) {
			if (error.response?.data?.message) {
				toast.error(error.response.data.message)
			} else {
				toast.error('Something went wrong')
			}
		},
	})

	const onSubmit = (values: ICodeForm): void => {
		mutate(values)
	}

	return {
		form,
		onSubmit,
		isPending,
		data: data || null,
		error: error || null,
		isSuccess,
	}
}
