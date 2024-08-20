import {FC} from 'react'
import styles from './styles.module.scss'

export const FooterCopy: FC = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
			</h2>
		</div>
	)
}
