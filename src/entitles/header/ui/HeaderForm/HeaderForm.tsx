import {IoSearchOutline} from 'react-icons/io5'
import styles from './styles.module.scss'

export const HeaderForm = () => {
	return (
		<form className={styles.form}>
			<IoSearchOutline size={20} />
			<input type='text' placeholder='Search' className={styles.input} />
		</form>
	)
}
