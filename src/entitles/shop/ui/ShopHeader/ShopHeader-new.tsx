import {Sort} from '@/entitles/sort'
import {useFilters} from '@/shared/hooks/useFilters'
import styles from './ShopHeader.module.scss'

export const ShopHeader = () => {
	const {queryParams} = useFilters()
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				{queryParams.gender?.toString() === 'female'
					? "Women's Clothing"
					: "Men's Clothing"}
			</h2>

			<div className={styles.sortContainer}>
				<Sort />
			</div>
		</div>
	)
}
