import {TokenHandler} from '@/app/providers/auth'
import {Loader} from '@/shared/ui/Other'
import {Footer} from '@/widgets/footer'
import {Header} from '@/widgets/header'
import {useEffect} from 'react'
import {Outlet, useLocation, useNavigation} from 'react-router-dom'

export const MainLayout = () => {
	const navigation = useNavigation()
	const location = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])

	return (
		<>
			<TokenHandler />
			<Header />
			{navigation.state === 'loading' && <Loader />}
			<Outlet />
			<Footer />
		</>
	)
}
