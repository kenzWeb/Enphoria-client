import {
	CategoryGroup,
	ColorsGroup,
	PriceGroup,
	SizesGroup,
	StylesGroup,
} from '@/entitles/filters'
import styles from './Sidebar.module.scss'

export const Sidebar = () => {
	return (
		<aside className={styles.wrapper}>
			<CategoryGroup />
			<PriceGroup />
			<ColorsGroup />
			<SizesGroup />
			<StylesGroup />
		</aside>
	)
}
