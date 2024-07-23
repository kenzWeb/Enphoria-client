import {Arrival} from '@/widgets/arrival'
import {Banner} from '@/widgets/banner'
import {HomeGallery} from '@/widgets/home'
import {HomePresents} from '@/widgets/home/ui/HomePresents/HomePresents'
import {Layout} from '@/widgets/layouts'
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
				</div>
			</Layout>
		</>
	)
}
