import {ShoppingCartCard} from '@/entitles/shoppingCart'
import {useProfile} from '@/shared/hooks/api/useProfile'
import {useCartStore} from '@/shared/store/cart.store'
import {Loader2} from 'lucide-react'
import {Link} from 'react-router-dom'
import styles from './styles.module.scss'

export const ShoppingCartContent = () => {
	const {isLoading, isFetching, isPending, user} = useProfile()

	const items = useCartStore((state) => state.cart)

	if (!user) {
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

	if (!items.length) {
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
			{items.map((item) => (
				<ShoppingCartCard data={item} key={item.id + item.name} />
			))}
		</div>
	)
}
