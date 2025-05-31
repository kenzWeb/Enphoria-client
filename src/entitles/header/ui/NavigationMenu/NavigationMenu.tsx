import {FC} from 'react'
import {Link} from 'react-router-dom'
import {NavigationMenuProps} from '../../types'
import styles from './NavigationMenu.module.scss'

export const NavigationMenu: FC<NavigationMenuProps> = ({
	items,
	isMobile,
	onItemClick,
}) => {
	return (
		<div className={styles.menuContent}>
			<ul className={styles.list}>
				{items.map((item, index) => (
					<li key={item.label} className={styles.listItem}>
						<Link
							to={item.to}
							onClick={onItemClick}
							className={styles.link}
							style={{
								animationDelay: isMobile ? `${index * 0.1}s` : '0s',
							}}
						>
							{isMobile && <span className={styles.linkIcon}>{item.icon}</span>}
							<span className={styles.linkText}>{item.label}</span>
							{isMobile && <span className={styles.linkArrow}>→</span>}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
