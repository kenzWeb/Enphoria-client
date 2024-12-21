import {useMutation} from '@tanstack/react-query'
import {SubmitHandler, useForm} from 'react-hook-form'
import toast from 'react-hot-toast'

import {PUBLIC_URL} from '@/shared/config/url.config'
import {authService} from '@/shared/services/auth/auth.service'
import {IAuthForm} from '@/shared/types/auth.interface'
import {useNavigate} from 'react-router-dom'

export function useAuthForm(isReg: boolean) {
	const navigate = useNavigate()

	const form = useForm<IAuthForm>({
		mode: 'onChange',
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	})

	const {mutate, isPending} = useMutation({
		mutationKey: ['auth user'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isReg ? 'register' : 'login', data),
		onSuccess() {
			toast.success('Successfully logged in')
			form.reset()
			navigate(PUBLIC_URL.home())
		},
		onError(error) {
			if (error instanceof Error) {
				toast.error(error.message)
			} else {
				toast.error('Something went wrong')
			}
		},
	})

	const onSubmit: SubmitHandler<IAuthForm> = (data) => {
		mutate(data)
	}

	return {onSubmit, form, isPending}
}
