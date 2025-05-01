import {useBreadcrumbs} from '@/shared/hooks/useBreadcrumbs'
import {Breadcrumbs} from '@/shared/ui/Other'
import {Title} from '@/shared/ui/Text'
import {Billing} from '@/widgets/billing'
import {OrderSummary} from '@/widgets/order'

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
				<Title marginBottom='10' marginTop='52'>
					Check Out
				</Title>
				<div className='flex w-full gap-[38px] mt-[20px]'>
					<div className='w-[70%]'>
						<Billing />
					</div>
					<div className='w-[30%]'>
						<OrderSummary />
					</div>
				</div>
			</div>
		</>
	)
}
