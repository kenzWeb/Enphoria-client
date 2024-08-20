import {Footer} from '@/widgets/footer'
import {Header} from '@/widgets/header'

export const Layout = ({children}: {children: React.ReactNode}) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
