import {Arrival} from '@/widgets/arrival'
import {Header} from '@/widgets/header'
import {HomeGallery} from '@/widgets/home'
import {HomePresents} from '@/widgets/home/ui/HomePresents/HomePresents'

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
			</div>
		</>
	)
}
