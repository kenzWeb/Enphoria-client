import {IShoppingCartCheckout} from '../../types'
import styles from './ShoppingCartCheckoutTop.module.scss'

export const ShoppingCartCheckoutTop = ({
	totalPrice,
}: IShoppingCartCheckout) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Sub Total</h2>
			<span className={styles.element}>${totalPrice}.00</span>
		</div>
	)
}
