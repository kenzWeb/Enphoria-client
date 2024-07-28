import {ShoppingCartContent, ShoppingCartHeader} from '@/features/shoppingCart'
import styles from './styles.module.scss'

export const ShoppingCart = () => {
	return (
		<section className={styles.section}>
			<ShoppingCartHeader />
			<div className='container'>
				<ShoppingCartContent />
			</div>
		</section>
	)
}
