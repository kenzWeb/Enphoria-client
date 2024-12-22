import {CategoryGroup, ColorsGroup, PriceGroup} from '@/entitles/filters'
import styles from './Sidebar.module.scss'

export const Sidebar = () => {
	return (
		<aside className={styles.wrapper}>
			<CategoryGroup />
			<PriceGroup />
			<ColorsGroup />
		</aside>
	)
}
