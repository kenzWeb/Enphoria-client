import {AddressForm} from '@/entitles/profile'
import {Title} from '@/shared/ui/Text'
import styles from './AddAddressForm.module.scss'

export const AddAddressForm = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Title marginBottom='0' className={styles.title} favorite={false}>
					Add New Address
				</Title>
			</div>

			<AddressForm />
		</div>
	)
}
