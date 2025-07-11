import { PUBLIC_URL } from '@/shared/config/url.config'
import { Button } from '@/shared/shad-cn/ui/index'
import { useNavigate } from 'react-router-dom'
import styles from './BackButton.module.scss'
import ArrowLeftIcon from '/img/icons/arrow-left.svg'

export const BackButton = () => {
	const navigate = useNavigate()

	const handleGoBack = () => {
		navigate(PUBLIC_URL.account('orders'))
	}

	return (
		<Button
			variant='nav'
			size='icon'
			className={styles.backButton}
			onClick={handleGoBack}
		>
			<img src={ArrowLeftIcon} alt='Back' width='5' height='10' />
		</Button>
	)
}
