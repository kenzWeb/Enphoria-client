import {useBreadcrumbs} from '@/shared/hooks/useBreadcrumbs'
import {getAccessToken} from '@/shared/services/auth/auth-token.service'
import {Breadcrumbs} from '@/shared/ui/Other'
import {CartWarning} from '@/shared/ui/Text'
import {ShoppingCart} from '@/widgets/shoppingCart'

export const CartPage = () => {
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
				{getAccessToken() ? null : <CartWarning />}
			</div>
			<ShoppingCart />
		</>
	)
}
