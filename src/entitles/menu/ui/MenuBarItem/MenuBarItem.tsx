import {PUBLIC_URL} from '@/shared/config/url.config'
import {cn} from '@/shared/lib/utils'
import {FC} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {MenuBarItemProps} from '../../types'
import styles from './MenuBarItem.module.scss'

export const MenuBarItem: FC<MenuBarItemProps> = ({item}) => {
	const location = useLocation()

	const isActive = () => {
		if (item.route === PUBLIC_URL.account('profile')) {
			return (
				location.pathname === PUBLIC_URL.account('profile') ||
				location.pathname === PUBLIC_URL.account('add-address')
			)
		}
		return location.pathname === item.route
	}

	return (
		<div
			className={cn(styles.container, {
				[styles.active]: isActive(),
			})}
		>
			<Link to={item.route} className={styles.wrapper}>
				<img className={styles.icon} src={item.icon ?? ''} alt={item.label} />

				<h2 className={styles.label}>{item.label}</h2>
			</Link>
		</div>
	)
}
