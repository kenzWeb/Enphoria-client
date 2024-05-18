import Header from '../../widgets/Header/Header'
import HomeGallery from '../../widgets/Home/HomeGallery/HomeGallery'
import HomePresents from '../../widgets/Home/HomePresents/HomePresents'

export const Home = () => {
	return (
		<>
			<div className='container'>
				<Header />
			</div>
			<HomeGallery />
			<div className='container'>
				<HomePresents />
			</div>
		</>
	)
}
