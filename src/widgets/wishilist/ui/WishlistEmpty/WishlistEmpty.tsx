import {Button} from '@/shared/shad-cn/ui/index'
import {useNavigate} from 'react-router-dom'
import styles from './WishlistEmpty.module.scss'

export const WishlistEmpty = () => {
	const router = useNavigate()

	return (
		<div className={styles.wrapper}>
			<img className={styles.icon} src='/img/icons/heartGreen.svg' alt='' />

			<h2 className={styles.title}>Your wishlist is empty.</h2>
			<h3 className={styles.subtitle}>
				You don’t have any products in the wishlist yet. You will find a lot of
				interesting products on our Shop page.
			</h3>

			<Button
				onClick={() => router('/shop')}
				className={styles.button}
				size={'lg'}
				variant={'primary'}
			>
				Continue Shopping
			</Button>
		</div>
	)
}
