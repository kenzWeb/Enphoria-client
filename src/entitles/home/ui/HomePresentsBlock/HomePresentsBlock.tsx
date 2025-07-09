import {Link} from 'react-router-dom'

import {UnderLineButton} from '@/shared/ui/Buttons'
import styles from './styles.module.scss'

type Props = {
	title: string
	subtitle: string
	text: string
	img: string
}

export const HomePresentsBlock = ({title, subtitle, text, img}: Props) => {
	return (
		<>
			<aside
				className={`${styles.aside}`}
				style={{backgroundImage: `url(${img})`}}
			>
				<div className={styles.content}>
					<h2 className={styles.title}>{title}</h2>
					<h3 className={styles.subtitle}>{subtitle}</h3>
					<h4 className={styles.text}>{text}</h4>

					<Link to={'/account/wishlist'}>
						<UnderLineButton>Explore Items</UnderLineButton>
					</Link>
				</div>
			</aside>
		</>
	)
}
