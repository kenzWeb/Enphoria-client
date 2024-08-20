import {Layout} from '@/providers'
import {Arrival} from '@/widgets/arrival'
import {Banner} from '@/widgets/banner'
import {Brands} from '@/widgets/brands'
import {Feedback} from '@/widgets/feedback'
import {HomeGallery, HomePresents} from '@/widgets/home'
import {Limelight} from '@/widgets/limelight'
import {Man} from '@/widgets/man'
import {Woman} from '@/widgets/woman'
import {Zone} from '@/widgets/zone'

export const Home = () => {
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
