import {useAuth} from '@/shared/hooks/api/useAuth'
import {Loader} from '@/shared/ui/Other'
import {useEffect} from 'react'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

export const SignOutPage = () => {
	const {logout} = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		const handleSignOut = async () => {
			await logout()

			toast.success('Вы успешно вышли из аккаунта', {
				duration: 2000,
				position: 'top-right',
			})

			setTimeout(() => {
				navigate('/', {replace: true})
			}, 100)
		}

		handleSignOut()
	}, [logout, navigate])

	return (
		<div className='w-full h-screen flex flex-col items-center justify-center bg-gray-50'>
			<div className='text-center'>
				<Loader />
				<p className='mt-4 text-lg text-gray-600 font-medium'>
					Выход из аккаунта...
				</p>
				<p className='mt-2 text-sm text-gray-500'>Пожалуйста, подождите</p>
			</div>
		</div>
	)
}
