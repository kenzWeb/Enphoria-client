import {Layout} from '@/providers'
import {Breadcrumbs} from '@/shared/ui/Other'
import {FavoriteWarning} from '@/shared/ui/Text'
import {ShoppingCart} from '@/widgets/shoppingCart'

export const Favorites = () => {
	return (
		<>
			<Layout>
				<div className='container'>
					<Breadcrumbs />
					<FavoriteWarning />
				</div>
				<ShoppingCart />
			</Layout>
		</>
	)
}
