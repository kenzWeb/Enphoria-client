import {BrandsContent, BrandsHeader} from '@/entitles/brands'
import styles from './styles.module.scss'
export const Brands = () => {
	return (
		<article className={styles.article}>
			<BrandsHeader />
			<BrandsContent />
		</article>
	)
}
