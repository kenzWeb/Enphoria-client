import {ShoppingCartCard} from '@/entitles/shoppingCart'
import {useProfile} from '@/shared/hooks/api/useProfile'
import {Loader} from '@/shared/ui/Other'
import styles from './styles.module.scss'

export const ShoppingCartContent = () => {
	const {user, isLoading, isFetching, isPending} = useProfile()
	return (
		<div className={styles.container}>
			{isLoading || isPending || (isFetching && <Loader />)}
			{user?.favorites.length === 0 && (
				<h2 className={styles.empty}>Your shopping cart is empty</h2>
			)}
			{user?.favorites.map((item) => (
				<ShoppingCartCard data={item} key={item.id} />
			))}
			{!user && (
				<h2 className={styles.empty}>Please login to see your shopping cart</h2>
			)}
		</div>
	)
}
