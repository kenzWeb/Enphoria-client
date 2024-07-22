import {Arrival} from '@/widgets/arrival'
import {Banner} from '@/widgets/banner'
import {Header} from '@/widgets/header'
import {HomeGallery} from '@/widgets/home'
import {HomePresents} from '@/widgets/home/ui/HomePresents/HomePresents'
import {Man} from '@/widgets/man'
import {Zone} from '@/widgets/zone'

export const Home = () => {
	return (
		<>
			<div className='container'>
				<Header />
			</div>
			<HomeGallery />
			<div className='container'>
				<HomePresents />
				<Arrival />
				<Zone />
				<Banner />
				<Man />
			</div>
		</>
	)
}
