import {FC} from 'react'
import styles from './styles.module.scss'

export const FooterPopular: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h2 className={styles.title}>Popular Categories</h2>

				<div className={styles.button}>
					<img
						className={styles.icon}
						src='img/icons/arrowFooter.svg'
						alt='arrow'
					/>
				</div>
			</div>
		</div>
	)
}
