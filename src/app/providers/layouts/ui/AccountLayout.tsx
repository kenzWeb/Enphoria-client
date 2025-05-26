import {useBreadcrumbs} from '@/shared/hooks/useBreadcrumbs'
import {Breadcrumbs} from '@/shared/ui/Other'
import {Menu} from '@/widgets/menu'

import {Outlet} from 'react-router-dom'

export const AccountLayout = () => {
	const breadcrumbs = useBreadcrumbs({
		items: [
			{
				name: 'Home',
				href: '/',
			},
		],
		endPage: 'My Account',
	})
	return (
		<div className='container !my-[2.5rem]'>
			<Breadcrumbs {...breadcrumbs} />
			<Menu />
			<Outlet />
		</div>
	)
}
