import {IArrival} from '../../model/types'
import styles from './styles.module.scss'

export const ArrivalSlide = ({title, img}: IArrival) => {
	return (
		<div className={styles.container}>
			<img className={styles.img} src={img} alt={title} loading='lazy' />
			<h2 className={styles.title}>{title}</h2>
		</div>
	)
}
