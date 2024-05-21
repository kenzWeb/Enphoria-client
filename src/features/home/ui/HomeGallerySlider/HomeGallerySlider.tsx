import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import {HomeGallerySlide} from '@/entitles/home'
import {pagination} from '@/shared/Slider/CustomPagination/CustomPagination'
import styles from './styles.module.scss'

export const HomeGallerySlider = () => {
	return (
		<Swiper
			style={{
				'--swiper-navigation-color': '#fff',
				'--swiper-pagination-color': '#fff',
			}}
			slidesPerView={1}
			spaceBetween={30}
			loop={true}
			pagination={pagination}
			navigation={true}
			modules={[Pagination, Navigation]}
			className={`mySwiper ${styles.slider}`}
		>
			<SwiperSlide>
				<HomeGallerySlide />
			</SwiperSlide>

			<SwiperSlide>
				<HomeGallerySlide />
			</SwiperSlide>
		</Swiper>
	)
}

export default HomeGallerySlider
