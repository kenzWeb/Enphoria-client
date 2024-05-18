import React from 'react'
import styles from './styles.module.scss'

const HomeGalleryButton = ({children}: {children: React.ReactNode}) => {
	return (
		<>
			<div className={styles.divider}>
				<button className={styles.button}>{children}</button>
			</div>
		</>
	)
}

export default HomeGalleryButton
