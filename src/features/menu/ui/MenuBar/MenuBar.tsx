import {FC} from 'react'
import {MenuBarItem} from '@/entitles/menu'
import {MenuBarProps} from '../../types'
import styles from './MenuBar.module.scss'

export const MenuBar: FC<MenuBarProps> = ({menuItems}) => {
	return (
		<nav className={styles.wrapper}>
			{menuItems.map((item) => (
				<MenuBarItem key={item.id} item={item} />
			))}
		</nav>
	)
}
