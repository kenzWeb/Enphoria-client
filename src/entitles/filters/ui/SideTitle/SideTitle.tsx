import styles from './SideTitle.module.scss'

export const SideTitle = () => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Filter</h2>
			<img
				className={styles.img}
				src='/img/icons/filter.svg'
				alt='filterTitle'
			/>
		</div>
	)
}
