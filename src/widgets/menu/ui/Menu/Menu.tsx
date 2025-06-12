import {MenuBar, MenuHeading} from '@/features/menu'
import {menuItems} from '../../constants'
import styles from './Menu.module.scss'

interface MenuProps {
	onItemClick?: () => void
}

export const Menu = ({onItemClick}: MenuProps) => {
	return (
		<aside className={styles.menu}>
			<MenuHeading />
			<MenuBar menuItems={menuItems} onItemClick={onItemClick} />
		</aside>
	)
}
