import {BannerCards} from '@/entitles/banner'
import styles from './styles.module.scss'

export const Banner = () => {
	return (
		<section className={styles.section}>
			<BannerCards />
		</section>
	)
}
