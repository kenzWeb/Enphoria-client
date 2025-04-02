import {LoaderCircle} from 'lucide-react'
import React from 'react'
import styles from './Loader.module.scss'

const Loader: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<LoaderCircle color='#d24ece' size={40} />
		</div>
	)
}

export default Loader
