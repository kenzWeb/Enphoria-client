import {ShoppingCartCard} from '@/entitles/shoppingCart'
import {useProfile} from '@/shared/hooks/api/useProfile'
import {getAccessToken} from '@/shared/services/auth/auth-token.service'
import {useCartStore} from '@/shared/store/cart.store'
import {Loader2} from 'lucide-react'
import {Link} from 'react-router-dom'
import styles from './styles.module.scss'

export const ShoppingCartContent = () => {
	const {isLoading, isFetching, isPending} = useProfile()

	const item = useCartStore((state) => state.cart)

	if (!getAccessToken()) {
		return (
			<h2 className={styles.empty}>Please login to see your shopping cart</h2>
		)
	}

	if (isLoading || isPending || isFetching) {
		return (
			<div className='w-full h-full flex items-center justify-center'>
				<Loader2 className='animate-spin' />
			</div>
		)
	}

	if (!item.length) {
		return (
			<div className='flex justify-center flex-col'>
				<h2 className={styles.empty}>Your shopping cart is empty</h2>
				<Link to={'/shop'} replace className={styles.navigate}>
					Navigate to Shop
				</Link>
			</div>
		)
	}

	return (
		<div className={styles.container}>
			{item.map((item) => (
				<ShoppingCartCard data={item} key={item.id} />
			))}
		</div>
	)
}
