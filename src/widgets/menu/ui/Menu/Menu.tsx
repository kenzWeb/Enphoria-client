import {MenuBar, MenuHeading} from '@/features/menu'
import {menuItems} from '../../constants'
import styles from './Menu.module.scss'

export const Menu = () => {
	return (
		<aside className={styles.menu}>
			<MenuHeading />
			<MenuBar menuItems={menuItems} />
		</aside>
	)
}
