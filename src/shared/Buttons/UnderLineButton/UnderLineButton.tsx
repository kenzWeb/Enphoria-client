import React from 'react'
import styles from './styles.module.scss'

const UnderLineButton = ({children}: {children: React.ReactNode}) => {
	return (
		<div>
			<button className={styles.button}>{children}</button>
		</div>
	)
}

export default UnderLineButton
