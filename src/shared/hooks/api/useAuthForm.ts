import {SubmitHandler, useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

import {PUBLIC_URL} from '@/shared/config/url.config'
import {IAuthForm} from '@/shared/types/auth.interface'
import {useAuth} from './useAuth'

export function useAuthForm(isReg: boolean) {
	const navigate = useNavigate()
	const {login, register, isLoading} = useAuth()

	const form = useForm<IAuthForm>({
		mode: 'onChange',
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	})

	const onSubmit: SubmitHandler<IAuthForm> = async (data) => {
		try {
			if (isReg) {
				await register(data)
			} else {
				await login(data)
			}

			form.reset()
			navigate(PUBLIC_URL.home())
		} catch (error) {
			// Ошибки обрабатываются в хуке useAuth
			console.error('Auth error:', error)
		}
	}

	return {onSubmit, form, isPending: isLoading}
}
