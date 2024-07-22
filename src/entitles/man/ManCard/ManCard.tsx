import {IBase} from '@/entitles/zone/models/types'
import {IoIosArrowRoundForward} from 'react-icons/io'
import {Link} from 'react-router-dom'
import styles from './styles.module.scss'

export const ManCard = ({...props}: IBase) => {
	console.log(props)
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<img className={styles.img} src={props.img} alt={props.name} />
			</div>

			<div className={styles.content}>
				<div className={styles.info}>
					<h2 className={styles.title}>{props.type}</h2>
					<h3 className={styles.subtitle}>Explore Now!</h3>
				</div>
				<div className={styles.arrow}>
					<Link to={'/'}>
						<IoIosArrowRoundForward className={styles.icon} size={30} />
					</Link>
				</div>
			</div>
		</div>
	)
}
