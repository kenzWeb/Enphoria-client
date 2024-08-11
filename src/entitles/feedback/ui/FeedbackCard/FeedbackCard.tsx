import styles from './styles.module.scss'

type Props = {
	img: string
	title: string
	subtitle: string
	// starsValue?: number
}

export const FeedbackCard = ({img, title, subtitle}: Props) => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<img className={styles.img} src={img} alt='feedback' />
					<h3 className={styles.title}>{title}</h3>
					<h4 className={styles.subtitle}>{subtitle}</h4>
				</div>
				{/* <Rating
					name='read-only'
					value={starsValue}
					readOnly
					size='medium'
					className={styles.rating}
				/> */}
			</div>
		</>
	)
}
