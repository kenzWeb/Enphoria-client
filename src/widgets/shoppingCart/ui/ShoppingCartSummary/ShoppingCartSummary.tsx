import {ShoppingCartCheckout, ShoppingCartCode} from '@/features/shoppingCart'
import styles from './ShoppingCartSummary.module.scss'

export const ShoppingCartSummary = () => {
	return (
		<div className={styles.wrapper}>
			<div className='container'>
				<section className={styles.container}>
					<ShoppingCartCode />
					<ShoppingCartCheckout />
				</section>
			</div>
		</div>
	)
}
