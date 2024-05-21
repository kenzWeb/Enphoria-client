import {HomeGallerySlider} from '@/features/home'
import styles from './styles.module.scss'

export const HomeGallery = () => {
	return (
		<section className={styles.section}>
			<HomeGallerySlider />
		</section>
	)
}
