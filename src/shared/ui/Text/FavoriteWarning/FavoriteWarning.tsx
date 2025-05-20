import {PUBLIC_URL} from '@/shared/config/url.config'
import {Link} from 'react-router-dom'
import styles from './styles.module.scss'

export const CartWarning = () => {
	return (
		<>
			<h2 className={styles.title}>
				Please fill in the fields below and click place order to complete your
				purchase!
			</h2>
			<h3 className={styles.login}>
				Already registered?{' '}
				<Link to={PUBLIC_URL.auth()}>Please login here</Link>
			</h3>
		</>
	)
}
