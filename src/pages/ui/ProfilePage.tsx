import {useBreadcrumbsAccount} from '@/shared/hooks/useBreadcrumbsAccount'
import {ProfileInfo} from '@/widgets/profile'

export const ProfilePage = () => {
	useBreadcrumbsAccount()

	return (
		<div className=''>
			<ProfileInfo />
		</div>
	)
}
