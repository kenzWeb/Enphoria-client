import HomeGalleryButton from '@/shared/ui/Home/HomeGalleryButton/HomeGalleryButton'
import 'swiper/css'
import styles from './styles.module.scss'

export const HomeGallerySlide = () => {
	return (
		<div className={styles.slide}>
			<div className={styles.info}>
				<h2 className={styles.title}>T-shirt / Tops</h2>
				<h3 className={styles.subtitle}>
					Summer <br /> Value Pack
				</h3>
				<h4 className={styles.description}>cool / colorful / comfy</h4>

				<HomeGalleryButton>Shop now</HomeGalleryButton>
			</div>
		</div>
	)
}
