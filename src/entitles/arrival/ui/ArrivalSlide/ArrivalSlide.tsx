import {IArrival} from '../../model/types'
import styles from './styles.module.scss'

export const ArrivalSlide = ({title, img}: IArrival) => {
	return (
		<>
			<img className={styles.img} src={img} alt='' />
			<h2 className={styles.title}>{title}</h2>
		</>
	)
}
