import {useProfile} from '@/shared/hooks/api/useProfile'
import {useBreadcrumbs} from '@/shared/hooks/useBreadcrumbs'
import {Breadcrumbs} from '@/shared/ui/Other'
import {CartWarning} from '@/shared/ui/Text'
import {ShoppingCart, ShoppingCartSummary} from '@/widgets/shoppingCart'

export const CartPage = () => {
	const {user} = useProfile()
	const breadcrumbs = useBreadcrumbs({
		items: [
			{
				name: 'Home',
				href: '/',
			},
		],
		endPage: 'Add to Cart',
	})

	return (
		<>
			<div className='container !my-[2.5rem]'>
				<Breadcrumbs {...breadcrumbs} />
				{user ? null : <CartWarning />}
			</div>
			<ShoppingCart />
			<ShoppingCartSummary />
		</>
	)
}
