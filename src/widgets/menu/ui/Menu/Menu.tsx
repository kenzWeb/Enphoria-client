import {MenuBar, MenuHeading} from '@/features/menu'
import styles from './Menu.module.scss'

export const Menu = () => {
	return (
		<aside className={styles.menu}>
			<MenuHeading />
			<MenuBar />
		</aside>
	)
}
