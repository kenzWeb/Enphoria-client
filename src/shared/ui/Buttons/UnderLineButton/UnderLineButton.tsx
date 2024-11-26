import React from 'react'
import styles from './styles.module.scss'

export const UnderLineButton = ({children}: {children: React.ReactNode}) => {
	return (
		<div>
			<button className={styles.button}>{children}</button>
		</div>
	)
}

