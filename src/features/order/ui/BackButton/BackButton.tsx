import {PUBLIC_URL} from '@/shared/config/url.config'
import {useNavigate} from 'react-router-dom'
import styles from './BackButton.module.scss'

export const BackButton = () => {
	const navigate = useNavigate()

	const handleGoBack = () => {
		navigate(PUBLIC_URL.account('orders'))
	}

	return (
		<button className={styles.backButton} onClick={handleGoBack}>
			<svg width='5' height='10' viewBox='0 0 5 10' fill='none'>
				<path
					d='M4.33337 1.66683L1.66671 5.00016L4.33337 8.3335'
					stroke='#3C4242'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</button>
	)
}
