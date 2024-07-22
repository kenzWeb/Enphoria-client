import styles from './styles.module.scss'

export const BannerCards = () => {
	return (
		<>
			<div className={styles.left}>
				<div className={styles.content}>
					<h2 className={styles.title}>
						WE MADE YOUR EVERYDAY FASHION BETTER!
					</h2>
					<h3 className={styles.subtitle}>
						In our journey to improve everyday fashion, euphoria presents
						EVERYDAY wear range - Comfortable & Affordable fashion 24/7
					</h3>
					<button className={styles.button}>Shop now</button>
				</div>
			</div>

			<div className={styles.right}>
				<img className={styles.img} src='img/images/banner.jpg' alt='banner' />
			</div>
		</>
	)
}
