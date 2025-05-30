import {useBreadcrumbsAccount} from '@/shared/hooks/useBreadcrumbsAccount'
import {ProfileAddress, ProfileInfo} from '@/widgets/profile'

export const ProfilePage = () => {
	useBreadcrumbsAccount()

	return (
		<div className=''>
			<ProfileInfo />
			<ProfileAddress />
		</div>
	)
}
