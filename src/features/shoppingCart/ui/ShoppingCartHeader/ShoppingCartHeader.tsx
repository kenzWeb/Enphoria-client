import styles from './styles.module.scss'

export const ShoppingCartHeader = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<li>Product Details</li>
				<li>Price</li>
				<li>Quantity</li>
				<li>Shipping</li>
				<li>Subtotal</li>
				<li>Action</li>
			</div>
		</div>
	)
}
