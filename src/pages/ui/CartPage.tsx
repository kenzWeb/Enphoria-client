import {getAccessToken} from '@/shared/services/auth/auth-token.service'
import {Breadcrumbs} from '@/shared/ui/Other'
import {CartWarning} from '@/shared/ui/Text'
import {ShoppingCart} from '@/widgets/shoppingCart'

export const FavoritesPage = () => {
	return (
		<>
			<div className='container'>
				<Breadcrumbs />
				{getAccessToken() ? null : <CartWarning />}
			</div>
			<ShoppingCart />
		</>
	)
}
