import {IoSearchOutline} from 'react-icons/io5'
import styles from './styles.module.scss'

const HeaderForm = () => {
	return (
		<form className={styles.form}>
			<IoSearchOutline size={20} />
			<input type='text' placeholder='Search' className={styles.input} />
		</form>
	)
}

export default HeaderForm
