import {IProfileAddressCard} from '../../types'
import styles from './ProfileAddressCard.module.scss'

export const ProfileAddressCard = ({address}: IProfileAddressCard) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.name}>
				{address.firstName} {address.lastName}
			</h2>
			<h3 className={styles.phone}>{address.phone}</h3>

			<h3 className={styles.instruction}>{address.instruction}</h3>

			<div className={styles.address}>
				<button className={styles.button}>{address.company}</button>
			</div>

			<div className={styles.actions}>
				<h2 className={styles.remove}>Remove</h2>
				<h2 className={styles.edit}>Edit</h2>
			</div>
		</div>
	)
}
