import styles from './ShoppingCartCodeHeader.module.scss'

export const ShoppingCartCodeHeader = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Discount Codes</h2>
			<p className={styles.subtitle}>Enter your coupon code if you have one</p>
		</div>
	)
}
