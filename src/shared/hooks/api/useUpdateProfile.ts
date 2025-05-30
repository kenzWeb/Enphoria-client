import {userService} from '@/shared/services/user.service'
import {IApiError} from '@/shared/types/api.error'
import {IUserUpdate} from '@/shared/types/user.interface'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import {useForm} from 'react-hook-form'
import toast from 'react-hot-toast'

export const useUpdateProfile = () => {
	const queryClient = useQueryClient()

	const form = useForm<IUserUpdate>({
		mode: 'onChange',
		defaultValues: {
			name: '',
			email: '',
			picture: '',
		},
	})

	const {mutate: updateProfile, isPending} = useMutation({
		mutationFn: async (data: Partial<IUserUpdate>) => {
			return userService.updateProfile(data)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: ['profile']})
			toast.success('Profile updated successfully', {
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
			if (error.response?.data?.message) {
				toast.error(error.response.data.message, {
					duration: 3000,
					position: 'top-right',
					style: {
						background: '#f44336',
						color: '#fff',
						borderRadius: '8px',
						padding: '12px 16px',
						fontSize: '14px',
					},
				})
				return
			} else {
				toast.error('Something went wrong', {
					duration: 3000,
					position: 'top-right',
					style: {
						background: '#f44336',
						color: '#fff',
						borderRadius: '8px',
						padding: '12px 16px',
						fontSize: '14px',
					},
				})
			}
		},
	})

	const onSubmit = (data: Partial<IUserUpdate>) => {
		updateProfile(data)
	}

	return {
		updateProfile,
		onSubmit,
		form,
		isPending,
	}
}
