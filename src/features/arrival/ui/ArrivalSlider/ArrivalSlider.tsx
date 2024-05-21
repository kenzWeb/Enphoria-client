import {ArrivalSlide} from '@/entitles/arrival'
import {useGetArrivalsQuery} from '@/shared/store/api/arrivalApi'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import styles from './styles.module.scss'
import { breakpoints } from '@/shared/constants/breakpoints'

export const ArrivalSlider = () => {
	const {data} = useGetArrivalsQuery()

	return (
		<>
			<Swiper
				slidesPerView={4}
				spaceBetween={40}
				breakpoints={breakpoints}
				navigation={{
					nextEl: '.arrow-next',
					prevEl: '.arrow-prev',
				}}
				modules={[Navigation]}
				className={`mySwiper ${styles.slider}`}
			>
				{data?.map((item) => (
					<SwiperSlide key={item.id}>
						<ArrivalSlide title={item.title} img={item.img} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
