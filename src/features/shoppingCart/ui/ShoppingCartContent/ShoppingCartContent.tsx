import {ShoppingCartCard} from '@/entitles/shoppingCart'
import {useProfile} from '@/shared/hooks/api/useProfile'
import styles from './styles.module.scss'

export const ShoppingCartContent = () => {
	const {user} = useProfile()
	return (
		<div className={styles.container}>
			{user?.favorites.length === 0 && (
				<h2 className={styles.empty}>Your shopping cart is empty</h2>
			)}
			{user?.favorites.map((item) => (
				<ShoppingCartCard data={item} key={item.id} />
			))}
		</div>
	)
}
