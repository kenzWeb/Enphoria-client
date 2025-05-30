import {useAuth} from '@/shared/hooks/api/useAuth'
import {Loader} from '@/shared/ui/Other'
import {useEffect} from 'react'

interface AuthInitializerProps {
	children: React.ReactNode
}

export const AuthInitializer = ({children}: AuthInitializerProps) => {
	const {isCheckingAuth} = useAuth()

	useEffect(() => {}, [])

	if (isCheckingAuth) {
		return (
			<div className='w-full h-full flex items-center justify-center'>
				<Loader />
			</div>
		)
	}

	return <>{children}</>
}
