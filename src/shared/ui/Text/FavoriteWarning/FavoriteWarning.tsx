import styles from './styles.module.scss'

export const FavoriteWarning = () => {
	return (
		<>
			<h2 className={styles.title}>
				Please fill in the fields below and click place order to complete your
				purchase!
			</h2>
			<h3 className={styles.login}>
				Already registered? <span>Please login here</span>
			</h3>
		</>
	)
}
