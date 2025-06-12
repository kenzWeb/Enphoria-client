import {MenuBarItem} from '@/entitles/menu'
import {FC} from 'react'
import {MenuBarProps} from '../../types'
import styles from './MenuBar.module.scss'

export const MenuBar: FC<MenuBarProps> = ({menuItems, onItemClick}) => {
	return (
		<nav className={styles.wrapper}>
			{menuItems.map((item) => (
				<MenuBarItem key={item.id} item={item} onItemClick={onItemClick} />
			))}
		</nav>
	)
}
