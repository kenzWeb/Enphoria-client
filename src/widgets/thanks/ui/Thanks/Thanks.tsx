import { Button } from '@/shared/shad-cn/ui/index'
import { Link } from 'react-router-dom'
import styles from './Thanks.module.scss'

export const Thanks = () => {
	return (
		<div className={styles.wrapper}>
			<img className={styles.img} src='/img/icons/thanks.svg' alt='thanks' />

			<div className={styles.box}>
				<div className={styles.icon}>
					<img src='/img/icons/thanks-arrow.svg' alt='thanks' />
				</div>

				<div className={styles.text}>
					<h2>Your Order is Confirmed</h2>
					<Link to='/shop'>
						<Button size='lg' variant='primary'>
							Continue Shopping
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
