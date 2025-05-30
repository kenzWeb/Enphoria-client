import {FC} from 'react'
import styles from './MobileFooter.module.scss'

export const MobileFooter: FC = () => {
	return (
		<div className={styles.mobileFooter}>
			<p className={styles.footerText}>© 2024 Euphoria. All rights reserved.</p>
		</div>
	)
}
