import {IShoppingCartCheckoutTopProps} from '../../types'
import styles from './ShoppingCartCheckoutTop.module.scss'

export const ShoppingCartCheckoutTop = ({
	totalPrice,
}: IShoppingCartCheckoutTopProps) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Subtotal</h2>
			<span className={styles.element}>${totalPrice}.00</span>
		</div>
	)
}
