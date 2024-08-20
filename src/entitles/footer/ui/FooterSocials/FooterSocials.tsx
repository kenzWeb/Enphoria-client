import {FC} from 'react'
import {Link} from 'react-router-dom'
import styles from './styles.module.scss'

export const FooterSocials: FC = () => {
	return (
		<div className={styles.container}>
			<ul className={styles.left}>
				{Array.from({length: 4}, (_, i) => (
					<Link key={i} to={`/`}>
						<li className={styles.item}>
							<img
								className={styles.img}
								src={`img/icons/socials/${i + 1}.svg`}
								alt=''
							/>
						</li>
					</Link>
				))}
			</ul>

			<div className={styles.right}>
				<h2 className={styles.title}>Download The App</h2>
				<ul className={styles.list}>
					<Link to={`/`}>
						<li className={styles.item}>
							<img
								className={styles.img}
								src='img/icons/app/google.svg'
								alt=''
							/>
						</li>
					</Link>
					<Link to={`/`}>
						<li className={styles.item}>
							<img
								className={styles.img}
								src='img/icons/app/appStore.svg'
								alt=''
							/>
						</li>
					</Link>
				</ul>
			</div>
		</div>
	)
}
