import {useAuth} from '@/shared/hooks/api/useAuth'
import {useBreadcrumbs} from '@/shared/hooks/useBreadcrumbs'
import {Breadcrumbs} from '@/shared/ui/Other'
import {CartWarning} from '@/shared/ui/Text'
import {ShoppingCart, ShoppingCartSummary} from '@/widgets/shoppingCart'
import styles from './CartPage.module.scss'

export const CartPage = () => {
	const {isAuth} = useAuth()
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
		<div className={styles.container}>
			<div className='container !my-[2.5rem]'>
				<Breadcrumbs {...breadcrumbs} />
				{isAuth ? null : <CartWarning />}
			</div>
			<ShoppingCart />
			<ShoppingCartSummary />
		</div>
	)
}
