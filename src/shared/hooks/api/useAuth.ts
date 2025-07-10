import {
	getAccessToken,
	removeFromStorage,
} from '@/shared/services/auth/auth-token.service'
import {authService} from '@/shared/services/auth/auth.service'
import {useAuthStore} from '@/shared/store/auth.store'
import {IApiError} from '@/shared/types/api.error'
import {IAuthForm} from '@/shared/types/auth.interface'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {useEffect} from 'react'
import toast from 'react-hot-toast'

export function useAuth() {
	const {isAuth, setAuth} = useAuthStore()
	const queryClient = useQueryClient()

	const {data: authCheck, isLoading: isCheckingAuth} = useQuery({
		queryKey: ['auth-check'],
		queryFn: () => authService.checkRefreshToken(),
		enabled: !!getAccessToken() && !isAuth,
		retry: false,
		staleTime: Infinity,
	})

	useEffect(() => {
		const token = getAccessToken()
		if (token && !isAuth) {
			if (authCheck?.data.authenticated) {
				setAuth(true)
			} else if (authCheck && !authCheck.data.authenticated) {
				removeFromStorage()
				setAuth(false)
			}
		} else if (!token && isAuth) {
			setAuth(false)
		}
	}, [authCheck, isAuth, setAuth])

	const loginMutation = useMutation({
		mutationFn: (data: IAuthForm) => authService.main('login', data),
		onSuccess: () => {
			setAuth(true)
			queryClient.invalidateQueries({queryKey: ['profile']})
			toast.success('Successfully logged in')
		},
		onError(error: IApiError) {
			if (error.response?.data?.message) {
				toast.error(error.response.data.message)
			} else {
				toast.error('Something went wrong')
			}
		},
	})

	const registerMutation = useMutation({
		mutationFn: (data: IAuthForm) => authService.main('register', data),
		onSuccess: () => {
			setAuth(true)
			queryClient.invalidateQueries({queryKey: ['profile']})
			toast.success('Successfully registered')
		},
		onError(error: IApiError) {
			if (error.response?.data?.message) {
				toast.error(error.response.data.message)
			} else {
				toast.error('Something went wrong')
			}
		},
	})

	const logoutMutation = useMutation({
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			setAuth(false)
			queryClient.clear()
		},
		onError: () => {
			setAuth(false)
			removeFromStorage()
			queryClient.clear()
		},
	})

	const login = (data: IAuthForm) => {
		return new Promise((resolve, reject) => {
			loginMutation.mutate(data, {
				onSuccess: resolve,
				onError: reject,
			})
		})
	}

	const register = (data: IAuthForm) => {
		return new Promise((resolve, reject) => {
			registerMutation.mutate(data, {
				onSuccess: resolve,
				onError: reject,
			})
		})
	}

	const logout = () => {
		return new Promise((resolve) => {
			logoutMutation.mutate(undefined, {
				onSuccess: resolve,
				onError: resolve, // Разрешаем даже при ошибке, так как локальная сессия всё равно очищается
			})
		})
	}

	return {
		isAuth,
		isCheckingAuth,
		isLoading:
			loginMutation.isPending ||
			registerMutation.isPending ||
			logoutMutation.isPending,
		login,
		register,
		logout,
		loginError: loginMutation.error,
		registerError: registerMutation.error,
	}
}
