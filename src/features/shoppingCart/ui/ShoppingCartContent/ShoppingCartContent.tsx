import {useAppSelector} from '@/app/store/store'
import {ShoppingCartCard} from '@/entitles/shoppingCart'
import styles from './styles.module.scss'

export const ShoppingCartContent = () => {
	const favorites = useAppSelector((state) => state.favorite.favorite)
	return (
		<div className={styles.container}>
			{favorites.length === 0 && (
				<h2 className={styles.empty}>Your shopping cart is empty</h2>
			)}
			{favorites.map((item) => (
				<ShoppingCartCard data={item} cart={false} key={item.id} />
			))}
		</div>
	)
}
