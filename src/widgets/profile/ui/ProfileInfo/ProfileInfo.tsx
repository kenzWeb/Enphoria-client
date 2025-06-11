import {ProfileForm, ProfileHeading} from '@/features/profile'
import styles from './ProfileInfo.module.scss'
export const ProfileInfo = () => {
	return (
		<div className={styles.wrapper}>
			<ProfileHeading />
			<ProfileForm />
		</div>
	)
}
