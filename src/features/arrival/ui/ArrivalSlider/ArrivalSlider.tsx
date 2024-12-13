import {ArrivalSlide} from '@/entitles/arrival'
import {SERVER_URL} from '@/shared/config/private.config'
import {breakpoints} from '@/shared/constants/breakpoints'
import {useGetAllArrival} from '@/shared/queries/arrival/useGetArrival'
import {Skeleton} from '@/shared/shad-cn/ui/skeleton'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import styles from './styles.module.scss'

export const ArrivalSlider = () => {
	const {arrival, isLoading} = useGetAllArrival()

	if (isLoading) {
		return (
			<>
				<div className='flex justify-between'>
					{Array.from({length: 4}).map((_, index) => (
						<div className='flex flex-col space-y-3' key={index}>
							<Skeleton className='h-[260px] w-[260px] rounded-xl' />
							<div className='space-y-2'>
								<Skeleton className='h-8 w-50' />
							</div>
						</div>
					))}
				</div>
			</>
		)
	}

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
				{arrival?.map((item) => (
					<SwiperSlide key={item.id}>
						<ArrivalSlide title={item.title} img={`${SERVER_URL}${item.img}`} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
