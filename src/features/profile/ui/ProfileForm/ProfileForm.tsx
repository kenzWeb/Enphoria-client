import {PasswordChangeField, ProfileInputField} from '@/entitles/profile'
import {useProfile} from '@/shared/hooks/api/useProfile'
import styles from './ProfileForm.module.scss'

export const ProfileForm = () => {
	const {user} = useProfile()

	return (
		<div className={styles.container}>
			<ProfileInputField
				value={user?.name}
				title='Your Name'
				fieldName='name'
			/>
			<ProfileInputField
				value={user?.email}
				title='Email Address'
				fieldName='email'
			/>
			<PasswordChangeField />
		</div>
	)
}
