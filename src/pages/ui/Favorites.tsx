import {Breadcrumbs} from '@/shared/ui/Other'
import {FavoriteWarning} from '@/shared/ui/Text'
import {ShoppingCart} from '@/widgets/shoppingCart'

export const FavoritesPage = () => {
	return (
		<>
			<div className='container'>
				<Breadcrumbs />
				<FavoriteWarning />
			</div>
			<ShoppingCart />
		</>
	)
}
