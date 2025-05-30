import {BreadcrumbsProvider, useBreadcrumbsContext} from '@/shared/contexts'
import {Breadcrumbs} from '@/shared/ui/Other'
import {Menu} from '@/widgets/menu'

import {Outlet} from 'react-router-dom'

const AccountLayoutContent = () => {
	const {endPage, items} = useBreadcrumbsContext()

	return (
		<div className='container !my-[2.5rem]'>
			<Breadcrumbs items={items} endPage={endPage} />
			<div className='flex gap-[50px] mt-[30px]'>
				<div className='w-[25%]'>
					<Menu />
				</div>
				<div className='w-[75%]'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export const AccountLayout = () => {
	return (
		<BreadcrumbsProvider
			defaultItems={[{name: 'Home', href: '/'}]}
			defaultEndPage='My Account'
		>
			<AccountLayoutContent />
		</BreadcrumbsProvider>
	)
}
