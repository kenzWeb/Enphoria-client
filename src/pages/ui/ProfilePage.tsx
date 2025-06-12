import {useBreadcrumbsAccount} from '@/shared/hooks/useBreadcrumbsAccount'
import {ProfileAddress, ProfileInfo} from '@/widgets/profile'
import styles from './ProfilePage.module.scss'

export const ProfilePage = () => {
	useBreadcrumbsAccount()

	return (
		<div className={styles.container}>
			<ProfileInfo />
			<ProfileAddress />
		</div>
	)
}
