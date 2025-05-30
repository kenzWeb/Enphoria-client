import {ProfileAddressCard} from '@/entitles/profile'
import {PUBLIC_URL} from '@/shared/config/url.config'
import {useGetShipping} from '@/shared/hooks/queries/shipping/useGetShipping'
import {Title} from '@/shared/ui/Text'
import {useNavigate} from 'react-router-dom'
import styles from './ProfileAddress.module.scss'

export const ProfileAddress = () => {
	const {shipping} = useGetShipping()
	const navigate = useNavigate()

	const handleAddNew = () => {
		navigate(PUBLIC_URL.account('add-address'))
	}

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Title marginBottom='0' className={styles.title} favorite={false}>
					Address
				</Title>
				<h2 className={styles.addNew} onClick={handleAddNew}>
					Add New
				</h2>
			</div>
			<div className={styles.addressList}>
				{shipping?.map((address) => (
					<ProfileAddressCard key={address.id} address={address} />
				))}
				{shipping?.length === 0 && (
					<p className='text-gray-500'>No shipping address found.</p>
				)}
			</div>
		</div>
	)
}
