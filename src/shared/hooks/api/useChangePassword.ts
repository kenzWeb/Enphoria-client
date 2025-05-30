import {userService} from '@/shared/services/user.service'
import {IApiError} from '@/shared/types/api.error'
import {IPasswordChangeForm} from '@/shared/types/user.interface'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {useForm} from 'react-hook-form'
import toast from 'react-hot-toast'

export const useChangePassword = () => {
	const queryClient = useQueryClient()

	const form = useForm<IPasswordChangeForm>({
		mode: 'onChange',
		defaultValues: {
			oldPassword: '',
			newPassword: '',
			confirmPassword: '',
		},
	})

	const {mutateAsync: changePassword, isPending} = useMutation({
		mutationFn: async (data: {oldPassword: string; newPassword: string}) => {
			return userService.changePassword(data)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['profile']})
			toast.success('Password changed successfully', {
				duration: 3000,
				position: 'top-right',
				style: {
					background: '#333',
					color: '#fff',
					borderRadius: '8px',
					padding: '12px 16px',
					fontSize: '14px',
				},
			})
		},
		onError: (error: IApiError) => {
			throw error
		},
	})

	const onSubmit = async (data: {oldPassword: string; newPassword: string}) => {
		return changePassword(data)
	}

	return {
		changePassword,
		onSubmit,
		form,
		isPending,
	}
}
