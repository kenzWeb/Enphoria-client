import {useBreadcrumbs} from '@/shared/hooks/useBreadcrumbs'
import {Breadcrumbs} from '@/shared/ui/Other'
import {Billing} from '@/widgets/billing'

export const CheckoutPage = () => {
	const breadcrumbs = useBreadcrumbs({
		items: [
			{
				name: 'Home',
				href: '/',
			},
			{
				name: 'My Account',
				href: '/account',
			},
		],
		endPage: 'Check Out',
	})
	return (
		<>
			<div className='container !my-[2.5rem]'>
				<Breadcrumbs {...breadcrumbs} />
				<Billing />
			</div>
		</>
	)
}
