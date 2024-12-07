import {Layout} from '@/providers'
import {saveTokenStorage} from '@/shared/services/auth/auth-token.service'
import {Arrival} from '@/widgets/arrival'
import {Banner} from '@/widgets/banner'
import {Brands} from '@/widgets/brands'
import {Feedback} from '@/widgets/feedback'
import {HomeGallery, HomePresents} from '@/widgets/home'
import {Limelight} from '@/widgets/limelight'
import {Man} from '@/widgets/man'
import {Woman} from '@/widgets/woman'
import {Zone} from '@/widgets/zone'
import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

export const Home = () => {
	const location = useLocation()

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search)
		const token = queryParams.get('accessToken')
		if (token) {
			saveTokenStorage(token)
		}
	}, [location])
	return (
		<>
			<Layout>
				<HomeGallery />
				<div className='container'>
					<HomePresents />
					<Arrival />
					<Zone />
					<Banner />
					<Man />
					<Woman />
					<Brands />
					<Limelight />
					<Feedback />
				</div>
			</Layout>
		</>
	)
}
