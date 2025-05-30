import {cn} from '@/shared/lib/utils'
import {FC} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {MenuBarItemProps} from '../../types'
import styles from './MenuBarItem.module.scss'

export const MenuBarItem: FC<MenuBarItemProps> = ({item}) => {
	const location = useLocation()

	return (
		<div
			className={cn(styles.container, {
				[styles.active]: location.pathname === item.route,
			})}
		>
			<Link to={item.route} className={styles.wrapper}>
				<img className={styles.icon} src={item.icon ?? ''} alt={item.label} />

				<h2 className={styles.label}>{item.label}</h2>
			</Link>
		</div>
	)
}
 