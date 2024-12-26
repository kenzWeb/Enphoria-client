import {useProfile} from '@/shared/hooks/api/useProfile'
import {Breadcrumbs} from '@/shared/ui/Other'
import {CartWarning} from '@/shared/ui/Text'
import {ShoppingCart} from '@/widgets/shoppingCart'

export const FavoritesPage = () => {
	const {user} = useProfile()
	return (
		<>
			<div className='container'>
				<Breadcrumbs />
				{user ? null : <CartWarning />}
			</div>
			<ShoppingCart />
		</>
	)
}
