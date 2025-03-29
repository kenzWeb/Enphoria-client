import {codeService} from '@/shared/services/code.service'
import {IApiError} from '@/shared/types/api.error'
import {ICodeForm} from '@/shared/types/code.interface'
import {useMutation} from '@tanstack/react-query'
import {useForm} from 'react-hook-form'
import toast from 'react-hot-toast'

export const useCodeForm = () => {
	const form = useForm<ICodeForm>({
		mode: 'onChange',
		defaultValues: {
			code: '',
		},
	})

	const {mutate, isPending} = useMutation({
		mutationKey: ['code form'],
		mutationFn: (data: ICodeForm) => {
			const response = codeService.checkout(data.code)
			return response
		},
		onSuccess() {
			form.reset()
			toast.success('Code applied successfully')
		},
		onError(error: unknown) {
			const axiosError = error as IApiError

			if (axiosError.response?.data?.message) {
				toast.error(axiosError.response.data.message)
			} else {
				toast.error('Something went wrong')
			}
		},
	})

	const onSubmit = (values: ICodeForm) => {
		mutate(values)
	}

	return {form, onSubmit, isPending}
}
