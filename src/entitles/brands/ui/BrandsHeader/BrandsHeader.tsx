import styles from './styles.module.scss'

export const BrandsHeader = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Top Brands Deal</h1>
			<h3 className={styles.subtitle}>
				Up To <span>60%</span> off on brandss
			</h3>
		</div>
	)
}
