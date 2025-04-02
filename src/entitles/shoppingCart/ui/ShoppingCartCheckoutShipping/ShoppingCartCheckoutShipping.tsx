import styles from './ShoppingCartCheckoutShipping.module.scss'

export const ShoppingCartCheckoutShipping = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Shipping</h2>
			<span className={styles.element}>$5.00</span>
		</div>
	)
}
